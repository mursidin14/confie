import React from 'react';
import { useParams } from 'react-router-dom';
import { getDetailApplication } from 'services/Profile/Application';

export default function useGetApplicationDetail() {
  const { id } = useParams();
  const [item, setItem] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const getApplicationItems = async () => {
      const response = await getDetailApplication(id)
      console.log(response)
      setItem(response)
      setLoading(false)
    }
    getApplicationItems()
  }, []);

  return { item, loading };
}
