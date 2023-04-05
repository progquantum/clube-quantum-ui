import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export type Data = [boolean, Dispatch<SetStateAction<boolean>>];

export const useInfiniteScroll = (callback: any) => {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log('called back');
    });
  }, [isFetching]);

  return [isFetching, setIsFetching] as Data;
};
