import logo from '../assets/images/logo.png'
import styled from 'styled-components';

function Logo({size}){
  return (
    <LogoStyle  width={size} src = {logo}/>
  )
}

const LogoStyle = styled.img`
width: ${props => props.width}px;

`;


export default Logo;