import React from "react";
import SidePanel from "./components/SidePanel";
import Login from "./components/Login";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <SidePanel />
      <Login />
    </Container>
  );
};

export default App;
