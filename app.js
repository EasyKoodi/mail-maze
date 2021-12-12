const { configMailMaze } = require('./dist/index');

const mailMaze = configMailMaze({
    emails: [
        'test@test.com',
        'john@doe.com',
        'jane@doe.com',
        'jane@doe.com',
        'jane@doe.com',
        'jane@doe.com',
        'jane@doe.com',
        'jane@doe.com',
        'jane@doe.com',
        'jane@doe.com',
        'demo@jippii.fi',
        'fake@pp.inet.fi',
        'fake@pp.inet.fi',
        'fake@pp.inet.fi',
        'fake@pp.inet.fi',
        'fake@pp.inet.fi',
        'fake@pp.inet.fi',
        'fake@pp.inet.fi',
        'fake@pp.inet.fi',
        'fake@pp.inet.fi',
        'fake@pp.inet.fi',
        'fake@pp.inet.fi',
        'fake@pp.inet.fi',
    ],
    limit: 10,
});
console.log(mailMaze);
