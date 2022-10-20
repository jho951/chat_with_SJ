import styled from "styled-components";

export default function TodoList({ title, content }) {
  return (
    <>
      <Wrap>
        <TitleFont> 제목 : {title}</TitleFont>
        <ContentFont> 내용 : {content}</ContentFont>
        <ButtonWrap>
          <ButtonSt>수정</ButtonSt>
          <ButtonSt>삭제</ButtonSt>
        </ButtonWrap>
      </Wrap>
    </>
  );
}
const Wrap = styled.div`
  width: 20vw;
  height: 30vh;
  display: flex;
  position: relative;
  flex-direction: column;
  border: 0.5px solid #feee;
  border-radius: 1.5rem;
  margin: 3vh 2vw;
  padding: 1vh;
  background-color: #f4f4f4;
`;
const TitleFont = styled.p`
  font-size: 20px;
  text-indent: 7vw;
  color: gray;
`;
const ContentFont = styled.p`
  font-size: 15px;
  text-indent: 1vw;
  color: gray;
`;
const ButtonSt = styled.button`
  width: 5vw;
  height: 5vh;
  border-radius: 1rem;
  font-size: 15px;
  color: #fe3a3566;
  background-color: #feee;
  border: 0.5px solid gainsboro;
  margin: 0 1.5vw 1vh 0;
`;
const ButtonWrap = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 5vw;
  margin: auto;
`;
