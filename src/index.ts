import express from "express";
import { Queue } from "./services/Queue";
const app = express();

app.get('/', async (req, res): Promise<void> => {
    res.send('Hello!');
});

app.get('/send-message', async (req, res): Promise<void> => {
    const queue: Queue = new Queue();

    try {
        await queue.init();
        await queue.sendMessage('queue-test', 'hello');
        res.send('Done!');
    } catch (e: any) {
        console.log(e);
        res.send('Error!');
    }
});

const port: string | 3000 = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT=${port}`));
