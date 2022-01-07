import Container from "../../template/Container";
import List from "../../component/List/List";
import { useEffect, useState } from "react";
import axios from "axios";
import Featured from "../../component/Featured/Featured";
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <Container className="home">
      <Featured type="genre" setGenre={setGenre} />
      {lists.map((list) => {
        return <List list={list} key={list._id} />;
      })}
    </Container>
  );
};

export default Home;
