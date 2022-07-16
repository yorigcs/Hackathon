import styled from 'styled-components';
import { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SellRoundedIcon from '@mui/icons-material/SellRounded';
import StickyNote2RoundedIcon from '@mui/icons-material/StickyNote2Rounded';

function AddCardPage() {
  const firstLineColors = ['#A0CCF2', '#203F59','#C77665', '#F2A3A0', '#BFA4BB'];

  const secondeLineColors = ['#9BAFBF', '#BFA5A4','#BFA67E', '#88BF9B', '#4C7370'];
  
  const [inputName, setInputName] = useState('');
  const [inputCategory, setInputCategory] = useState('');
  const [createCardData, setCreateCardData] = useState({
    name: '',
    category: '',
  });


  
  return (
    <BackgroundModal>
      <ContainerCardCreate>
        <h1>Meu card</h1>
        <div className="cardView">
          <span className="containerName">
            <p>Nome:</p> <p>{inputName}</p>
          </span>
          <span className="containerCategory">
            <p>Categoria:</p><p>{inputCategory}</p>
          </span>
        </div>
        <div className="containerInputs">
          <TextField
          
           type='text'
          onChange={e => setInputName(e.target.value)}
          minLength = {1}
          maxLength = {10}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <StickyNote2RoundedIcon />
                </InputAdornment>
              )
            }}
            className="inputName"
            label="Nome"
            variant="outlined"
          />
          <TextField
          type='text'
          minLength = {1}
          maxLength = {10}
          onChange={e => setInputCategory(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SellRoundedIcon />
                </InputAdornment>
              )
            }}
            className="inputCategory"
            label="Categoria"
            variant="outlined"
          />
        </div>
        <div className="containerColor">
          <div className="firstLine">
            {firstLineColors.map((color, index) => (
              <ColorSelect key={index} backgroundcolor={color}></ColorSelect>
            ))}
          </div>
          <div className="secondeLine">
            {secondeLineColors.map((color, index) => (
              <ColorSelect key={index} backgroundcolor={color}></ColorSelect>
            ))}
          </div>
        </div>

              


      </ContainerCardCreate>
    </BackgroundModal>
  );
}

export default AddCardPage;

const ContainerCardCreate = styled.div`
  height: 70%;
  width: 90%;
  max-width: 800px;
  background-color: #d2dcd3;
  border-radius: 10px;
  padding:  20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 5px 5px 20px grey;

  .cardView {
    margin-top: 20px;
    height: 30%;
    width: 30%;
    min-height: 120px;
    min-width: 172px;
    background: #d2dcd3;
    box-shadow: 1px 4px 1px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    border: 1px solid #91bfbc;

    .containerName {
      display: flex;
     
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      p:first-child{
        margin-right: 10px;
      }
      p:last-child{
        width: 110px;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .containerCategory {
      display: flex;
     
      align-items: center;
      justify-content: space-between;
      width: 80px;
      margin-bottom: 10px;

      p:first-child{
        margin-right: 10px;
      }
      p:last-child{
        min-width: 86px;
       white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    margin-bottom: 50px;
  }

  .containerInputs {
    display: flex;
    justify-content: space-between;
    width: 100%;
    input {
      min-width: 100%;
      max-height: 18px;
    }

    .inputName {
      border-radius: 5px;
      box-shadow: 1px 4px 1px rgba(0, 0, 0, 0.25);
      width: 100%;
      margin-right: 40px;
      
    }
    .inputCategory {
      border-radius: 5px;
      box-shadow: 1px 4px 1px rgba(0, 0, 0, 0.25);
      width: 100%;
      padding-right: 0;
      margin-right: 0;
    }
  }

  .containerColor {
    margin-top: 20px;
    background-color: red;
    width: 100%;
    height: 150px;
    background: #d2dcd3;
    border: 1px solid #91bfbc;
    box-shadow: 1px 4px 1px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .firstLine{
      display: flex;
    
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .secondeLine{
      display: flex;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
   
  }
`;

const ColorSelect = styled.button`

      height: 30px;
      min-width: 15%;
      background-color: red;
      background-color: ${props => props.backgroundcolor};
      border-radius: 2.4px;
      font-size: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.20);
      border: none;
      transition: all 0.4s;
      :hover{
       cursor: pointer;
       box-shadow: none;
      }



`;

const BackgroundModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;
