import styled from "styled-components";
import RadioWithTitle from "./UI/Input/RadioWithTitle";

function TodoFilter({filterQuery, setFilterQuery, itemsLeft, clearCompleted,  ...props}) {

    const filtres = [
        {title: 'All', value: 'all'},
        {title: 'Active', value: 'active'},
        {title: 'Completed', value: 'completed'}
    ];

    return(
        <Container>
            <span>{itemsLeft} items left</span>
            <List onChange={(e) => setFilterQuery(e.target.value)}>
                {filtres.map(filter => 
                    <RadioWithTitle
                        checked={filterQuery === filter.value}
                        key={filter.title}
                        filterType={filter}
                    />    
                )}
            </List>
            <ClearButton onClick={() => clearCompleted(null)}>Clear Completed</ClearButton>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px 0px 24px;
    font-size: 14px;
    color: ${props => props.theme.filterColor};
`;

const List = styled.div`
    display: flex;
    justify-content: center;
    gap: 19px;
`;

const ClearButton = styled.button`
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.hover};
    } 
`;

export default TodoFilter;
