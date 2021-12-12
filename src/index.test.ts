import { configMailMaze } from '.';

describe('initialize mailmaze', () => {
    test('should return mailmaze with config object', () => {
        const mailMaze: any = configMailMaze({
            emails: ['tuomroman@gmail.com'],
            limit: 99,
        });
        expect(mailMaze.limit).toStrictEqual(99);
    });
});
