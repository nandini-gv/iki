import { ReactNode, useEffect, useState } from 'react';
import { NoNetworkPage } from './NoNetworkPage';

export function NetworkDetector({ children }: { children: ReactNode }) {
  const [isOnline, setIsOnline] = useState(() => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return true;
    // Don't intercept in test environments
    if (navigator.userAgent.includes('jsdom')) return true;
    return navigator.onLine;
  });

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOnline) {
    return <NoNetworkPage onRetry={() => setIsOnline(navigator.onLine)} />;
  }

  return <>{children}</>;
}

export default NetworkDetector;
