import _ from './env';
const polyfill = require('babel-polyfill');
const register = require('babel-core/register');
import Express from 'express';
import bodyParser from 'body-parser';
import api from './routes';
import cors from 'cors';
import methodOverride from 'method-override';
import { errors } from 'celebrate';
import sanitizer from 'express-sanitizer';
import helmet from 'helmet';
import compression from 'compression';

if (!process.env.INFURA_ID || !process.env.INFURA_SECRET) {
  throw new Error('Please set your Infura ID and Secret in your .env file.' + 'Refer to the Setup section of the README for help');
}

const app = new Express();

app.use(cors({
  origin: true,
  credentials: true
}));
app.options('*', cors());

app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }));
app.use(methodOverride());
app.use(sanitizer());
app.use(helmet());
app.use(compression());
app.use('/', api);

app.use(errors);

app.listen(process.env.PORT || 5000, err => {
  if (!err) {
    console.log(`Server is running on port: ${process.env.PORT || 5000}`);
  }
});

startJobs();

export default app;
//# sourceMappingURL=app.js.map