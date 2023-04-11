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


  app.get("/tweets", (request, response) => {

    const tweetList = tweets.slice(-10).map((t) => {

    const user = usersList.find((u) => u.username === t.username)
    const newTweets = {...t,avatar: user.avatar} 

    return newTweets;  
    })
    response.send(tweetList)
  })




app.post("/tweets", (request, response) => {
    const { username, tweet } = request.body    
    const registred = usersList.some(user => user.username === username)
    const newTweet = { username, tweet }
    const tweetEmpty = request.body.tweet

    if(tweetEmpty===""){ 
    response.status(400).send("[ERRO] Você precisa preencher todos os campos")
    console.log("[Erro] Você precisa preencher todos os campos")
    return;
    }

    if(registred)
    {
        tweets.push(newTweet);
        console.log("success");
        response.status(201).send("OK");
    } else {
        console.log("UNAUTHORIZED");
        response.status(401).send("UNAUTHORIZED");
    }
});

app.listen(5000, () => console.log("servidor rodando na porta 5000"))