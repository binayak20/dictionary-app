import { useEffect, useState } from "react";
import { Row, Col, Typography, Spin } from "antd";

import SearchWord from "./search";
import Words from "./words";
import getDictionaryEntries from "../actions/word-search";

const { Title } = Typography;

interface DictionaryProps {
  title: string;
}

const SearchDictionaryWord: React.FC<DictionaryProps> = ({ title }) => {
  const [searchWord, setSearchWord] = useState(undefined);
  const [dictionaryEntries, setDictionaryEntries] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (searchWord) {
        setLoading(true);
        try {
          const entries = await getDictionaryEntries(searchWord);
          setDictionaryEntries(entries);
        } catch (error) {
          console.error("Error fetching dictionary entries:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [searchWord]);

  return (
    <Row justify="start">
      <Col>
        <SearchWord setSearchWord={setSearchWord} />
        <Title level={5}> {title}</Title>
        {!dictionaryEntries && !loading && <span>No result found</span>}
        {loading || dictionaryEntries?.length === 0 ? (
          <Spin size="large" />
        ) : (
          dictionaryEntries?.length > 0 && <Words entries={dictionaryEntries} />
        )}
      </Col>
    </Row>
  );
};

export default SearchDictionaryWord;
