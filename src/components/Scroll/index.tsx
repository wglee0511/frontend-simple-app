import React, { useCallback, useEffect } from 'react';

import { throttle } from 'lodash';

import { InfinityScrollWithChildren } from './type';

const InfinityScroll = ({
  children,
  nextCall,
  isNext,
  isLoading,
  style,
}: InfinityScrollWithChildren) => {
  const innerThrottle = throttle(() => {
    if (isLoading) {
      return;
    }
    const { scrollTop, offsetHeight } = document.documentElement;
    if (window.innerHeight + scrollTop >= offsetHeight) {
      nextCall();
    }
  }, 300);

  const throttleCallback = useCallback(innerThrottle, [isLoading, innerThrottle]);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (isNext) {
      window.addEventListener('scroll', throttleCallback);
    } else {
      window.removeEventListener('scroll', throttleCallback);
    }

    // eslint-disable-next-line consistent-return
    return () => window.removeEventListener('scroll', throttleCallback);
  }, [isNext, isLoading, throttleCallback]);

  return <div style={style}>{children}</div>;
};

export default InfinityScroll;
