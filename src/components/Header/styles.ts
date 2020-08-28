import styled from "styled-components/native";

import colors from "../../styles/colors";

export const Container = styled.View`
  flex-direction: row
  align-items: center
  justify-content: space-between

  padding-top: 32px
  padding-right: 32px
`;

export const Avatar = styled.TouchableOpacity`
  backgroundColor: ${colors.tag}

  width: 32px
  height: 32px
  border-radius:16px
`;

export const OnlineStatus = styled.View`
backgroundColor: ${colors.green}

  width: 10px
  height: 10px
  border-radius:10px
  border: 2px solid ${colors.primary}

  position: absolute
  bottom: 0
  right:0
`;

export const RigthSide = styled.View`
  flex-direction: row
  align-items: center
`;

export const Button = styled.TouchableOpacity`
  margin-left: 20px;
`;
