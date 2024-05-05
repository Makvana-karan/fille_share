import express from "express";
import router from "./routes/rotes.js";
import DBconnestion from "./database/db.js";

const app = express();
app.use(cors());

app.use("/", router);

DBconnestion();

app.listen(3001, () => {
  console.log("Example app listening on port 3000!");
});
