import React from 'react'
import { getAllTalentPool } from 'services/Business/TalentPool/TalentPool'

export default function useTalentPool() {
  const [items, setItems] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    const getData = async () => {
      const response = await getAllTalentPool()
      setItems(response)
      setLoading(false)
    }
    getData()
  }, [])
  return { items, loading }
}