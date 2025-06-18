import './style/todoList.css'
import AddTaskBar from './AddTaskBar';

export default function TodoList(){
    return(
        <>
            <div className="todoList-container">
               <AddTaskBar/>
            </div>
        </>
    )
}