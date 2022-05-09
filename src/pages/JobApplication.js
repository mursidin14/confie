import React from 'react';
import Layout from 'components/Layout/Layout';
import SearchJob from 'components/SearchJob';
export default function JobApplication() {
  return (
    <Layout userId={'1'} PageName={'Lowongan Kerja'}>
      <SearchJob></SearchJob>
    </Layout>
  );
}
