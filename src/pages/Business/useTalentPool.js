import ModalError from 'components/Modal/ModalError'
import React from 'react'
import { getAllTalentPool } from 'services/Business/TalentPool/TalentPool'

export default function useTalentPool() {
  const [items, setItems] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [pages, setPages] = React.useState({})
  React.useEffect(() => {
    const getData = async () => {
      const response = await getAllTalentPool()
	  setLoading(false)
	  if(response.status === 200) {
		setPages(response.response.data.data)
		setItems(response.items)
	  }
    }
    getData()
  }, [])
  return { items, loading, pages }
}