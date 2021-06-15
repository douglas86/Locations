import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import keys from './config/keys';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const CONNECTION_URL = keys.mongodb.dbURI;
const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server is running on port: ${PORT}`)
        )
    )
    .catch((err) => err.message);

mongoose.set('useFindAndModify', false);
