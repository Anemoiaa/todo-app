import { useState } from "react";
import styled from "styled-components";
import IsCompleteCheckbox from "./UI/Input/IsCompleteCheckbox";

function TodoForm({create, ...props}) {
    const [newTodo, setNewTodo] = useState({
        title: "",
        isComplete: false,
    });


    return(
        <Form onSubmit={(e) => {
            e.preventDefault();
            create(newTodo);
            setNewTodo({title: "", isComplete: false});
        }}>
            <IsCompleteCheckbox 
                isComplete={newTodo.isComplete}
                onClick={() => setNewTodo({...newTodo, isComplete: !newTodo.isComplete})}
            />
            <input 
                value={newTodo.title}
                onChange={(e) => setNewTodo({...newTodo, title: e.target.value})}
                type="text" placeholder="Create a new todo…" />
        </Form>
    );
}

export default TodoForm;

const Form = styled.form`
    display: flex;
    padding: 20px 24px 20px 24px;
    background-color: ${props => props.theme.todoBg};
    box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
    border-radius: 5px;
    font-size: 18px;
    color: ${props => props.theme.inputColor};

    input[type=text] {
        flex-grow: 1;
        padding: 0;
        border: none;
        margin-left: 24px;
        background-color: inherit;
    }

    input[type=text]:focus {
        outline: none;
    }

    input[type=text]:placeholder {
        color: ${props => props.theme.placeholder};
    }
`;
