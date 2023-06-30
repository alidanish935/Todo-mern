import Todo from '../model/Todo.js'


export const addTodo = async (req,res)=>{
    try{
        const newTodo = await Todo.create({
            data:req.body.data,
            createdAt: Date.now()
        })

        await newTodo.save();
        return res.status(200).json(newTodo);
        
    }catch(error) {
       return res.status(500).json(error.messege)
    }
    
}
export const getAllTodo = async(req,res) =>{
    try{
        const todos = await Todo.find({}).sort({'createdAt': -1})
        return res.status(200).json(todos)
    } catch(error){
        return res.status(500).json(error.messege);
    }
}
export const toggleTodoDone = async(req,res) =>{
    try{
        const todoRef = await Todo.findById(req.params.id);

        const todo = await Todo.findOneAndUpdate(
            {_id:req.params.id},
            {done:!todoRef.done}
        )
    //    console.log('todo in controller --- ',todo)
       await todo.save();
        //console.log('todo2 in controller --- ',todo)
        return res.status(200).json(todo)

    }catch(error){
        return res.status(500).json(error.messege);
    }
}
export const deleteTodo = async(req,res) =>{
    try{
        const todoDel = await Todo.findByIdAndDelete(req.params.id);
        return res.status(200).json(todoDel);
    
    }catch(error){
        return res.status(500).json(error.messege);
    }
}
export const updateTodo = async(req,res) =>{
    try{
        
        const todo = await Todo.findOneAndUpdate(
                {_id:req.params.id},
                {data:req.body.data}
            )
            const todoUpdate = await Todo.findById(req.params.id)
        return res.status(200).json(todoUpdate)

       
            // await Todo.findOneAndUpdate(
            //     { _id: req.params.id },
            //     { data: req.body.data }
            // )
    
            // const todo = await Todo.findById(req.params.id);
    
            // return res.status(200).json(todo);
                
    }catch(error){
        return res.status(500).json(error.messege);
    }
}