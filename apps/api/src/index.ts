import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { prisma } from '@saas-ai-test/database';

dotenv.config();

const app = express();

const port = Number(process.env.PORT ?? 4000);
const webOrigin = process.env.WEB_ORIGIN ?? 'http://localhost:3000';

app.use(
  cors({
    origin: webOrigin,
    credentials: true
  })
);

app.get('/healthz', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({ status: 'ok', database: 'reachable' });
  } catch (error) {
    res.status(503).json({ status: 'degraded', error: (error as Error).message });
  }
});

app.get('/', (_req, res) => {
  res.json({ message: 'API up and running' });
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
  console.log(`CORS enabled for ${webOrigin}`);
});
