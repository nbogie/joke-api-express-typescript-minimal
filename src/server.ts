import express from "express";
const app = express();

const x: string = "hello";
console.log("Hello C9 typescript world");

interface Message {
    author: string;
    text: string;
}

const messages: Message[] = [{ author: "neill", text: "first!" }];

app.get("/messages", (req, res) => {
    res.json(messages);
});

app.listen(4000, () => {
    console.log("server started listening");
});
