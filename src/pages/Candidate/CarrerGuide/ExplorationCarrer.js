import Layout from 'components/Layout/Layout';
import BasicCard from 'components/Widgets/BasicCard';
import React from 'react';
import SearchExploration from './SearchExploration';

export default function ExplorationCarrer() {
  return (
    <Layout PageName={'Panduan Karir'}>
      <SearchExploration></SearchExploration>
      <ExplorationFeed />
    </Layout>
  );
}

function ExplorationCard() {
  return (
    <BasicCard sameSize={true}>
      <div className="px-3 text-left">
        <img className="w-full" src="/class_img.png" alt="" />
        <p className="mt-1 font-semibold">Admin</p>
        <p className="text-sm font-semibold">Customer Handling & Pelayanan</p>
        <p className="mt-3 text-xs">
          Lorem ipsum dodsfaddflor sit amet, consectetur adipiscfdfsding elit.
          Eu enim amet aliquam in vivvcvcverra in augue placerat cursus.
        </p>
      </div>
    </BasicCard>
  );
}

function ExplorationFeed() {
  return (
    <section className="mt-10 grid grid-cols-3 gap-3">
      <ExplorationCard />
      <ExplorationCard />
      <ExplorationCard />
      <ExplorationCard />
    </section>
  );
}
