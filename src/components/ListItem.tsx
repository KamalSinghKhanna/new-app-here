import React from 'react';

interface ListItemProps {
  item: {
    id: number;
    name: string;
    description: string;
  };
}

const ListItem: React.FC<ListItemProps> = React.memo(({ item }) => {
  console.log('Rendering item:', item.id);
  return (
    <div className="p-4 mb-4 bg-white rounded shadow-md hover:bg-gray-50 transition h-24 flex items-center">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
        <p className="text-gray-600">{item.description}</p>
      </div>
    </div>
  );
});

export default ListItem;
