import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ToastProvider } from "react-toast-notifications";
import { AuthProvider } from "contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider
      autoDismiss={true}
      autoDismissTimeout={3000}
      placement={"bottom-right"}
    >
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ToastProvider>
  );
}

export default MyApp;
