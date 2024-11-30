import styled from "styled-components";

export const PanelContainer = styled.div`
  width: 40%;
  height: 80vh;
  background-color: #002b6b;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 28px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;
