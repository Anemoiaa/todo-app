import styled from "styled-components";

function DeleteButton(props) {
    return (
        <Button {...props}>
            <Svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.7851 0.471404L11.3137 0L5.89256 5.42115L0.471404 0L0 0.471404L5.42115 5.89256L0 11.3137L0.471404 11.7851L5.89256 6.36396L11.3137 11.7851L11.7851 11.3137L6.36396 5.89256L11.7851 0.471404Z" fill="#494C6B" />
            </Svg>
        </Button>

    );
}

export default DeleteButton;

const Button = styled.button`
    display: none;
    margin-left: auto !important;
    padding: 0;
    border: none;
    background none;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
    }
`;

const Svg = styled.svg`
    width: 18px;
    height: 18px;
`;
