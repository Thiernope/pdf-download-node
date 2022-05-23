import express from "express"
import cors from "cors"

const app = express();
app.use(cors());

app.get("/download-pdf", (req, res)=> {
    res.download("./thierry_cv.pdf")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`App is running on ${PORT}`))
