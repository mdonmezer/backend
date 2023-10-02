import express from "express"
const router = express.Router()

router.post("create",async(req,res)=> {
    res.send("create");
})
export default router
