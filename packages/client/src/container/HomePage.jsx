import React, { useEffect } from "react";
import Title from "../components/TitleHeader";
import Banderole from "../components/Banderole";
import styled from "styled-components";
import lines from "../lines-san.png";

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  background-color: lightgoldenrodyellow;
  padding: 0 5vw 0 5vw;
  flex-grow: 1;

  @media (max-width: 1480px) {
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const JapIcon = styled.img`
  width: 50vw;
  height: 50vw;
  max-height: 250px;
  max-width: 250px;
  margin: 10px;
`;

export default function Home() {
  return (
    <Content>
      <JapIcon src={lines} alt="Le japonais facile" />
      <p style={{ maxWidth: 700 }}>
        ロレム・イプサム、略してリプサム lipsum
        ともいう）とは、出版、ウェブデザイン、グラフィックデザインなどの諸分野において使用されている典型的なダミーテキスト。書籍やウェブページや広告などのデザインのプロトタイプを制作したり顧客にプレゼンテーションしたりする際に、
        まだ正式な文章の出来上がっていないテキスト部分の書体（フォント）、タイポグラフィ、レイアウトなどといった視覚的なデザインを調整したりわかりやすく見せるために用いられる。
      </p>
      <JapIcon src={lines} alt="Le japonsais facile" />
    </Content>
  );
}
