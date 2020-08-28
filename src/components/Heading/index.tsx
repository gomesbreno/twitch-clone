import React from "react";

import { Container, HeadingText } from "./styles";

const StreamList: React.FC = ({ children }) => {
  return (
    <Container>
      <HeadingText>{children}</HeadingText>
    </Container>
  );
};

export default StreamList;
