import {useQuery} from '@tanstack/react-query';
import {IPost} from 'api/types';

export const TIMELINE_QK = 'timeline';

export function useTimeLine() {
  const query = useQuery({
    queryKey: [TIMELINE_QK],
    queryFn: (): IPost[] => [],
    initialData: [],
  });
  return query;
}
