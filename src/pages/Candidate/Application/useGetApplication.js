import React from 'react'
import { getAllApplication } from 'services/Profile/Application'

export default function useGetApplication() {
  const [items, setItems] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    const getApplicationItems = async () => {
      const response = await getAllApplication()
      if(response.data.data.data === undefined){
        setItems([])
      }
      setItems(response.data.data.data)
      setLoading(false)
    }
    getApplicationItems()
  }, [])
  return { items, loading }
}
