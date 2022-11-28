import styled from "styled-components";
import Todo from "./Todo";

function TodoList({ todos, ...props }) {
    return (
        <Container>
            <form onSubmit={(e) => e.preventDefault()}>
                {todos.map((todo, index) =>
                    <Todo
                        key={todo.title}
                        todo={todo}
                        index={index}
                        remove={props.remove}
                        toogleIsComplate={props.toogleIsComplate}
                    />
                )}
            </form>
            {props.children}
        </Container>
    );
}

export default TodoList;


const Container = styled.div`
    padding: 20px 0px 20px 0px;
    background-color: #fff;
    box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
    border-radius: 5px;

    div {
        border-bottom: 1px solid #E3E4F1;
    }

    div:first-child {
        padding: 0px 24px 19px 24px;
    }

    div:last-child {
        padding: 16px 24px 0px 24px;
        border: none;
    }

`;