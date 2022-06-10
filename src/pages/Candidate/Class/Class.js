import React, {useState} from 'react'
import Layout from 'components/Layout/Layout'
import SearchClass from './SearchClass'
import ClassFeed from './ClassFeed'

export default function Class() {
    
  return (
    <Layout PageName={'Kelas Online'}>
        <SearchClass></SearchClass>
        <ClassFeed></ClassFeed>
    </Layout>
  )
}
