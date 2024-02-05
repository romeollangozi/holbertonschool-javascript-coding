import express from 'express';
import router from './routes/index';

const PORT = 1245;
const app = express();

app.use(router);

app.listen(PORT, () => {
  console.log('');
});

export default app;
