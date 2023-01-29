const router = require("express").Router()
const {getTodos, addTodo, updateTodo, deleteTodo} = require("../services/services")


router.get("/", getTodos);

router.post("/", addTodo);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

module.exports = router;