import express from "express"

const app = express();

app.get("/teste", (resquest, response) => {

response.send("testeee")


} )


app.listen(5000, () => console.log("servidor rodando"))