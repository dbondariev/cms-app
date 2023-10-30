import React, { lazy, Suspense } from "react";

const ContentLoader = ({ path }) => {
  const TabContent = lazy(() => import(`../tabs/${path}`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TabContent />
    </Suspense>
  );
};

export default ContentLoader;
