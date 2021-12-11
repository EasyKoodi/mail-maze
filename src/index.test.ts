import config from '.';

test('should return config', () => {
    const mailMaze = config({ emails: ['tuomroman@gmail.com'], limit: 99 });
});
