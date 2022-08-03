import InputBox from '../todo/Todo';
import ToDoItemList from '../list/List';
import Header from '../header/Header';
import styled from 'styled-components';

const Home = () => {
  return (
    <HompageContainer>
      <Header />
      <InputBox />
      <ToDoItemList title={'🔥할 일'} checkedList={false} />

      <ToDoItemList title={'✅완료한 항목'} checkedList={true} />
    </HompageContainer>
  );
};

export default Home;

const HompageContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0;
`;
