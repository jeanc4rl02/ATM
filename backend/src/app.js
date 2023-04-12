
// Importing the express module
import express from 'express';
// Importing morgan
import morgan from 'morgan';
// Importing the cors module
import cors from 'cors';
// Importing the swagger UI
import swaggerUi from 'swagger-ui-express';
// Importing the swagger configuration
import swaggerConfiguration from './config/swagger.config.js';
// Importing account routes
import accountRoutes from './routes/account.routes.js'; 
import CityRouter from './routes/city.routes.js' 
import atmRouter from './routes/atm.routes.js'; 
// Creating an instance of express
const app = express();

// Set the middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Set routes
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfiguration));
app.use('/api/v1/accounts', accountRoutes); 
app.use('/api/v1/city', CityRouter) 
app.use('/api/v1/atms', atmRouter); 

// Exporting the app
export default app;
