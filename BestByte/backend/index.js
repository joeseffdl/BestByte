// import express
import express from "express"; 
// import cors
import cors from "cors";
// import routes
import Router from "./routes/routes.js";

import serverless from "serverless-http";
 

// init express
const app = express();
 
// use express json
app.use(express.json());
 
// use cors
app.use(cors());
 
// use router
app.use('/', Router);
 
app.listen(5000, () => console.log('Server running at http://localhost:5000'));

export const servelesshttp = serverless(app)
