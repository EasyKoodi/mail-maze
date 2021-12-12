import { IConfig } from './@types/types';
import { chunkArray } from './utils';

export const configMailMaze = (config: IConfig) => {
    const mailMaze = new MailMaze(config).filterMailMaze().createSequence();
    if (!mailMaze?.emails) {
        return new Error("Email list wasn't provided");
    } else if (!mailMaze?.limit) {
        return new Error("Limit wasn't provided");
    } else {
        return mailMaze;
    }
};

class MailMaze implements IConfig {
    public emails: string[];
    public limit: number;
    public chunks?: any[];
    public constructor(config: IConfig) {
        this.emails = config.emails || undefined;
        this.limit = config.limit || 99;
    }
    public filterMailMaze = () => {
        for (const key in this) {
            if (this[key] === undefined) {
                delete this[key];
            }
        }
        return this;
    };
    /** create sequence */
    public createSequence = () => {
        if (this.emails.length > this.limit) {
            this.chunks = chunkArray(this.emails, this.limit);
            return this;
        } else {
            return this;
        }
    };
}
