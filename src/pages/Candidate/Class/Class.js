import React, { useState } from 'react';
import Layout from 'components/Layout/Layout';
import SearchClass from './SearchClass';
import ClassFeed from './ClassFeed';
import UnderConstruction from 'pages/UnderConstruction';

export default function Class() {
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
