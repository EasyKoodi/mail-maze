import { IProviderConfig, ISender } from '../@types/types';

export default class Provider {
    private apiKey: string | undefined;
    private apiSecret: string | undefined;
    private sender: ISender;
    private recepient: string | string[] | undefined;
    private title: string | undefined;
    /** Create Provider instance */
    public constructor(config: IProviderConfig) {
        this.apiKey = config.apiKey || undefined;
        this.apiSecret = config.apiSecret || undefined;
        this.sender = config.sender || undefined;
        this.recepient = config.recepient || undefined;
        this.title = config.title || undefined;
    }
    /** Get values */
    public getProviderConfig() {
        return {
            apiKey: this.apiKey,
            apiSecret: this.apiSecret,
            sender: this.sender,
            recepient: this.recepient,
            title: this.title,
        };
    }
}
