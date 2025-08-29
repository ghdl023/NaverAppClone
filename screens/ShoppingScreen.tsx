import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {RootStackParamList, RouteNames} from '../routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type ShoppingScreenProps = NativeStackScreenProps<RootStackParamList>;

const ShoppingScreen = ({navigation}: ShoppingScreenProps) => {
  return (
    <View>
      <Text>Shopping</Text>
      <TouchableOpacity onPress={() => navigation.navigate(RouteNames.Broswer)}>
        <Text>Go To Broswer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShoppingScreen;
