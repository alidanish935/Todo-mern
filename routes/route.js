import express from 'express'
import { addTodo,getAllTodo,toggleTodoDone,deleteTodo,updateTodo } from '../controller/todo-controller.js'


const route = express.Router()

route.post('/todos',addTodo);
route.get('/todos',getAllTodo);
route.get('/todos/:id',toggleTodoDone)
route.delete('/todos/:id',deleteTodo)
route.put('/todos/:id',updateTodo)

export default route;