import styled from "styled-components";
import Todo from "./Todo";

function TodoList({ todos, ...props }) {
    return (
        <Container>
            <ListContiner>
                {todos.map((todo, index) =>
                    <Todo
                        key={todo.title}
                        todo={todo}
                        index={index}
                        remove={props.remove}
                        toogleIsComplete={props.toogleIsComplete}
                    />
                )}
            </ListContiner>
            {props.children}
        </Container>
    );
}

export default TodoList;

const ListContiner = styled.div`
    max-height: 40vh;
    overflow-y: auto;`
;

const Container = styled.div`
    margin-top: 24px;
    padding: 20px 0px 16px 0px;
    background-color: #fff;
    box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
    border-radius: 5px;

    form div {
        border-bottom: 1px solid #E3E4F1;
    }

    form div:first-child {
        padding: 0px 24px 19px 24px;
    }

`;