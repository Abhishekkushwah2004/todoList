import './style/addTaskBar.css';
import { useState, useEffect } from 'react';
import TaskList from './TaskList';
import uniqid from 'uniqid';

export default function AddTaskBar() {

    let [task, setTask] = useState([{ todo: "Sample", key: uniqid(), done: false }]);
    let [newTask, setNewTask] = useState("");
    let [empty, setEmpty] = useState(false);

    let deleteTodo = (key) => {
        console.log(key);
        console.log("Todo Delet");
        setTask((prevTasks) => prevTasks.filter((item) => item.key !== key));
    }

    let addTask = () => {
        if (newTask != "") {
            setTask([...task, { todo: newTask, key: uniqid(), done: false }]);
        }
        else {
            setEmpty(true);
        }

        setNewTask("");
    }

    const markComplete = (id) => {
        setTask((prevTasks) =>
            prevTasks.map((item) =>
                item.key === id ? { ...item, done: true } : item
            )
        );
    };

    let handleOnChange = (element) => {
        setNewTask(element.target.value);
    }

    let handleSubmit = (element) => {
        element.preventDefault();
    }

    // for shadow of input and button bar
    let [shadow, setShadow] = useState(false);
    let inputClick = () => {
        setShadow(true)
        setEmpty(false);
    }
    useEffect(() => {
        const handleClick = (e) => {
            // if the clicked element is NOT the input, remove shadow
            if (!e.target.classList.contains('inputTask')) {
                setShadow(false);
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit} style={shadow == true ? { boxShadow: "0 0px 5px white" } : { boxShadow: "none" }}>
                <input
                    onClick={inputClick}
                    className='inputTask'
                    type="text"
                    placeholder='Enter The Task..'
                    value={newTask}
                    onChange={handleOnChange} />
                <button onClick={addTask} className='addButton'>Add Task</button>
            </form>
            {empty == true ? <p style={{color:"red"}}>Enter Correct Input</p> : <p></p>}
            <TaskList taskList={task} deleteTodo={deleteTodo} markComplete={markComplete} />
        </>
    )
}