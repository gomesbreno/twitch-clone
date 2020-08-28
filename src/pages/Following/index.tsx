import React from "react";
import { View, FlatList } from "react-native";

import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Title from "../../components/Title";
import CategoryList from "../../components/CategoryList";
import StreamList from "../../components/StreamList";
import ChannelList from "../../components/ChannelList";
import { Wrapper, Container, Main } from "./styles";

interface IItem {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const CommingSoon: React.FC = () => {
  const { data, indices } = React.useMemo(() => {
    const items: IItem[] = [
      {
        key: "PAGE_HEADING",
        render: () => <Heading>Following</Heading>,
      },
      {
        key: "FOLLOWED_CATEGORIES",
        render: () => <Title>Followed Categories</Title>,
        isTitle: true,
      },
      {
        key: "C1",
        render: () => <CategoryList />,
      },
      {
        key: "LIVE_CHANNELS",
        render: () => <Title>Live Channels</Title>,
        isTitle: true,
      },
      {
        key: "C2",
        render: () => <StreamList />,
      },
      {
        key: "CONTINUE_WATCHING",
        render: () => <Title>Continue Watching</Title>,
        isTitle: true,
      },
      {
        key: "C3",
        render: () => <StreamList />,
      },
      {
        key: "OFFLINE_CHANNELS",
        render: () => <Title>Offiline Channels</Title>,
        isTitle: true,
      },
      {
        key: "C4",
        render: () => <ChannelList />,
      },
    ];

    // Array que contém apenas os indices dos elementos que são títulos
    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    };
  }, []);
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FlatList<IItem>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indices}
            // refresh effect
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default CommingSoon;
