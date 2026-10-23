import express from 'express';

export const app = express();

app.get('/', (_req, res) => {
  res.status(200).json({ data: "I'm working" });
});
