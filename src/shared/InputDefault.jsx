import styled from "styled-components";


function InputDefault ({placeholder, type, value, onChange, pattern}){
  return (
  <InputClass
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          pattern ={pattern}
          required
        />
  )
}


const InputClass = styled.input`
  font-size: 20px;
  width: 100%;
  height: 58px;
  background: #ffffff;
  border: 1px solid #d4d4d4;
  font-family: 'Jost', sans-serif;
  border-radius: 5px;
  padding-left: 10px;

  color: #000000;
  ::placeholder {
    color: #0004;
  }
`;

export default InputDefault