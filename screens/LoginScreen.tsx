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
});

const SHOPPING_URL = 'https://nid.naver.com/nidlogin.login';

const LoginScreen = ({navigation}: Props) => {
  const ctx = useContext(WebViewContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <WebView
        source={{uri: SHOPPING_URL}}
        onNavigationStateChange={event => {
          console.log(event.url);
          if (event.url === 'https://m.naver.com/') {
            ctx?.reloadAllWebView();
            navigation.goBack();
          }
        }}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
