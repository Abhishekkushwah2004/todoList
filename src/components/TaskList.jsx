
import './style/tasklist.css';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';


export default function TaskList({ taskList, deleteTodo,markComplete}) {
   
    return (
        <>
            <div className="list">
                <ul>
                    {taskList.map((task) => {
                        return <li className={task.done ? "complete" : "notCom"} key={task.key} >{task.todo}
                            <span>
                                <DeleteIcon style={{ cursor: "pointer" }} onClick={() => deleteTodo(task.key)} />
                                <DoneIcon style={{ cursor: "pointer", marginLeft: "20px" }} onClick={()=>markComplete(task.key)} />
                            </span>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}