import express from 'express';

export const app = express();

app.use(express.json());

export const server = app.listen(3000, () => 'server running on port 3000');
