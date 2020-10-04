import {Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinute from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
}

export default class ClassesController{

    async index (request: Request, response: Response){
        const filters = request.query;

        if (!filters.week_day || !filters.subject || !filters.time ){
            return response.status(400).json({
                error: "Missing filters to search classes"
            })
        }

        
        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        const timeInMinutes = convertHourToMinute(time);

        const classes = await db('classes')
            .whereExists(function() {  //Sub query - retorna false se não existir
                this.select('class_schedule.*')
                .from('class_schedule')
                .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                .whereRaw('`class_schedule`.`week_day`= ??', [Number(week_day)])
                .whereRaw('`class_schedule`.`from`<= ??', [timeInMinutes])
                .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])

            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.users_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);


        return response.json(classes);

    }

    async create (request: Request, response: Response){
        const {
            name,
                avatar,
                whatsapp,
                bio,
                subject,
                coast,
            schedule    
        } = request.body;
    
        const trx = await db.transaction();
    
        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar, 
                whatsapp,
                bio
            });
        
            const users_id = insertedUsersIds[0];
        
            const insertedClassesIds = await trx('classes').insert({
                subject,
                coast,
                users_id
            });
        
            const class_id = insertedClassesIds[0];
        
            const classSchecule = schedule.map((scheduleItem: ScheduleItem) => {
                return ({
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinute(scheduleItem.from),
                    to: convertHourToMinute(scheduleItem.to),
                });
            });
        
            await trx('class_schedule').insert(classSchecule);
            
            await trx.commit();
    
            response.status(201).send();
    
        } catch (error) {
            await trx.rollback();
    
            console.log(error);
            return response.status(400).json({
                erro: 'Unexpected error while creating new class'
            })
    
        }
    }
} 