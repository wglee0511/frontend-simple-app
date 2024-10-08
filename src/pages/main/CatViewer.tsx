import React from 'react';

import { Spinner } from 'src/components/Spinner';

const CatViewerImageContainer = React.lazy(
  () => import('src/containers/CatViewer/CatViewerImageContainer'),
);

function CatViewer() {
  return (
    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', width: '100vw' }}>
      <React.Suspense fallback={<Spinner />}>
        <CatViewerImageContainer />
      </React.Suspense>
    </div>
  );
}

export default CatViewer;
