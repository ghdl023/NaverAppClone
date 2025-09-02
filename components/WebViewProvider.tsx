import {
  Children,
  createContext,
  MutableRefObject,
  ReactNode,
  useCallback,
  useRef,
} from 'react';
import WebView from 'react-native-webview';

interface WebviewContextType {
  webViewRefs: MutableRefObject<WebView[]>;
  addWebView: (webView: WebView) => void;
  reloadAllWebView: () => void;
}

const WebViewContext = createContext<WebviewContextType | undefined>(undefined);

const WebViewProvider = ({children}: {children: ReactNode}) => {
  const webViewRefs = useRef<WebView[]>([]);

  const addWebView = useCallback((webView: WebView) => {
    webViewRefs.current.push(webView);
  }, []);

  const reloadAllWebView = useCallback(() => {
    if (webViewRefs.current !== null) {
      webViewRefs?.current.forEach(webView => {
        webView.reload();
      });
    }
  }, []);

  return (
    <WebViewContext.Provider
      value={{
        webViewRefs,
        addWebView,
        reloadAllWebView,
      }}>
      {children}
    </WebViewContext.Provider>
  );
};

export {WebViewProvider, WebViewContext};
