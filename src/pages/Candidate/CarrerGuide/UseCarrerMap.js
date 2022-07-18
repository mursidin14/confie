import React from 'react';
import { getMapCareer } from 'services/CarrerGuide/CarrerGuide';
export default function UseCarrerMap() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    const getItems = async () => {
      const response = await getMapCareer();
      setItems(response.data)
    };
    getItems();
  }, []);
  return items;
}
