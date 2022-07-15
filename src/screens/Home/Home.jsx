import styled from 'styled-components'
import backgroundCover from '../../assets/images/background-cover.png'
import logo from '../../assets/images/logo-no-background.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
    <Container>
        <img src={backgroundCover} className='background' />
        <img src={logo} />
        <div>
            <button> <Link to="/signIn" >Login</Link> </button>
            <button> <Link to="/signUp" >Se inscrever</Link> </button>
        </div>
    </Container>)
}

export default Home;

const Container = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
height:100vh;

.background {
    width:100%;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
}
img {
    height:40%;
}
div {
    padding:0 40px;
}
button {
    width:500px;
    height:80px;
    margin:20px;
    box-sizing:border-box;
    border:none;
    font-size:25px;
    font-weight:bold;
}
button:first-child{
    background-color:#91BFBC;
    color:#41635E;
}
button:last-child{
    background-color:#6B8C83;
    color:#D2DCD3;
}
`