const express = require(`express`);
const app = express();
const port = 3000;
const moviesRouter = require(`./router/movies`)

app.use(`/`, moviesRouter);
app.set(`view engine`, `ejs`);

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
} )