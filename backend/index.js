import express from 'express';

import Connection from './db.js';
import Router from './routes/route.js';
import cors from 'cors';

const app = express();
const port = 5000;

Connection();

app.use(cors());
app.use(express.json())
//Admin Routes
app.use('/', Router);


// app.get('/', (req, res)=>{
//     res.send("Hy Mr.Krishna");
// })

app.listen(port, ()=>{
    console.log(`Online examination system is listening on http://localhost:${port}`);
})

