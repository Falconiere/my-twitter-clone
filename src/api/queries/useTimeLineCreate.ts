import {useMutation, useQueryClient} from '@tanstack/react-query';
import {IPost} from 'api/types';
import {TIMELINE_QK} from './useTimeLine';

export function useTimeLineCreate() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (payload: IPost) => {
      queryClient.setQueryData([TIMELINE_QK], (posts: IPost[] | undefined) => [
        payload,
        ...(posts ?? []),
      ]);
      return payload;
    },
  });
  return mutation;
}
