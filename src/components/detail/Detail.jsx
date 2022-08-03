import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// ID값, 내용 가져오기
const Detail = () => {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todoReducer.todos);
  const { id } = useParams();
  return (
    <ModalOverly>
      <ModalWindow>
        <Id>{todos[id].id}</Id>
        <Work>{todos[id].text}</Work>
        <Back
          onClick={() => {
            navigate(-1);
          }}
        >
          🔙
        </Back>
      </ModalWindow>
    </ModalOverly>
  );
};

export default Detail;

const ModalOverly = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const ModalWindow = styled.div`
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  width: 400px;
  height: 500px;
  position: relative;
  top: 0;
  padding: 10px;
`;

const Work = styled.span`
  font-size: 50px;
  font-weight: bold;
  margin: 10px 10px;
`;

const Back = styled.button`
  width: 200px;
  height: 50px;
  border: 0;
  background: none;
  border-radius: 5px;

  font-size: 70px;
  cursor: pointer;
`;

const Id = styled.span`
  font-size: 20px;
  font-weight: 900;
`;
