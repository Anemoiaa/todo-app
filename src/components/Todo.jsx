import styled from "styled-components";
import DeleteButton from "./UI/Button/DeleteButton";
import IsCompleteCheckbox from "./UI/Input/IsCompleteCheckbox";

function Todo({todo, ...props }) {
    return (
        <Container isComplete={todo.isComplete}>
            <IsCompleteCheckbox 
                onClick={() => props.toogleIsComplete(props.index)} 
                isComplete={todo.isComplete} 
            />
            <span>{todo.title}</span>
            <DeleteButton onClick={() => props.remove(props.index)} />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 24px 19px 24px;
    background-color: ${props => props.theme.todoBg};
    cursor: pointer;
    border-bottom: 1px solid ${props => props.theme.border};


    &:hover > button:last-child {
        display: block;
    }

    span {
        margin-left: 24px;
        font-size: 18px;
        ${props => props.isComplete
            ? `color: ${props.theme.completeTodoColor}; text-decoration: line-through;`
            : `color: ${props.theme.color};`
        }
    }

    @media (max-width: 480px) {
        padding: 16px 20px 16px 20px;

        span {
            margin-left: 12px;
            font-size: 12px;
        }

        &:hover > button:last-child {
        }
    }
`;

export default Todo;