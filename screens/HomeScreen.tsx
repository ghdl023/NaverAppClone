import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import {RouteNames} from '../routes';

const styles = StyleSheet.create({
  safeArea: {flex: 1},
});

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <WebView
        source={{uri: 'https://m.naver.com'}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onShouldStartLoadWithRequest={request => {
          console.log(request);
          if (request.url.startsWith('https://m.naver.com')) {
            return true;
          }

          if (request.url.startsWith('https://')) {
            navigation.navigate(RouteNames.Broswer, {initialUrl: request.url});
            return false;
          }

          return true;
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
