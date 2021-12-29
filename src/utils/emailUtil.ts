import { IContact, IEmail } from '../@types/types';

export default class Email implements IEmail {
    public subject: string | undefined;
    public body: string | undefined;
    public reciever: IContact | undefined;
    public recievers?: IContact[];
    public constructor(email: IEmail) {
        this.subject = email.subject || undefined;
        this.body = email.body || undefined;
        this.reciever = email.reciever || undefined;
        this.recievers = email.recievers || undefined;
    }
    /** Filter email */
    public filterProvider = () => {
        for (const key in this) {
            if (this[key] === undefined) {
                delete this[key];
            }
        }
        return this;
    };
}
