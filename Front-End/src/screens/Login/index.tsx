import React from 'react';
import {
  SafeArea,
  Container,
  HilightText,
  Wrapper,
  Desciption,
  SignInButtons,
  Divisor,
  Line,
  DivisorText,
  Buttons,
  Social,
  ButtonSocial,
  IconButton,
  ButtonText,
  ButtonOutline,
  Icon,
} from './styles';

import FaceIcon from '../../assets/images/facebook-circle.png';
import GoogleIcon from '../../assets/images/google-circle.png';

const Login = () => {
  return (
    <SafeArea>
      <Container>
        <Wrapper>
          <HilightText hilight>Bem vindo ao</HilightText>
          <HilightText primary hilight>
            Toddy
          </HilightText>
          <Desciption>
            {' Anote suas tarefas diárias de uma maneira \n simples e rápida.'}
          </Desciption>
        </Wrapper>
        <SignInButtons>
          <Divisor>
            <Line />
            <DivisorText>{'Entrar com'}</DivisorText>
            <Line />
          </Divisor>
          <Buttons>
            <Social>
              <ButtonSocial>
                <Icon>
                  <IconButton source={FaceIcon} />
                </Icon>
                <ButtonText social>{'Facebook'}</ButtonText>
              </ButtonSocial>
              <ButtonSocial>
                <Icon>
                  <IconButton source={GoogleIcon} />
                </Icon>
                <ButtonText social>{'Google'}</ButtonText>
              </ButtonSocial>
            </Social>
            <ButtonOutline>
              <ButtonText>{'Entrar com um e-mail ou Telefone'}</ButtonText>
            </ButtonOutline>
          </Buttons>
        </SignInButtons>
      </Container>
    </SafeArea>
  );
};

export default Login;
