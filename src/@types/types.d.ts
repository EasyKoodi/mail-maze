export interface IConfig {
    emails: string[];
    limit: number;
    chunks?: any[];
}

export interface ISender {
    name: string;
    email: string;
}

export interface IProviderConfig {
    apiKey: string;
    apiSecret: string;
    sender: ISender;
    recepient: string | string[];
    title: string;
}
