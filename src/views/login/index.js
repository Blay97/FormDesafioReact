import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Box, Container, Row, Col, ColSub, Image, Main, InputFull, Span, DivFullName, DivSuccess, DivCheck } from './style'
import Logo from '../../images/logoDesafio.png'
import Button from '../../components/button/button'
import Input from '../../components/input/input'
import CustomLabel from '../../components/label/label'

function Login() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [checkbox, setCheckbox] = useState(false);

  const [title, setTitle] = useState("Intern Sing Up");
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = data => {
    setIsSuccess(true);
    setTitle('Sucess');
  }

  const onBack = () => {
    setIsSuccess(false);
    setTitle('Intern Sing Up');
    reset({})
  }

  return (
    <Container>
      <Box>
        <Main>
          <Image>
            <img src={Logo} alt="desafio" />
          </Image>
          <Image>
            <h1>{title}</h1>
          </Image>
          {isSuccess ? <>
            <DivSuccess>
              <Button type="button" onClick={onBack}>Back</Button>
            </DivSuccess>
          </> :
            <form onSubmit={handleSubmit(onSubmit)}>
              <DivFullName>
                <CustomLabel>Full Name*</CustomLabel>
                <InputFull
                  {...register("name", { required: true, pattern: /^[a-zA-Z\s]{4,}$/i })}
                  type="text" />
                <Span>{errors.name?.type === 'required' && "Fullname required"}</Span>
                <Span>{errors.name?.type === 'pattern' && "Fullname Invalid"}</Span>
              </DivFullName>

              <Row>
                <Col>
                  <CustomLabel>Email*</CustomLabel>
                  <Input
                    register={register}
                    required={true}
                    name="email"
                    type="email"
                    pattern={/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i}
                  />
                  <Span>{errors.email?.type === 'required' && "Email required"}</Span>
                  <Span>{errors.email?.type === 'pattern' && "Email Invalid"}</Span>
                </Col>

                <ColSub>
                  <CustomLabel>Phone</CustomLabel>
                  <Input
                    register={register}
                    required={true}
                    pattern={/^[0-9]{11}/i}
                    name="phone"
                    type="number"
                  />
                  <Span>{errors.phone?.type === 'required' && "Phone required"}</Span>
                  <Span>{errors.phone?.type === 'pattern' && "Phone Invalid"}</Span>
                </ColSub>
              </Row>

              <Row>
                <Col>
                  <CustomLabel>Password*</CustomLabel>
                  <Input
                    register={register}
                    required={true}
                    name="password"
                    type="password"
                    pattern={/^[0-9]{6,9}/i}
                  />
                  <Span>{errors.password?.type === 'required' && "Password required"}</Span>
                  <Span>{errors.password?.type === 'pattern' && "Password Invalid"}</Span>
                </Col>

                <ColSub>
                  <CustomLabel>Birthday*</CustomLabel>
                  <Input
                    register={register}
                    required={true}
                    name="birthday"
                    type="date"
                  />
                  <Span>{errors.birthday?.type === 'required' && "Birthday required"}</Span>
                </ColSub>

              </Row>
              <Row>
                <DivCheck>
                  <CustomLabel>I accept the terms and privacy</CustomLabel>
                  <input
                    required={true}
                    name="checkbox"
                    type="checkbox"
                    onChange={(ev) => setCheckbox(ev.target.checked)}
                    defaultChecked={checkbox}
                  />
                </DivCheck>
                <Span>{errors.checkbox?.type === 'required' && "You must accept the terms"}</Span>
                <div>
                  <Button disabled={!checkbox} type="submit"> Register</Button>
                </div>
              </Row>
            </form>}
        </Main>
      </Box>
    </Container>

  );
}
export default Login;
