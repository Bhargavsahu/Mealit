import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({
    path: "./.env",
  });

const app = express();

const PORT = process.env.PORT || 8080;
app.use(cors()); 
app.use(express.json()); 


app.get('/', (req, res) => {
  res.send('Server is running!');
});


app.listen(8080, () => {
  console.log(`Server is running on port ${PORT}`);
});
