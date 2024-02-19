import express from 'express'
import mongoose from 'mongoose'
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/soccerRoutes';
const app = express();
const PORT = 4000;

//Database connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB',{
useNewUrlParser: true,
useUnifiedTopology:true
}).then(()=>{
    console.log('Connection successful');
}).catch((err)=>{
    console.log('Unsuccessful connection');
});

//BodyParser setup
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());

//CORS setup
app.use(cors());

routes(app);


app.get('/', (req,resp)=>
resp.send(`Our Soccer application is running on port ${PORT}`)
)

app.listen(PORT, ()=>
console.log(`Your soccer application is running on port ${PORT}`)
)