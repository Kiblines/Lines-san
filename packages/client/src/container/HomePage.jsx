import React, { useEffect } from "react";
import Title from "../components/TitleHeader";
import Banderole from "../components/Banderole";
import styled from "styled-components";
import lines from "../lines-san.png";

const StyledGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: lightgoldenrodyellow;
`;

function Titre() {
  useEffect(() => {
    document.title = "Toto";
  });
}

export default function Home() {
  return (
    <div>
      <Title>Bonjour</Title>
      <Banderole></Banderole>

      <div></div>
      <StyledGrid>
        <img style={{ width: 400, height: 400 }} src={lines} alt="lines" />
        <p style={{ maxWidth: 700 }}>
          ロレム・イプサム、略してリプサム lipsum
          ともいう）とは、出版、ウェブデザイン、グラフィックデザインなどの諸分野において使用されている典型的なダミーテキスト。書籍やウェブページや広告などのデザインのプロトタイプを制作したり顧客にプレゼンテーションしたりする際に、
          まだ正式な文章の出来上がっていないテキスト部分の書体（フォント）、タイポグラフィ、レイアウトなどといった視覚的なデザインを調整したりわかりやすく見せるために用いられる。
        </p>
        <img style={{ width: 400, height: 400 }} src={lines} alt="lines" />
      </StyledGrid>
    </div>
  );
}
