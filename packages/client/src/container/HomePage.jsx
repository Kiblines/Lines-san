import React, { useEffect } from "react";
import Title from "../components/TitleHeader";
import Banderole from "../components/Banderole";
import styled from "styled-components";
import lines from "../lines-san.png";
import learning from "../1.png";

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  background-color: lightgoldenrodyellow;
  padding: 5vh 5vw 5vh 5vw;
  flex-grow: 1;

  @media (max-width: 1480px) {
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const JapIcon = styled.img`
  //vw= % de la largeur de la fenêtre; vh= % de la hauteur de la fenêtre
  width: 50vw;
  height: 50vw;
  max-height: 250px;
  max-width: 250px;
  margin: 10px;
`;

// IconContainer for JapIcon centered in it
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <Content>
      <IconContainer>
        <JapIcon src={learning} alt="Le japonais facile" />
      </IconContainer>
      <p style={{ maxWidth: 700 }}>
        ロレム・イプサム、略してリプサム lipsum
        ともいう）とは、出版、ウェブデザイン、グラフィックデザインなどの諸分野において使用されている典型的なダミーテキスト。書籍やウェブページや広告などのデザインのプロトタイプを制作したり顧客にプレゼンテーションしたりする際に、
        まだ正式な文章の出来上がっていないテキスト部分の書体（フォント）、タイポグラフィ、レイアウトなどといった視覚的なデザインを調整したりわかりやすく見せるために用いられる。
      </p>
      <IconContainer>
        <JapIcon src={lines} alt="Le japonais facile" />
      </IconContainer>
    </Content>
  );
}
