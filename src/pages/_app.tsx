import AuthProvider from '@lib/provider/authProvider';
import type { AppProps } from 'next/app';

import '../styles/tailwind.css';

export default function CryptoPups({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}
