import React from 'react'
import { getAllApplication } from 'services/Profile/Application'

export default function useGetApplication() {
  const [items, setItems] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    const getApplicationItems = async () => {
      const response = await getAllApplication()
      setItems(response)
      setLoading(false)
    }
    getApplicationItems()
  }, [])
  return { items, loading }
}
