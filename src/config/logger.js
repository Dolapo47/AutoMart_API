import {
    createLogger,
     transports,
      format,
      level
    } from 'winston';

 export const logger = createLogger({
        transports: [
            new transports.Console({
                level: 'info'
            })
        ]
    })
