import express from "express";
import 'dotenv/config';
import noticiasRouter from "../src/routers/noticiasRouter.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/noticias", noticiasRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
