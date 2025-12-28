import express, { json } from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express';
import { serve } from 'inngest/express';
import { inngest, functions } from './inngest/index.js';

const app = express();
const port = 3000;

await connectDB()
 //Middle
app.use(json())
app.use(cors())
app.use(clerkMiddleware())
// Api routes
app.get('/', (req, res) => res.send('server is live'))
app.use('/api/inngest', serve({ client: inngest, functions}))
app.listen(port, () => console.log(`Server running on port http://localhost:${port}`))
