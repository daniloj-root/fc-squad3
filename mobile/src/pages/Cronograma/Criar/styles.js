import styled from 'styled-components/native';

export const Area = styled.View`
  height: 100%;
  background-color: #6d5dcf;
`;

export const ButtonReturn = styled.TouchableOpacity`
  position: absolute;
  top: 35px;
  left: 0px;
  z-index: 3;
`;
export const AreaText = styled.Text`
  padding: 64px 32px 128px;
  color: white;
  font-size: 24px;
  margin-right: 64px;
`;

export const Box = styled.View`
  margin-top: 45%;
  position: absolute;
  background-color: #f7fafc;
  height: 100%;
  width: 100%;
`;

export const InputArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 24px 32px;
  padding-right: 22px;
`;

export const Input = styled.TextInput`
  font-size: 18px;
  width: 100%;
  padding-right: 6px;
`;

export const PickerArea = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const PickerSelect = styled.View`
  margin: 5px;
  height: 32px;
  width: 100px;
  background-color: transparent;
  color: #8867dd;
  font-size: 12px;
`;