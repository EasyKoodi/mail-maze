const config = require('./dist/index');

const mailMaze = config({ emails: ['test@test.com', 'john@doe.com'] });
console.log(mailMaze);
