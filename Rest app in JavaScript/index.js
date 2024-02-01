const app = require("express")();

const PORT = 8080;

app.listen(
    8080,
    () => console.log(`Its alive on ${PORT}`)
)