import { transports, format, createLogger } from "winston";


export function options(scenarioName: string) {
    // Log the string "THIS IS A TEST" using Winston's logger



    const testStringLogger = createLogger({
        transports: [
            new transports.File({
                filename: `test-results/logs/${scenarioName}.log`,
                level: 'silly',
                format: format.combine(
                    format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
                    format.align(),
                    format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)
                )
            })
        ]
    });

    // Log the string "THIS IS A TEST"
    testStringLogger.info(scenarioName);

    // Return the logger configuration
    return {
        transports: [
            new transports.File({
                filename: `test-results/logs/${scenarioName}.log`,
                level: 'silly',
                format: format.combine(
                    format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
                    format.align(),
                    format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)
                )
            })
        ]
    };
}