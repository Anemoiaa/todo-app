import { useMemo, useState } from "react";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

function App() {
    console.log("reset")
    const [todoList, setTodoList] = useState([
        { title: "10 minutes meditation", isComplate: false },
        { title: "Make Review", isComplate: true },
        { title: "Complete Todo App on Frontend Mentor", isComplate: false},
    ]);
    const itemsLeft = useMemo(() => todoList.filter(todo => !todo.isComplate).length, [todoList]);
    const [filter, setFilter] = useState("All");


    function removeTodo(index) {
        console.log(index);
        let updatedList;
        if(index === null) {
            updatedList = todoList.filter(todo => !todo.isComplate);
        }
        else {
            updatedList = todoList.filter((todo, i) => i != index);
        }
        setTodoList(updatedList);
    }

    function toggleIsComplate(index) {
        const updatedList = [...todoList];
        updatedList[index].isComplate = !updatedList[index].isComplate;
        setTodoList(updatedList);
    }

    return (
        <>
            <TodoList 
                todos={todoList} 
                setTodoList={setTodoList} 
                remove={removeTodo}
                toogleIsComplate={toggleIsComplate} >
                <TodoFilter filter={filter} setFilter={setFilter} itemsLeft={itemsLeft} clearComplated={removeTodo} />
            </TodoList>
        </>
    );
}
export default App;
