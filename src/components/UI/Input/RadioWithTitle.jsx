import styled from "styled-components";

function RadioWithTitle({ filterType, ...props }) {
    return (
        <Label>
            <input defaultChecked={props.checked} type="radio" name="filter" value={filterType.value} />
            <span>{filterType.title}</span>
        </Label>
    );
}

export default RadioWithTitle;


const Label = styled.label`

    color: #9495A5;
    cursor: pointer;

    input {
        display: none;
    }

    span {
        font-weight: bold !important;
    }

    &:hover {
        color: #494C6B;
    } 

    input:checked + span {
        color: #3A7CFD;
    }
`;