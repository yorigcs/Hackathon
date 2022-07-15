import styled from 'styled-components'
import backgroundCover from '../../assets/images/background-cover.png'
import logo from '../../assets/images/logo-no-background.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
    <Container>
        <img src={backgroundCover} className='background' />
        <div>
            <img src={logo} />
            <Buttons>
                <span> <Link to="/signIn" >Login</Link> </span>
                <span> <Link to="/signUp" >Se inscrever</Link> </span>
            </Buttons>
        </div>
    </Container>)
}

export default Home;

const Container = styled.div`
>div{
    z-index:2;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100vh;
}

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

`

const Buttons = styled.div`
padding:0 100px;
display:flex;
flex-direction:column;

span {
    width:500px;
    height:70px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:20px;
    box-sizing:border-box;
    border-radius:5px;
    font-size:25px;
    font-weight:bold;
}
span:first-child{
    background-color:rgba(145, 191, 188, 1);
    a{
        color:#41635E;
    }
}
span:last-child{
    background-color:rgba(107, 140, 131, 1);
    a{
        color:#D2DCD3;
    }
}
`