import React from 'react';
import ClassCard from './ClassCard';
export default function ClassFeed() {
  const items = [1, 2, 3, 4];
  return (
    <section className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <ClassCard item={item}></ClassCard>
      ))}
    </section>
  );
}
