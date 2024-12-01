import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Heloow from Nishanth");
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})