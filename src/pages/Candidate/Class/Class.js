import React, { useState } from 'react';
import Layout from 'components/Layout/Layout';
import SearchClass from './SearchClass';
import ClassFeed from './ClassFeed';
import UnderConstruction from 'pages/UnderConstruction';
import { useEffect } from 'react';

export default function Class() {
  useEffect(() => {
    document.title = 'Kelas';
  }, [])
  return (
    <>
      {false && (
        <Layout PageName={'Kelas Online'}>
          <SearchClass></SearchClass>
          <ClassFeed></ClassFeed>
        </Layout>
      )}
      {true && <UnderConstruction></UnderConstruction>}
    </>
  );
}
