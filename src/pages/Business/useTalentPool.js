import React from 'react'
import { getAllTalentPool } from 'services/Business/TalentPool/TalentPool'

export default function useTalentPool() {
  const [items, setItems] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [pages, setPages] = React.useState({})
  React.useEffect(() => {
    const getData = async () => {
      const response = await getAllTalentPool()
      setPages(response.response.data.data)
      setItems(response.items)
      setLoading(false)
    }
    getData()
  }, [])
  return { items, loading, pages }
}