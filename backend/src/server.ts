import express from 'express';
import {connectDb} from './config/db'
const app = express();
const port = 3000;




connectDb();

app.get('/', (req, res) => {
  res.send('Hello, TypeScript + Node.js + Express!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
