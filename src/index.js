import express from "express"
import cors from "cors"

const app = express();

const usersList = [];
const tweets = [];

app.use(cors())
app.use(express.json())

app.post("/sign-up", (request, response) => {
   const {username, avatar} = request.body;
  
    if (!username || !avatar) { response.status(422).send("[ERRO] Você precisa preencher todos os campos")}
    else {
    const user = {username, avatar};
    usersList.push(user);
    console.log("success")
    response.status(201).send("OK");
    console.log(usersList)
    }
  }); 
    

    app.post("/tweets", (request, response) => {
        const { username, tweet } = request.body    
        const registred = usersList.some(user => user.username === username)

        if (registred)
        {
            const newTweet = { username, tweet };
            tweets.push(newTweet);
            console.log("success");
            response.status(201).send("OK");
        } else {
            console.log("UNAUTHORIZED");
            response.status(401).send("UNAUTHORIZED");
        }
    });

app.listen(5000, () => console.log("servidor rodando na porta 5000"))