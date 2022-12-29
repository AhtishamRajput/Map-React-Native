import {View, Text, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import React, {useState} from 'react';
import Styles from '../config/Styles';
import MyButton from '../compnents/MyButton';
import MyInput from '../compnents/MyInput';

const SignUp = ({navigation}) => {
  let [model, setModel] = useState({});
  let [loder, setloder] = useState(false);

  let SignUpUser = () => {
    setloder(true);
    auth()
      .createUserWithEmailAndPassword(model.email, model.password)
      .then(res => {
        console.log('Sign In User');
        database()
          .ref(`users/${res.user.uid}`)
          .set(model)
          .then(() => {
            navigation.navigate('Login');
            setloder(false);
          })
          .catch(errr => {
            console.log(errr);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
      <View style={[Styles.h100, Styles.flexCenter]}>
        <Text style={[Styles.fs1, Styles.textBlack]}>SignUp</Text>
        <View style={[Styles.w100, Styles.p2]}>
          <MyInput
            onChangeText={e => setModel({...model, name: e})}
            label="User Name"
          />
        </View>
        <View style={[Styles.w100, Styles.p2]}>
          <MyInput
            keyboardType={'email-address'}
            onChangeText={e => setModel({...model, email: e})}
            label="email"
          />
        </View>
        <View style={[Styles.w100, Styles.p2]}>
          <MyInput
            onChangeText={e => setModel({...model, password: e})}
            label="Password"
          />
        </View>
        <View style={[Styles.w100, Styles.px4]}>
          {loder ? (
            <View>
              <ActivityIndicator size={50} color="#023047" />
            </View>
          ) : (
            <MyButton onPress={SignUpUser} label="Sign Up" />
          )}
        </View>
      </View>
    </>
  );
};

export default SignUp;
