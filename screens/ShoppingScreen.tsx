import React, {useState, useCallback, useRef, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  RefreshControl,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {RootStackParamList, RouteNames} from '../routes';
import {WebViewContext} from '../components/WebViewProvider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList>;

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  contentContainerStyle: {flex: 1},
});

const SHOPPING_URL = 'https://m.cafe.naver.com';

const ShoppingScreen = ({navigation}: Props) => {
  const ctx = useContext(WebViewContext);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const webViewRef = useRef<WebView>(null);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    webViewRef.current?.reload();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }>
        <WebView
          ref={ref => {
            webViewRef.current = ref;
            if (ref != null) {
              ctx?.addWebView(ref);
            }
          }}
          source={{uri: SHOPPING_URL}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          onShouldStartLoadWithRequest={request => {
            console.log(request);
            if (
              request.url.startsWith(SHOPPING_URL) ||
              request.mainDocumentURL?.startsWith(SHOPPING_URL)
            ) {
              return true;
            }

            if (request.url.startsWith('https://')) {
              navigation.navigate(RouteNames.Broswer, {
                initialUrl: request.url,
              });
              return false;
            }

            return true;
          }}
          onLoad={() => {
            setIsRefreshing(false);
          }}
          renderLoading={() => <></>}
          startInLoadingState={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShoppingScreen;
