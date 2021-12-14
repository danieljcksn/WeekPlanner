import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from './styles';

import colors from '../../styles/colors';
import Language from '../../../Language';

const isValidEmail = (email: string) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  return reg.test(email);
};

const isValidPassword = (password: string) => {
  return password.length >= 8;
};

//Solução não recomendada
export default function SignIn({navigation}: {navigation: any}) {
  const language = Language();

  //Email
  const [email, setEmail] = useState('');
  const [emailState, setEmailState] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);

  //Password
  const [password, setPassword] = useState('');
  const [passwordState, setPasswordState] = useState(false);
  const [isFocused4, setIsFocused4] = useState(false);

  const [submit, setSubmitState] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.title}>
            <Text style={styles.header}>{language[11]}</Text>
          </View>
          <Text style={styles.form_title}>{language[12]}</Text>
          {/* Email */}
          <TextInput
            onFocus={() => setIsFocused3(true)}
            onBlur={() => setIsFocused3(false)}
            onEndEditing={() => {
              setEmailState(isValidEmail(email));
              setSubmitState(emailState && passwordState);
            }}
            onChangeText={(email) => {
              setEmail(email.replace(/\s/g, '').toLowerCase());
              setEmailState(isValidEmail(email));
              setSubmitState(emailState && passwordState);
            }}
            placeholder={language[13]}
            placeholderTextColor={colors.gray}
            style={
              isFocused3
                ? styles.input_focus
                : emailState
                ? styles.input_valid
                : styles.input_blur
            }
            maxLength={50}
            autoCapitalize="none"
            autoComplete="email">
            {email}
          </TextInput>

          {/* Password */}
          <TextInput
            onFocus={() => setIsFocused4(true)}
            onBlur={() => setIsFocused4(false)}
            onEndEditing={() => {
              setPasswordState(isValidPassword(password));
              setSubmitState(emailState && passwordState);
            }}
            onChangeText={password => {
              setPassword(password.replace(/\s/g, ''));
              setPasswordState(isValidPassword(password));
              setSubmitState(emailState && passwordState);
            }}
            placeholder={language[14]}
            placeholderTextColor={colors.gray}
            style={
              isFocused4
                ? styles.input_focus
                : passwordState
                ? styles.input_valid
                : styles.input_blur
            }
            maxLength={15}
            autoCapitalize="none"
            secureTextEntry={true}>
            {password}
          </TextInput>

          <Pressable
            style={submit ? styles.btn : styles.btn_disabled}
            onPress={() => {
              //if(submit)
              navigation.navigate('SignUp');
            }}>
            <Text style={styles.btn_title}>{language[15]}</Text>
          </Pressable>

          <View style={styles.login_btn}>
            <Text style={styles.question}>{language[16]}</Text>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.login}>{language[17]}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
