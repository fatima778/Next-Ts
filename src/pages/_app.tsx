import '@/styles/globals.css'; // ✅ Correct global CSS import

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
