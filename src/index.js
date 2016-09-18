import express from 'express';
import users from './routes/users';
import main from './routes/main';

const app = express();

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});

app.use('/', main);
app.use('/users/', users);