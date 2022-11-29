import styled from "styled-components";

function Header(props) {
    return(
        <Head>
            <h1>TODO</h1>
        </Head>
    );
}

export default Header;

const Head = styled.header`
    padding-top: 70px;
    padding-bottom: 48px;

    h1 {
        font-size: 40px;
        letter-spacing: 15px;
        font-weight: bold;
        color: #fff;
    }

`;