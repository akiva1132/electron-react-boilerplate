import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
// import type { AppRouter } from '../../server/src/router';


// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const trpc: any = createTRPCProxyClient({
  links: [
    httpBatchLink({
      url: 'https://cow-service-2.onrender.com',
      headers: () => {
        return {
          Authorization: String(localStorage.getItem('token')),
        };
      },
    }),
  ],
});



