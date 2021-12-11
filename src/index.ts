import { IConfig } from './@types/types';

const config = (config: IConfig) => {
    const mailMaze = new MailMaze(config).filterMailMaze();
    if (!mailMaze.emails) {
        return new Error("Email list wasn't provided");
    } else if (!mailMaze.limit) {
        return new Error("Limit wasn't provided");
    } else {
        return mailMaze;
    }
};

class MailMaze implements IConfig {
    public emails: string[];
    public limit: number | undefined;
    public constructor(config: IConfig) {
        this.emails = config.emails || undefined;
        this.limit = config.limit || undefined;
    }
    public filterMailMaze = () => {
        for (const key in this) {
            if (this[key] === undefined) {
                delete this[key];
            }
        }
        return this;
    };
}

export default config;
