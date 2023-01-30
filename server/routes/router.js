const router = require("express").Router()
const {getTodos, addTodo, updateTodo, deleteTodo} = require("../services/services")
const delay = require("../middleware");


router.get("/", delay, getTodos);

router.post("/", delay, addTodo);

router.put("/:id", updateTodo);

router.delete("/:id", delay, deleteTodo);

module.exports = router;