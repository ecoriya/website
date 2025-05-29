import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
require('dotenv').config();

import appointmentRoutes from './routes/appointmentRoutes';

const app = express();
app.use(cors());
app.use(json());

app.use('/api/appointments', appointmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
