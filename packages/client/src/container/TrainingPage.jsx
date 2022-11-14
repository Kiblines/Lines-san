import React from "react";
import styled from "styled-components";

const TrainingContent = styled.div`
  background-color: lightgoldenrodyellow;
  flex-grow: 1;
  padding: 5vh 5vw 5vh 5vw;
`;

function TrainingPage() {
  return (
    <TrainingContent>
      <p>
        Le japonais compte quatre formes d’écriture : – Hiragana （ひらがな) –
        Katakana　（カタカナ） – Kanji　（漢字） – Roumaji　(romaji) – Vous
        voyez des carrés à la place des caractères japonais? Cliquez ici •
        Hiragana / Katakana : contrairement aux langues romaines comme le
        français, qui utilisent des consonnes et voyelles pour former un
        alphabet, les caractères hiragana et katakana sont regroupés sous forme
        d’un syllabaire (ka,ki,ku,ke,ko…). Ainsi le mot ‘anata’ (toi/tu) s’écrit
        en hiragana あなた formé du ‘a’ あ du ‘na’ な et du ‘ta’ た . On compte
        46 caractères dans chacun de ces deux syllabaires. L’écriture en
        katakana est utilisée en japonais pour la transcription des mots
        étrangers.
      </p>
    </TrainingContent>
  );
}

export default TrainingPage;
