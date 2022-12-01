const express= require("express")
const app =express()
const PORT=process.env.PORT || 3000


app.get(`/`, (req,res) => {
    res.send(`we are on home`);
});


app.listen(PORT,()=>{ console.log(`listning on port ${PORT}`)});