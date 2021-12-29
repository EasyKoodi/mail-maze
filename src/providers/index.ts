import { IProviderConfig, IContact, Providers } from '../@types/types';
import { sendWithSendingBlue } from './sendingBlue';

export default class Provider {
    private apiKey: string | undefined;
    private sender: IContact;
    /** Create Provider instance */
    public constructor(config: IProviderConfig) {
        this.apiKey = config.apiKey || undefined;
        this.sender = config.sender || undefined;
    }
    /** Get values */
    public getProviderConfig() {
        return {
            apiKey: this.apiKey,
            sender: this.sender,
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
