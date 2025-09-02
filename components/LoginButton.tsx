import {useIsFocused, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RootStackParamList, RouteNames} from '../routes';
import CookieManager from '@react-native-cookies/cookies';
import {WebViewContext} from './WebViewProvider';

type Props = NativeStackNavigationProp<RootStackParamList>;

const LoginButton = () => {
  const navigation = useNavigation<Props>();
  const isFocused = useIsFocused();

  const [isLoggined, setIsLoggined] = useState(false);
  const btnName = isLoggined ? 'Logout' : 'Login';

  const ctx = useContext(WebViewContext);

  const onLogout = useCallback(async () => {
    await CookieManager.clearAll(true);
    setIsLoggined(false);
    ctx?.reloadAllWebView();
  }, [ctx]);

  const onLogin = useCallback(() => {
    navigation.navigate(RouteNames.Login);
  }, [navigation]);

  useEffect(() => {
    if (isFocused) {
      CookieManager.get('https://.naver.com', true).then(cookie => {
        console.log(cookie);
        if (cookie.NID_SES) {
          setIsLoggined(true);
        } else {
          setIsLoggined(false);
        }
      });
    }
  }, [isFocused]);

  return (
    <TouchableOpacity onPress={isLoggined ? onLogout : onLogin}>
      <Text style={{color: Colors.white, fontSize: 25}}>{btnName}</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
