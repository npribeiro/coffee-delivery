import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';

export function DefaultLayout() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
      setHasScrolled(e.currentTarget.scrollTop > 10);
    },
    [],
  );

  return (
    <div className="bg-background max-w-screen flex flex-col max-h-screen min-h-screen  overflow-hidden">
      <Header hasScrolled={hasScrolled} />
      <div
        onScroll={handleScroll}
        className="px-40 pb-8 w-full flex-1 overflow-y-auto"
      >
        <Outlet />
      </div>
    </div>
  );
}
