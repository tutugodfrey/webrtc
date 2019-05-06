import express from 'express';
import dotenv from 'dotenv';

dotenv.config()
const app = express();
const port = process.env.PORT || 3002;

app.use(express.static('public'))
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => {
  console.info('Listening on %d', port);
});
