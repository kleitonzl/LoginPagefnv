import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 40%;
  height: 80vh;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  width: 100%;
  max-width: 300px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    margin-bottom: 5px;
    color: #333;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #002b6b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  font-size: 16px;

  &:hover {
    background-color: #00408d;
  }
`;

export const Link = styled.a`
  margin-top: 10px;
  color: #002b6b;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
