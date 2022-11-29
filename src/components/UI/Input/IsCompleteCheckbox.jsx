import styled from "styled-components";

function IsCompleteCheckbox({isComplete, ...props}) {
    return(
        <Label checked={isComplete}>
            <Input type="checkbox" {...props}/>
            <Svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
            </Svg>
        </Label>

    );
}

const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
    ${props => props.checked 
        ? "background: linear-gradient(135deg, #55DDFF 0%, #C058F3 100%); border: none;" 
        : "background: #fff; border: 1px solid #979797;"
    }
`; 

const Input = styled.input`
    display: none;
    &:focus {
        outline: none;
    }
`;

const Svg = styled.svg`
    
`;

export default IsCompleteCheckbox;