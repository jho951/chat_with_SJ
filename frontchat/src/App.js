import { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <Wrap>
        <Header>
          <h1>Todo List</h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ButtonSt>전송</ButtonSt>
          </div>
        </Header>
        <InputDiv>
          <InputSt type="text" placeholder="제목"></InputSt>
          <InputSt type="text" placeholder="내용"></InputSt>
        </InputDiv>
      </Wrap>
    </>
  );
};
export default App;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  height: 10vh;
  width: 100vw;
  color: #fe3a3566;

  display: flex;
  justify-content: space-between;
  text-indent: 2vw;
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vw 0 0 1vw;
  border: 2px solid #feee;
`;
const InputSt = styled.input`
  height: 3vh;
  width: 40vw;
  margin-bottom: 2vh;
  font-size: 25px;
  border-radius: 3rem;
  text-indent: 2vw;
  border: 1px solid #feee;
`;
const ButtonSt = styled.button`
  width: 5vw;
  height: 5vh;
  border-radius: 3rem;
  color: #fe3a3566;
  background-color: #feee;
  border: 0.5px solid gainsboro;
`;
