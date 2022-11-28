import styled from "styled-components";

function IsComplateBtn({isComplate, ...props}) {
    return(
        <Button {...props} complate={isComplate}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
            </svg>
        </Button>

    );
}

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    
    cursor: pointer;

    ${props => props.complate 
        ? "background: linear-gradient(135deg, #55DDFF 0%, #C058F3 100%); border: none;"
        : "background: #fff; border: 1px solid #979797"
    };
`; 

export default IsComplateBtn;