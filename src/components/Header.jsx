import styled from "styled-components";
import iconMoon from "../assets/images/icon-moon.svg";
import iconSun from "../assets/images/icon-sun.svg";

function Header({toggle, theme, ...props}) {
    return(
        <Head>
            <h1>TODO</h1>
            <img
                onClick={toggle}
                src={theme === 'dark'? iconSun : iconMoon} 
                alt="theme-switch-icon" 
            />
        </Head>
    );
}

const Head = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 70px;
    padding-bottom: 48px;

    h1 {
        font-size: 40px;
        letter-spacing: 15px;
        font-weight: bold;
        color: #fff;
    }

    img {
       cursor: pointer; 
    }
`;

export default Header;
