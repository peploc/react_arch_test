import React, { lazy, Suspense } from 'react';
import Spinner from '../entities/components/Spinner/Spinner';

const loadable = (importFunc: any) => {
  const LazyComponent = lazy(importFunc);

  return () => (
    <Suspense fallback={Spinner}>
      <LazyComponent />
    </Suspense>
  );
};

export default loadable;
