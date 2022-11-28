import styled from "styled-components";
import IsComplateBtn from "./UI/Button/IsComplateBtn";
import DeleteButton from "./UI/Button/DeleteButton";

function Todo({todo, ...props }) {
    return (
        <Container>
            <IsComplateBtn 
                onClick={() => props.toogleIsComplate(props.index)} isComplate={todo.isComplate} 
            />
            <span>{todo.title}</span>
            <DeleteButton onClick={() => props.remove(props.index)} />
        </Container>
    );
}

export default Todo;

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 24px 19px 24px;
    background: #fff;

    span {
        margin-left: 12px;
        font-size: 12px;
        color: #494C6B;
    }
`;
