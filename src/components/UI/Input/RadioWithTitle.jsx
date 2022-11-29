import styled from "styled-components";

function RadioWithTitle({ filterType, ...props }) {
    return (
        <Label>
            <input defaultChecked={props.checked} type="radio" name="filter" value={filterType.value} />
            <span>{filterType.title}</span>
        </Label>
    );
}

const Label = styled.label`

    color: ${props => props.theme.filterColor};
    cursor: pointer;

    input {
        display: none;
    }

    span {
        font-weight: bold !important;
    }

    &:hover {
        color: ${props => props.theme.hover};
    } 

    input:checked + span {
        color: #3A7CFD;
    }
`;

export default RadioWithTitle;
