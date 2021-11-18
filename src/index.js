import express from 'express';
import cors from 'cors';
import renderer from './renderer'


const app = express();
app.use(cors());
app.use(express.static("./build"));

app.get("*", (req, res) => {
    const content = renderer(req);
    res.send(content);
})








const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})