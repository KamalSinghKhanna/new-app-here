import React, { useCallback } from "react";
import ListItem from "./ListItem";

interface Item {
  id: number;
  name: string;
  description: string;
}

interface LargeListProps {
  items: Item[];
}

const LargeListComponent: React.FC<LargeListProps> = ({ items }) => {
  const renderItem = useCallback((item: Item) => {
    return <ListItem key={item.id} item={item} />;
  }, []);

  return <div className="p-5 max-w-4xl mx-auto">{items.map(renderItem)}</div>;
};

const LargeList = React.memo(LargeListComponent);
export default LargeList;
