/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { Request, Response } from 'express';
import express from 'express';

const app = express();

// parse application/json
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use((_, __, next) => {
  console.log('middleware1');
  next();
});

app.use((_, __, next) => {
  console.log('middleware2');
  next();
});

app.get('/', (_: Request, res: Response) => {
  res.send('alive!');
});

// GET
app.get('/get/query', (req: Request, res: Response) => {
  res.send(req.query);
});

app.get('/get/param/:name', (req: Request, res: Response) => {
  res.send(req.params);
});

app.get('/get/body', (req: Request, res: Response) => {
  res.send(req.body);
});

// POST
app.post('/post/query', (req: Request, res: Response) => {
  res.send(req.query);
});

app.post('/post/param/:name', (req: Request, res: Response) => {
  res.send(req.params);
});

app.post('/post/body', (req: Request, res: Response) => {
  res.send(req.body);
});

// PUT
app.put('/put/query', (req: Request, res: Response) => {
  res.send(req.query);
});

app.put('/put/param/:name', (req: Request, res: Response) => {
  res.send(req.params);
});

app.put('/put/body', (req: Request, res: Response) => {
  res.send(req.body);
});

// DELETE
app.delete('/delete/query', (req: Request, res: Response) => {
  res.send(req.query);
});

app.delete('/delete/param/:name', (req: Request, res: Response) => {
  res.send(req.params);
});

app.delete('/delete/body', (req: Request, res: Response) => {
  res.send(req.body);
});

// STATUS
app.get('/404', (_: Request, res: Response) => {
  res.status(404).send('페이지가 없습니다.');
});

app.get('/204', (_: Request, res: Response) => {
  res.status(204).send('페이지가 없습니다.');
});

// DATA handling
let variable: (number | string)[] = [];

app.get('/variable', (_: Request, res: Response) => {
  res.send(variable);
});

app.post('/variable', (req: Request, res: Response) => {
  variable.push(req.body.variable);
  res.send();
});

app.delete('/variable', (req: Request, res: Response) => {
  variable = [];
  res.send();
});

app.listen('8080', () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: 8080
  ################################################
`);
});
