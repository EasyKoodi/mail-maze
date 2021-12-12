const { configMailMaze } = require('./dist/index');

const mailMaze = configMailMaze({
    emails: ['test@test.com', 'john@doe.com', 'jane@doe.com', 'romantuomisto@gmail.com', 'devdesignrt@gmail.com', 'tuonlauri@msn.com', 'venpo.energia@gmail.com', 'asiakaspalvelu@halkoliiteri.com', 'info@rollingrecords.fi', 
    'easykoodi@gmail.com', 'tuomroman@gmail.com', 'tuomlarissa@hotmail.com', 'demo@jippii.fi', 'fake@pp.inet.fi'],
    limit: 10,
});
console.log(mailMaze);
