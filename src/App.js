import { useMemo, useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useTodos } from "./hooks/useTodos";
import Header from "./components/Header";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { darkTheme, lightTheme } from "./themes";

function App() {
    const [theme, setTheme] = useState("light");
    const [todoList, setTodoList] = useState([
        { title: "10 minutes meditation", isComplete: false },
        { title: "Make Review", isComplete: true },
        { title: "Complete Todo App on Frontend Mentor", isComplete: false },
    ]);
    const itemsLeft = useMemo(() => todoList.filter(todo => !todo.isComplete).length, [todoList]);
    const [filterQuery, setFilterQuery] = useState("all");
    const filteredTodos = useTodos(todoList, filterQuery);

    function switchTheme() {
        setTheme(theme === 'dark'? 'light': 'dark');
    }

    function createTodo(newTodo) {
        setTodoList([...todoList, newTodo]);
    }

    function removeTodo(index) {
        console.log(index);
        let updatedList;
        //delete all of completed todos
        if (index === null) {
            updatedList = todoList.filter(todo => !todo.isComplete);
        }
        //delete only one todos
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
        <ThemeProvider theme={theme === "dark"? darkTheme: lightTheme}>
            <Wrapper>
                <Container>
                    <Header toggle={switchTheme} theme={theme} />
                    <TodoForm create={createTodo} />
                    <TodoList
                        todos={filteredTodos}
                        setTodoList={setTodoList}
                        remove={removeTodo}
                        toogleIsComplete={toggleIsComplete} >
                        <TodoFilter filterQuery={filterQuery} setFilterQuery={setFilterQuery} itemsLeft={itemsLeft} clearCompleted={removeTodo} />
                    </TodoList>
                </Container>
            </Wrapper>
        </ThemeProvider>
    );
}

const Wrapper = styled.div`
    min-height: 100vh;
    padding: 0px 24px 0px 24px;
    background-color: ${props => props.theme.bg};
    background-image: url(${props => props.theme.bgImg});
    background-repeat: no-repeat;
    background-size: contain;
`;

const Container = styled.div`
    width: 100%;
    max-width: 540px;
    margin: 0 auto;
`;

export default App;