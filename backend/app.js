require('dotenv').config();
const express = require('express');
const sequelize = require('./database');
const models = require('./models/models');
const cors = require('cors');
const appRouter = require('./routes/index');
const { 
  sendError, 
} = require('./middlewares/sendError');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(appRouter);
app.use(sendError);

app.get('/', (req, res) => {
  res.status(200).json({message: 'Working!'})
})

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  } catch (e) {
      console.log(e);
  }
};

start();