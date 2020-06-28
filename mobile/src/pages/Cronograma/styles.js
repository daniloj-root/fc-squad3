import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '~/config/ColorConfig';

const top = 50;
const bottom = 20;
const left = 15;

export const Area = styled.View`
  position: relative;
  flex: 1;
  align-items: center;
  background-color: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: ${top}px ${left}px 30px;
`;

export const VerticalLine = styled.View`
  position: absolute;
  top: ${top}px;
  bottom: ${bottom}px;
  left: ${left + 10}px;
  width: 1px;
  background: #ccc;
`;

export const Box = styled.View`
  position: relative;
  width: 100%;
  padding-left: 40px;
  margin-bottom: 30px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CheckArea = styled.View`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  margin-bottom: 30px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const CheckEndArea = styled.View`
  position: absolute;
  bottom: ${bottom}px;
  left: ${left}px;
  height: 20px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const TextEnd = styled.Text`
  font-size: 12px;
  margin-left: 6px;
  color: #aaa;
  width: 100%;
`;

export const Time = styled.Text`
  font-size: 14px;
  color: #000;
  width: 100%;
  margin-bottom: 8px;
`;

export const TaskTouch = styled.TouchableOpacity`
  width: 100%;
`;

export const Task = styled(LinearGradient).attrs({
  colors: [colors.bgLinearButton.dark, colors.bgLinearButton.light],
  start: [0, 1],
  end: [1, 0],
})`
  padding: 10px;
  flex-direction: row;
  border-radius: 3px;
  background-color: #ccc;
  width: 100%;
`;

export const Square = styled.View`
  width: 20px;
  height: 20px;
  border: 1px solid #fff;
  border-radius: 2px;
`;

export const TextInfos = styled.View`
  padding: 0 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  width: 100%;
  color: #fff;
`;

export const Categoria = styled.Text`
  font-size: 10px;
  color: #aaa;
  width: 100%;
`;
