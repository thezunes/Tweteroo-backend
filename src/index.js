import express from "express"
import cors from "cors"

const app = express();

const usersList = [];
const tweets = [];

app.use(cors())
app.use(express.json())

app.post("/sign-up", (request, response) => {

const {username, avatar} = request.body

if(!username || !avatar){ return response.status(422).send("Você precisa preencher todos os campos");}

const user = {username, avatar};
usersList.push(user);
return response.status(201).send("ok");

} )

app.listen(5000, () => console.log("servidor rodando na porta 5000"))