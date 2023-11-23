import React, { useEffect, useState } from "react";
import { StarOutlined, AudioOutlined, DeleteOutlined } from "@ant-design/icons";
import { List, Popconfirm, Typography, message } from "antd";

import { Dictionary } from "../types/types";

const { Text } = Typography;

interface WordsProps {
  entries?: Dictionary[];
  favorite?: boolean;
}

const Words: React.FC<WordsProps> = ({ entries, favorite }) => {
  const [dictionaryEntries, setDictionaryEntries] = useState(entries);

  useEffect(() => {
    // Update state when entries prop changes
    setDictionaryEntries(entries);
  }, [entries]);

  const setFavorite = (id: string) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    // Check if the current title is already in favorites
    const isFavorite = favorites?.some(
      (favorite: Dictionary) => favorite?.id === id
    );

    // If it's not already in favorites, add it
    if (!isFavorite) {
      const newFavorite = entries?.find((word) => word.id === id);
      if (newFavorite) {
        favorites.push(newFavorite);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        message.success("Add favorite");
      }
    }
  };

  const deleteFavorite = (id: string) => {
    // Retrieve favorites from localStorage or initialize an empty array
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    // Check if the current title is already in favorites
    const indexToDelete = favorites.findIndex(
      (favorite: Dictionary) => favorite?.id === id
    );

    // If the id is found in favorites, remove it
    if (indexToDelete !== -1) {
      favorites.splice(indexToDelete, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setDictionaryEntries(favorites);
    }
  };

  const confirm = (id: string) => {
    deleteFavorite(id);
    message.success("Deleted succesfully");
  };
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      }}
      dataSource={dictionaryEntries}
      renderItem={(item: any) => (
        <List.Item key={item.title}>
          <List.Item.Meta
            title={
              <>
                {item.title} <AudioOutlined style={{ fontWeight: "bold" }} />
                {favorite ? (
                  [
                    <Popconfirm
                      title="Delete the word?"
                      description="Are you sure to delete this word?"
                      onConfirm={() => confirm(item.id)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <DeleteOutlined style={{ marginLeft: 25 }} />
                    </Popconfirm>,
                  ]
                ) : (
                  <StarOutlined
                    style={{ marginLeft: 25 }}
                    onClick={() => setFavorite(item.id)}
                  />
                )}
              </>
            }
            description={<Text italic>{item.description}</Text>}
          />

          <Text strong>Defination & Example</Text>
          {Array.isArray(item?.content) &&
            item?.content?.map((def: any, index: number) => (
              <ul key={index} style={{ paddingBottom: 10 }}>
                <p>
                  <Text>
                    <strong>Def:</strong> {def?.definition}
                  </Text>
                </p>
                {def?.example && (
                  <Text italic>
                    <strong>Ex:</strong> {def?.example}
                  </Text>
                )}
              </ul>
            ))}
        </List.Item>
      )}
    />
  );
};

export default Words;
