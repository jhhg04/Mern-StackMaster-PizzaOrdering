const express = require('express');
const db = require('./db');
const Pizza = require('./models/pizzaModel');
const app = express();
const pizzasRoute = require('./routes/pizzasRoute');
const userRoute = require('./routes/userRoute');

app.use(express.json());

app.use('/api/pizzas', pizzasRoute);
app.use('/api/users', userRoute);

app.get('/', (req, res) => {
  res.send('Server Working');
});

/* 
app.get('/getpizzas', (req, res) => {
  Pizza.find({}, (err, docs) => {
    res.send(docs);
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});
*/

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on port ${port}`));
