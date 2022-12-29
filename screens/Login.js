import {View, Text, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import Styles from '../config/Styles';
import MyInput from '../compnents/MyInput';
import MyButton from '../compnents/MyButton';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  let [model, setModel] = useState({});
  let [loder, setloder] = useState(false);

  let LoginUser = () => {
    setloder(true);
    auth()
      .signInWithEmailAndPassword(model.email, model.password)
      .then(() => {
        console.log('login');
        navigation.navigate('Contry');
        setloder(false);
      })
      .catch(er => {
        console.log(er);
      });
  };
  return (
    <>
      <View style={[Styles.h100, Styles.flexCenter]}>
        <Text style={[Styles.fs1, Styles.textBlack]}>login</Text>
        <View style={[Styles.w100, Styles.px2, Styles.p1]}>
          <MyInput
            keyboardType={'email-address'}
            onChangeText={e => setModel({...model, email: e})}
            label="email"
          />
        </View>
        <View style={[Styles.w100, Styles.px2, Styles.p1]}>
          <MyInput
            onChangeText={e => setModel({...model, password: e})}
            label="Password"
          />
        </View>
        <View style={[Styles.flexRow, Styles.px2]}>
          <View style={[Styles.p1, Styles.w50]}>
            <MyButton
              onPress={() => navigation.navigate('SignUp')}
              label="Sign Up"
            />
          </View>
          <View style={[Styles.p1, Styles.w50]}>
            {loder ? (
              <View>
                <ActivityIndicator size={50} color="#023047" />
              </View>
            ) : (
              <MyButton onPress={LoginUser} label="Login" />
            )}
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;
