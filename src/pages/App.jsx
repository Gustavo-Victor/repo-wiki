import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Container, InputContainer } from "./style";
import Button from "../components/Button";
import ItemRepo from "../components/ItemRepo";
import Input from "../components/Input";
import { api } from "../services/api";

export default function App() {
  const [repos, setRepos] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeInput = (e) => {
    setText(e.target.value);
  };

  const handleSearchRepo = async () => {
    if (text.trim() == "") return;

    try {
      setError(false);
      setLoading(true);
      const { data } = await api.get(`repos/${text}`);
      setText("");

      if (data.id) {
        setLoading(false);
        const alreadyExists = repos.find((repo) => repo.id == data.id);
        if (alreadyExists) return;
        setRepos((prev) => [...prev, data]);
      }
    } catch (e) {
      setLoading(false);
      setError(true);
      console.log(e);
    }
  };

  const handleRemoveRepo = (id) => {
    //console.log(id);
    if (id) {
      setRepos((prev) => {
        const filteredRepos = prev.filter((repo) => repo.id !== id);
        return [...filteredRepos];
      });
    }
  };

  return (
    <Container>
      {/* icon */}
      <FaGithub />

      {/* input container (input and button)*/}
      <InputContainer>
        <Input value={text} handleChange={handleChangeInput} />
        <Button handleClick={handleSearchRepo}>Search</Button>
      </InputContainer>

      {/* repos */}
      {loading && repos.length == 0 && !error ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Not found</p>
      ) : (
        repos.map((repo) => (
          <ItemRepo key={repo.id} repo={repo} handleRemove={handleRemoveRepo} />
        ))
      )}
    </Container>
  );
}
