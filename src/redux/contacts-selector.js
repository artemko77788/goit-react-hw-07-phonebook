import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from './contactSlise';

export const useFulter = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const filter = useSelector(state => state.filter.value);
  const filteredDataByName = useMemo(
    () =>
      data?.filter(
        ({ name }) => name.toLowerCase().startsWith(filter.toLowerCase()) ?? []
      ),
    [data, filter]
  );
  return { error, filter, isLoading, filteredDataByName, data };
};
