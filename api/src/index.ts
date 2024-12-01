import express from 'express';

import productsRouter from './routes/products/index';
const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use("/products", productsRouter);


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})