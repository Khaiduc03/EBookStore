import { logger, consoleTransport } from 'react-native-logs';

const defaultConfig = {
    levels: {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3,
    },
    severity: 'debug',
    transport: consoleTransport,
    transportOptions: {
        colors: {
            info: 'blueBright',
            warn: 'yellowBright',
            error: 'redBright',
        },
    },
    async: true,
    dateFormat: 'time',
    printLevel: true,
    printDate: true,
    enabled: true,
};

const log = logger.createLogger(defaultConfig);

class BaseLogger {
    log: any;

    constructor(name: string) {
        this.log = log.extend(name);
    }
}

export class Logger extends BaseLogger {
    constructor(name: string) {
        super(name);
    }

    debug(message: any, ...args: any[]) {
        this.log.debug(message, ...args);
    }

    info(message: any, ...args: any[]) {
        this.log.info(message, ...args);
    }

    warn(message: any, ...args: any[]) {
        this.log.warn(message, ...args);
    }

    error(message: any, ...args: any[]) {
        this.log.error(message, ...args);
    }
}
