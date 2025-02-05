import React from 'react'
import {createContext, useState, useEffect} from 'react'
import {task as data} from '../data/Task'
export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([])

  function createTask(task){
    setTask([...tasks, {
      tittle : task.tittle,
      id: tasks.length,
      description : task.description
    }])
  }

  function deleteTask(taskId){
    setTask(tasks.filter(task=> task.id !== taskId))
  }

  useEffect(()=>{setTask(data)},[])

  return (
        <TaskContext.Provider value={{
          tasks,
          createTask,
          deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
  )
}


