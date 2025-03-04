

const express = require("express");
const app = express();
const port = 8080;

const users = [
    { username: "alice", age: 25, email: "alice@example.com" },
    { username: "bob", age: 30, email: "bob@example.com" },
    { username: "charlie", age: 28, email: "charlie@example.com" }
];

app.get("/user", (req, res) => {
    const username = req.query.user;

    if (!username) {
        return res.status(400).json({ message: "User parameter cannot be empty" });
    }

    const userDetails = users.find(user => user.username.toLowerCase() === username.toLowerCase());
    if (userDetails) {
        return res.json({ message: "User found", data: userDetails });
    } else {
        return res.status(404).json({ message: "User not found" });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

