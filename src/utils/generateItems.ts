interface Items {
  id: number;
  name: string;
  description: string;
}

export const generateItems = (numItems: number) :Items[] => {
  return Array.from({ length: numItems }, (_, index) => ({
    id: index,
    name: `Item ${index}`,
    description: `This is the description for item ${index}.`,
  }));
};
