export type Providers = 'sending-blue' | 'send-grid' | 'mailgun';

export interface IConfig {
    emails: string[];
    limit: number;
    chunks?: IContact[][];
}

export interface IContact {
    name: string;
    email: string;
}

export interface IProviderConfig {
    apiKey: string;
    sender: IContact;
    reciever: IContact;
    recievers?: IContact[];
    subject: string;
    body: string;
}
