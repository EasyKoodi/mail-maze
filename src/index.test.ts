import { configMailMaze } from '.';

describe('initialize mailmaze', () => {
    test('should return mailmaze with config object', () => {
        const mailMaze: any = configMailMaze({
            emails: ['test@gmail.com'],
            limit: 99,
        });
        expect(mailMaze.limit).toStrictEqual(99);
    });

    test('should throw error on missing emails parameter', () => {
        const mailMaze: any = configMailMaze({ limit: 12, emails: [] });
        expect(mailMaze).toEqual(new Error("Email list wasn't provided"));
    });

    test('should throw error on missing limit parameter', () => {
        const mailMaze: any = configMailMaze({
            limit: 0,
            emails: ['test@test.com'],
        });
        expect(mailMaze).toEqual(new Error("Limit wasn't provided"));
    });
});
