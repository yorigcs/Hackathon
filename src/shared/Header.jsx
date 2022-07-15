import styled from "styled-components";
import logo from '../assets/images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from "@mui/material"; 
import { useState } from "react";

export default function Header () {
    const [card,setCard] = useState("")

    return (
        <Container>
            <img src={logo} alt="" />
            <TextField
                id="input-with-icon-textfield"
                label=""
                value={card}
                onChange={(e) => setCard(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="standard"
            />
            <ion-icon name="person-circle"></ion-icon>
        </Container>
    )
}

const Container = styled.div`
width:100%;
height:100px;
background-color:#738A90;
position:fixed;
top:0;
left:0;
padding:20px;
box-sizing:border-box;

ion-icon {
    font-size:26px;
}
`