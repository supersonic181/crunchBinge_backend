const path = require("path");

const router = require("express").Router();
router.get('/', (req, res) => {
    res.send("Hello World");
})
router.get("/health", (req, res) => {
    return res.status(200).send("Up and Running")
});
router.use("/users", require("./routes/users.routes"));;

module.exports = router;