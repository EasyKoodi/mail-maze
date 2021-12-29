export type Providers = 'sending-blue' | 'send-grid' | 'mailgun';

export interface IMailMaze {
    emails: IContact[];
    limit: number;
    provider: Providers;
    providerConfig: IProviderConfig;
    chunks?: any;
}

export interface IContact {
    name: string;
    email: string;
}

export interface IProviderConfig {
    apiKey: string | undefined;
    sender: IContact;
}

export interface IEmail {
    reciever?: IContact;
    recievers?: IContact[];
    subject: string | undefined;
    body: string | undefined;
}
