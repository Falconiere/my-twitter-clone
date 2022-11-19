import {ReactNode} from 'react';
import {
  QueryClient,
  QueryClientProvider as Provider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

export function QueryClientProvider({children}: {children: ReactNode}) {
  return <Provider client={queryClient}>{children}</Provider>;
}
