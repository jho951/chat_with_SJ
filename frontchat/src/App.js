import { useState } from "react";
import styled from "styled-components";
import TodoList from "./list";

// const dummy = [
//   { title: "가", content: "나" },
//   { title: "다", content: "라" },
// ];
const App = () => {
  const [todo, setTodo] = useState({ title: "", content: "" });
  const [list, setList] = useState([]);

  const submitTodo = (e) => {
    if (e.target.name === "title") {
      setTodo({ ...todo, title: e.target.value });
    } else {
      setTodo({ ...todo, content: e.target.value });
    }
  };
  const onClickHandler = () => {
    setList((prev) => [...prev, { title: todo.title, content: todo.content }]);
  };

  return (
    <>
      <Wrap>
        <Header>
          <h1>Todo List</h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ButtonSt onClick={onClickHandler}>전송</ButtonSt>
          </div>
        </Header>
        <InputDiv>
          <InputSt
            name="title"
            type="text"
            placeholder="제목"
            onChange={submitTodo}
          />
          <InputSt
            name="conten"
            type="text"
            placeholder="내용"
            onChange={submitTodo}
          />
        </InputDiv>
        {/* {dummy.map((dummy) => {
           <TodoList title={dummy.title} content={dummy.content} />;
        })} */}
        {list.map((list) => {
          return <TodoList title={list.title} content={list.content} />;
        })}
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
  height: 15vh;
  display: flex;
  flex-direction: column;
  padding: 1vw 0 0 1vw;
  border: 2px solid #feee;
`;
const InputSt = styled.input`
  height: 5vh;
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
  border-radius: 1rem;
  font-size: 20px;
  color: #fe3a3566;
  background-color: #feee;
  border: 0.5px solid gainsboro;
  margin-right: 2vw;
`;
