const { configMailMaze } = require('./dist/index');

const mailMaze = configMailMaze({
    emails: [
        'test@test.com',
        'john@doe.com',
        'jane@doe.com',
        'romantuomisto@gmail.com',
        'devdesignrt@gmail.com',
        'tuonlauri@msn.com',
        'venpo.energia@gmail.com',
        'asiakaspalvelu@halkoliiteri.com',
        'info@rollingrecords.fi',
        'easykoodi@gmail.com',
        'tuomroman@gmail.com',
        'tuomlarissa@hotmail.com',
        'demo@jippii.fi',
        'fake@pp.inet.fi',
        'n.v.antonova@rambler.ru',
        'n.v.antonova2@rambler.ru',
        'n.v.antonova3@rambler.ru',
        'n.v.antonova4@rambler.ru',
        'n.v.antonova5@rambler.ru',
        'n.v.antonova6@rambler.ru',
        'n.v.antonova7@rambler.ru',
        'n.v.antonova8@rambler.ru',
    ],
    limit: 10,
});
console.log(mailMaze);
