import express from "express";
import { sum } from "./sum.js";
const app = express();
import cors from "cors";

app.use(express.json());
app.use(cors());

console.log("Hello C9 typescript world");

interface Message {
    author: string;
    text: string;
}

const messages: Message[] = [{ author: "neill", text: "first!" }];

app.get("/messages", function (_req, res) {
    res.json(messages);
});

app.post("/messages", (req, res) => {
    const newMessage = req.body;
    if (!newMessage) {
        console.error("new message not received in POST /messages");
        res.status(400).json({ error: "missing message from request body" });
        return;
    }
    console.log({ newMessage });
    messages.push(newMessage);

    res.json({ outcome: "success", message: newMessage });
});

app.get("/sum/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const result = sum(a, b);
    res.json({ inputs: [a, b], result });
});

app.listen(4000, () => {
    console.log("server started listening");
});
