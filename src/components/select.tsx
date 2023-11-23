import React from "react";
import { Select } from "antd";

interface SelectProps {
  filterWordWithType?: (value: any) => void;
}

// Filter `option.label` match the user type `input`
const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const SelectComponent: React.FC<SelectProps> = ({ filterWordWithType }) => (
  <>
    <label htmlFor="">Type: </label>
    <Select
      size="large"
      style={{ width: 200 }}
      showSearch
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={filterWordWithType}
      filterOption={filterOption}
      options={[
        {
          value: "noun",
          label: "Noun",
        },
        {
          value: "pronoun",
          label: "Pronoun",
        },
        {
          value: "verb",
          label: "Verb",
        },
        {
          value: "adjective",
          label: "Adjective",
        },
        {
          value: "adverb",
          label: "Adverb",
        },
        {
          value: "preposition",
          label: "Preposition",
        },
        {
          value: "conjunction",
          label: "Conjunction",
        },
        {
          value: "interjection",
          label: "Interjection",
        },
      ]}
    />
  </>
);

export default SelectComponent;
