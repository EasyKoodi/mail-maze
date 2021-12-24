import { IConfig, IContact, IProviderConfig, Providers } from './@types/types';
import Provider from './providers';
import { chunkArray } from './utils';

export const configMailMaze = (config: IConfig) => {
    const mailMaze = new MailMaze(config).filterMailMaze().createSequence();
    if (!mailMaze?.emails.length) {
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
    public chunks?: IContact[][];
    public constructor(config: IConfig) {
        this.emails = config.emails || undefined;
        this.limit = config.limit || 0;
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
    /** Get Chunks */
    public getChunks = () => {
        return this.chunks;
    };
    /** Send in sequences */
    public sendInSequences = (
        config: IProviderConfig,
        providerName: Providers,
    ) => {
        const provider = new Provider(config);
        if (this.chunks?.length) {
            this.chunks.map((contacts: IContact[]) => {
                provider.sendEmail(providerName, contacts);
            });
        }
    };
}
