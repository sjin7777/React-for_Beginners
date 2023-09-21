import { useState } from "react";

function App0702() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault(); 
        if(toDo === "") {
            return; 
        }
        setToDo("");
        setToDos(currentArray => [toDo, ...currentArray]);
    };
    
    return (
        <div>
            <h1>My To Dos [{toDos.length}]</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={toDo} onChange={onChange} placeholder="Write your to do..." />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default App0702;