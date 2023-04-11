import express from "express"
import cors from "cors"

const app = express();

const usersList = [];
const tweets = [];

app.use(cors())
app.use(express.json())

app.post("/sign-up", (request, response) => {
   const {username, avatar} = request.body;
  
    if (!username || !avatar) { response.status(422).send("Você precisa preencher todos os campos")}
    else {
    const user = {username, avatar};
    usersList.push(user);
    response.status(201).send("ok");
    }
  }); 

app.listen(5000, () => console.log("servidor rodando na porta 5000"))