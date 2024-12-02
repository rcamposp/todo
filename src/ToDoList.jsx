import React, { useState } from 'react'
function ToDoList(){
    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"])
    const [newTask, setNewTask] = useState("")

    function handleInputChage(event){
        setNewTask(event.target.value)
    } //when typing

    function addTask(){
        setTasks([...tasks, newTask])
        setNewTask("")
    }

    function deleteTask(index){
        //const updatedTasks  = tasks.filter((element, i) => i !== index)
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            const aux = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index-1]
            updatedTasks[index-1] = aux;
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            const aux = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index+1]
            updatedTasks[index+1] = aux;
            setTasks(updatedTasks)
        }
    }

    return(
        <div className='to-do-list '>
            <h1>To-Do List</h1>
            <div>
                <input 
                    className='text-xl p-2 m-6 text-gray-700'
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChage}
                />
                <button
                    className='bg-green-600 '
                    onClick={addTask}
                >
                    Add
                </button>
                <table className='w-full border-separate border-spacing-y-2'>
                    <tbody>
                    {tasks.map((task, index) => 
                        <tr 
                            className='bg-zinc-800 border-zinc-100'
                            key={index}
                            
                        >
                            <td className='px-6 py-4'><span className='text-3xl'>{task}</span></td>
                            

                            <td className='pl-6 py-4'>
                                <button               
                                    className='rounded-full text-gray-800 p-2'                                                     
                                    onClick={() =>moveTaskUp(index)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /></svg>
                                </button>
                            </td>

                            <td className='pr-6 py-4 '>
                            <button            
                                className='rounded-full text-gray-800 p-2'                                                 
                                onClick={() =>moveTaskDown(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                            </button>
                            </td>

                            <td className='px-6 py-4'>
                                <button                                    
                                    className='text-white bg-red-700 hover:bg-red-800 rounded-full text-sm'
                                    onClick={() =>deleteTask(index)}>
                                    Delele
                                </button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ToDoList;