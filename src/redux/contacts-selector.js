import { useMemo, useState } from 'react';
import { useGetContactsQuery } from './contactSlise';

export const useFulter = () => {
  const [filter, setFilter] = useState('');
  const { data, error, isLoading } = useGetContactsQuery();

  const filteredDataByName = useMemo(
    () =>
      data?.filter(
        ({ name }) => name.toLowerCase().startsWith(filter.toLowerCase()) ?? []
      ),
    [data, filter]
  );
  return { error, filter, setFilter, isLoading, filteredDataByName, data };
};
