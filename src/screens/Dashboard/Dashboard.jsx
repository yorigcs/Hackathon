import { useState } from "react";
import api from "../../server/api";
const Dashboard = async () => {
  const limit = 15;
  const [cardsList, setCardsList] = useState([]);
  try {
    const resp = await api.get(`/myCards`);
    setCardsList(resp.data);
  } catch (error) {
    console.error(error);
  }
  return (
    <div>
      {cardsList.length > 0
        ? cardsList.map((card) => <div>{card.name}</div>)
        : "você ainda não tem cartões <3"}
    </div>
  );
};
export default Dashboard;
