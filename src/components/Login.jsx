import React from "react";
import { useForm } from "react-hook-form";


import {
  LoginContainer,
  FormGroup,
  Input,
  Button,
  Link,
  ErrorMessage,
} from "../styles/LoginStyles";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`Login realizado com sucesso! CPF: ${data.cpf}`);
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <label>CPF</label>
          <Input
            type="text"
            placeholder="Digite seu CPF"
            {...register("cpf", {
              required: "O CPF é obrigatório",
              pattern: {
                value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                message: "Formato de CPF inválido (use 000.000.000-00)",
              },
            })}
          />
          {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <label>Senha</label>
          <Input
            type="password"
            placeholder="Digite sua senha"
            {...register("senha", {
              required: "A senha é obrigatória",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos 6 caracteres",
              },
            })}
          />
          {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
        </FormGroup>
        <Button type="submit">Entrar</Button>
        <Link href="#">Cadastrar</Link>
      </form>
    </LoginContainer>
  );
};

export default Login;
