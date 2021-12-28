import { configMailMaze } from '.';

function setProviderConfig() {
    return {
        apiKey: '1234567890api',
        sender: {
            name: 'Test company',
            email: 'test.company@mail.com',
        },
        reciever: {
            name: 'Test reciever',
            email: 'test.reciever@mail.com',
        },
        subject: 'Test email',
        body: 'test email body text',
    };
}

describe('initialize mailmaze', () => {
    test('should return mailmaze with config object', () => {
        const mailMaze: any = configMailMaze({
            provider: 'sending-blue',
            providerConfig: setProviderConfig(),
            emails: [{ email: 'test@gmail.com', name: 'test user' }],
            limit: 99,
        });
        expect(mailMaze.limit).toStrictEqual(99);
    });

    test('should throw error on missing emails parameter', () => {
        const mailMaze = configMailMaze({
            limit: 12,
            emails: [],
            provider: 'sending-blue',
            providerConfig: setProviderConfig(),
        });
        expect(mailMaze).toEqual(new Error("Email list wasn't provided"));
    });

    test('should throw error on missing limit parameter', () => {
        const mailMaze = configMailMaze({
            limit: 0,
            emails: [],
            provider: 'sending-blue',
            providerConfig: setProviderConfig(),
        });
        expect(mailMaze).toEqual(new Error("Limit wasn't provided"));
    });

    test('should invoke sendingBlue when called with provider sending-blue', () => {
        const mailMaze = configMailMaze({
            limit: 0,
            emails: [],
            provider: 'sending-blue',
            providerConfig: setProviderConfig(),
        });
        expect(mailMaze).toEqual(new Error("Limit wasn't provided"));
    });
});
