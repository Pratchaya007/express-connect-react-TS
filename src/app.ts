import express from 'express'
import { env } from './config/env.config.js'
import { notFound } from './middlewares/notfound.middleware.js';
import { error } from './middlewares/errormiddlewares.js';
import cors from 'cors'
import morgan from 'morgan'
import { authRouter } from './router/auth.router.js';

const app = express();

app.use('/auth', authRouter)

app.use(express.json());
app.use(morgan('dev'))
app.use(cors())



app.use(notFound);
app.use(error);

const PORT = env.PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server is runnig on Port http://localhost:${PORT}`)
})