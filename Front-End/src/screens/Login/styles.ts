import styled from 'styled-components/native';
import {TouchableOpacity, SafeAreaView} from 'react-native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Wrapper = styled.View`
  width: 100%;
  height: 100px;
  margin-top: 40%;
  justify-content: center;
`;

export const HilightText = styled.Text`
  font-size: 35px;
  padding-left: 30px;
  margin-top: 6px;
  font-weight: ${props => (props.hilight ? '800' : '600')};
  color: ${props => (props.primary ? '#FE724C' : '#2a2f3d')};
`;

export const Desciption = styled.Text`
  display: flex;
  font-size: 15px;
  padding-left: 30px;
  margin-top: 28px;
`;

export const BackgroudImage = styled.Image`
  width: 200px;
  height: 100px;
  align-items: center;
  flex: 1;
`;

export const Overlay = styled.View``;

export const SignInButtons = styled.View`
  opacity: 0.9;
  width: 100%;
  background: #000;
  height: 300px;
  margin-top: 300px;
`;

export const Divisor = styled.View`
  align-items: center;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const DivisorText = styled.Text`
  color: #f5f7fa;
  padding: 15px;
`;

export const Line = styled.View`
  width: 80px;
  border: 0.48px solid #f5f7fa;
  border-radius: 6px;
`;

export const Buttons = styled.View`
  align-items: center;
  display: flex;
  margin-top: 10px;
`;

export const Social = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Icon = styled.View`
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
`;

export const IconButton = styled.Image`
  width: 25px;
  height: 25px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${props => (props.social ? '#2a2f3d' : '#f5f7fa')};
`;

export const ButtonSocial = styled(TouchableOpacity)`
  display: flex;
  background: #f5f7fa;
  width: 148px;
  height: 55px;
  border-radius: 50px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 18px;
`;

export const ButtonOutline = styled(TouchableOpacity)`
  border: 0.8px solid #f5f7fa;
  width: 80%;
  height: 55px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
