import { useState } from "react";
import { Tabs } from "antd";

import SearchDictionaryWord from "./search-dictionary-word";
import Favorite from "./favorite";

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState("1");
  const onChangeTab = (key: string) => {
    setSelectedTab(key);
  };
  return (
    <Tabs
      defaultActiveKey="1"
      items={[
        {
          label: "Search Dictionalry",
          children: <SearchDictionaryWord title="Search Result" />,
          key: "1",
        },
        {
          label: "View Favorite",
          children: <Favorite title="Saved Favorite" />,
          key: "2",
        },
      ]}
      onChange={onChangeTab}
      destroyInactiveTabPane={selectedTab === "2"}
    />
  );
};

export default TabComponent;
