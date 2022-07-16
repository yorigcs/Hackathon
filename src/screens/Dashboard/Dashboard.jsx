import { useEffect, useState } from "react";
import api from "../../server/api";
import { useAuth } from "../../contexts/auth";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
import styled from "styled-components";
const Dashboard = () => {
  const { signOut } = useAuth();
  const [cardsList, setCardsList] = useState([]);
  const [limit, setLimite] = useState(15);
  useEffect(() => {
    getCards(setCardsList, signOut, limit);
  }, [limit]);
  return (
    <Container>
      {cardsList.length > 0 ? (
        <DisplayCards cardsList={cardsList} />
      ) : (
        <NoCards />
      )}
    </Container>
  );
};
export default Dashboard;

async function getCards(setCardList, signOut, limit) {
  try {
    const resp = await api.get(`/myCards?numLastCards=${limit}`);
    console.log(resp.data);
    setCardList(resp.data);
  } catch (error) {
    if (error.response.status === 401) {
      signOut();
    }
    console.error(error);
  }
}
function NoCards() {
  return (
    <NoNotes>
      <h1>Você ainda não tem notas</h1>
      <button>Adicionar uma nota</button>
    </NoNotes>
  );
}
function DisplayCards(cardsList) {
  console.log(cardsList);
  return (
    <div>
      {cardsList.map((card) => (
        <div>{card.name}</div>
      ))}
      <NewNote>
        <RateReviewRoundedIcon sx={{ color: "#41635E", fontSize: 50 }} />
        <p>Nova nota</p>
      </NewNote>
    </div>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  background-color: #d3dcd2;
  height: 100vh;
  padding: 0 85px;
`;

const NewNote = styled.div`
  position: fixed;
  right: 100px;
  top: 120px;
  display: flex;
  align-items: center;
  color: #41635e;
  p {
    font-size: 25px;
    margin-left: 10px;
  }
`;

const NoNotes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #41635e;
    font-size: 30px;
    font-weight: 700;
  }
  button {
    background-color: #41635e;
    color: #d2dcd3;
    border: none;
    border-radius: 15px;
    height: 40px;
    font-size: 20px;
    margin-top: 10px;
    padding: 0 10px;
    box-sizing: border-box;
  }
`;
