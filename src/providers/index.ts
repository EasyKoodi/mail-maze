import { IProviderConfig, IContact, Providers } from '../@types/types';
import { sendWithSendingBlue } from './sendingBlue';

export default class Provider {
    private apiKey: string;
    private sender: IContact;
    private reciever: IContact;
    private recievers?: IContact[];
    private subject: string;
    private body: string;
    /** Create Provider instance */
    public constructor(config: IProviderConfig) {
        this.apiKey = config.apiKey || undefined;
        this.sender = config.sender || undefined;
        this.reciever = config.reciever || undefined;
        this.recievers = config.recievers || undefined;
        this.subject = config.subject || undefined;
        this.body = config.body || undefined;
    }
    /** Get values */
    public getProviderConfig() {
        return {
            apiKey: this.apiKey,
            sender: this.sender,
            reciever: this.reciever,
            recievers: this.recievers,
            subject: this.subject,
            body: this.body,
        };
    }
    public filterProvider = () => {
        for (const key in this) {
            if (this[key] === undefined) {
                delete this[key];
            }
        }
        return this;
    };
    /** Send email */
    public sendEmail = (provider: Providers, contacts: IContact[]) => {
        if (provider === 'sending-blue') {
            sendWithSendingBlue(this.getProviderConfig(), contacts);
        }
    };
}
