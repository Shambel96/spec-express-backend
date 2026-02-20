import express from "express";
import userRoutes from "./routes/users.routes.js"
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();
const port = 3333;
app.use(express.json());
app.use(errorMiddleware);

app.get("/", (req, res)=>{
    res.send("Wel come to SPEC!")
}
)
app.use("/users", userRoutes)
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
}
    
)