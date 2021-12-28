export type Providers = 'sending-blue' | 'send-grid' | 'mailgun';

export interface IMailMaze {
    emails: IContact[];
    limit: number;
    provider: Providers;
    providerConfig: IProviderConfig;
    chunks?: Array<IContact[]>;
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
