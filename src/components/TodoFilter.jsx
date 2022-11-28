import { useMemo } from "react";
import styled from "styled-components";

function TodoFilter({filter, setFilter, itemsLeft, clearComplated,  ...props}) {
    return(
        <Container>
            <span>{itemsLeft} items left</span>
            <List>
                <li>All</li>
                <li>Active</li>
                <li>Complate</li>
            </List>
            <button onClick={() => clearComplated(null)}>Clear Complated</button>
        </Container>
    );
}

export default TodoFilter;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const List = styled.ul`
    margin: 0;
    list-style-type: none;

    li {
        display: inline;
    }
`;