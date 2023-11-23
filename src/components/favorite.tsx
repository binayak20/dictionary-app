import { Row, Col, Typography } from "antd";
import { useEffect, useState } from "react";

import Words from "./words";
import { Dictionary } from "../types/types";
import SelectComponent from "./select";

const { Title } = Typography;

interface FavoriteProps {
  title: string;
}

const Favorite: React.FC<FavoriteProps> = ({ title }) => {
  const [dictionaryEntries, setDictionaryEntries] = useState<any[]>([]);

  useEffect(() => {
    // Retrieve favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites") || "{}");
    setDictionaryEntries(favorites);
  }, []); // Run this effect only once on component mount

  const filterWordWithType = (value: string) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "{}");
    const filteredWords = favorites.filter((word: Dictionary) => {
      return word.partOfSpeech === value;
    });
    setDictionaryEntries(filteredWords);
  };

  return (
    <Row justify="start">
      <Col>
        <SelectComponent filterWordWithType={filterWordWithType} />
        <Title level={5}> {title}</Title>
        <Words entries={dictionaryEntries} favorite={true} />
      </Col>
    </Row>
  );
};

export default Favorite;
