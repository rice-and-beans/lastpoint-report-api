import express from 'express';
import { report } from './routes/reportRoutes';

const app = express();

app.use(express.json());
app.use('/report', report);

export { app }