import { useMemo, useState } from "react";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useTodos } from "./hooks/useTodos";
import styled from "styled-components";
import bgLight from "./assets/images/bg-desktop-light.jpg";
import Header from "./components/Header";
function App() {
    const [todoList, setTodoList] = useState([
        { title: "10 minutes meditation", isComplete: false },
        { title: "Make Review", isComplete: true },
        { title: "Complete Todo App on Frontend Mentor", isComplete: false},
    ]);
    const itemsLeft = useMemo(() => todoList.filter(todo => !todo.isComplete).length, [todoList]);
    const [filterQuery, setFilterQuery] = useState("all");
    const filteredTodos = useTodos(todoList, filterQuery);

    function createTodo(newTodo) {
        setTodoList([...todoList, newTodo]);
    }

    function removeTodo(index) {
        console.log(index);
        let updatedList;
        if(index === null) {
            updatedList = todoList.filter(todo => !todo.isComplete);
        }
        else {
            updatedList = todoList.filter((todo, i) => i !== index);
        }
        setTodoList(updatedList);
    }

    function toggleIsComplete(index) {
        const updatedList = [...todoList];
        updatedList[index].isComplete = !updatedList[index].isComplete;
        setTodoList(updatedList);
    }

    return (
        <Wrapper>
            <Container>
                <Header />
                <TodoForm create={createTodo}/>
                <TodoList 
                    todos={filteredTodos} 
                    setTodoList={setTodoList} 
                    remove={removeTodo}
                    toogleIsComplete={toggleIsComplete} >
                    <TodoFilter filterQuery={filterQuery} setFilterQuery={setFilterQuery} itemsLeft={itemsLeft} clearCompleted={removeTodo} />
                </TodoList>
            </Container>
        </Wrapper>
    );
}
export default App;

const Wrapper = styled.div`
    min-height: 100vh;
    padding: 0px 24px 0px 24px;
    background-color: #FAFAFA;
    background-image: url(${bgLight});
    background-repeat: no-repeat;
    background-size: contain;
`;

const Container = styled.div`
    width: 100%;
    max-width: 540px;
    margin: 0 auto;
`;