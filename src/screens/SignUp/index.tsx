/* eslint-disable no-shadow */
import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import s from './styles';
import colors from '../../styles/colors';
import Language from '../../../Language';

const isValidName = (name: string) => {
  let reg = /^[a-zA-Z]*$/;

  if (reg.test(name) === false) {
    return false;
  } else {
    return name.length > 0;
  }
};

const isValidEmail = (email: string) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  return reg.test(email);
};

const isValidPassword = (password: string) => {
  return password.length >= 8;
};

export default function SignUp({navigation}: {navigation: any}) {
  const language = Language();

  //First name
  const [firstName, setFirstName] = useState('');
  const [firstNameState, setFirstNameState] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  //Last name
  const [lastName, setLastName] = useState('');
  const [lastNameState, setLastNameState] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);

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
      <View style={s.container}>
        <View style={s.content}>
          {/* Header */}
          <View style={s.title}>
            <Text style={s.header}>{language[2]}</Text>
          </View>
          <Text style={s.form_title}>{language[3]}</Text>

          {/* Primeiro nome */}
          <TextInput
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onEndEditing={() => {
              setFirstNameState(isValidName(firstName));
              setSubmitState(
                firstNameState && lastNameState && emailState && passwordState,
              );
            }}
            onChangeText={firstName => {
              setFirstName(firstName.replace(/\s/g, ''));
              setFirstNameState(isValidName(firstName));
              setSubmitState(
                firstNameState && lastNameState && emailState && passwordState,
              );
            }}
            placeholder={language[4]}
            placeholderTextColor={colors.gray}
            style={
              isFocused
                ? s.input_focus
                : firstNameState
                ? s.input_valid
                : s.input_blur
            }
            maxLength={30}
            autoCapitalize="words">
            {firstName}
          </TextInput>

          {/* Último nome */}
          <TextInput
            onFocus={() => setIsFocused2(true)}
            onBlur={() => setIsFocused2(false)}
            onEndEditing={() => {
              setLastNameState(isValidName(lastName));
              setSubmitState(
                firstNameState && lastNameState && emailState && passwordState,
              );
            }}
            onChangeText={lastName => {
              setLastName(lastName.replace(/\s/g, ''));
              setLastNameState(isValidName(lastName));
              setSubmitState(
                firstNameState && lastNameState && emailState && passwordState,
              );
            }}
            placeholder={language[5]}
            placeholderTextColor={colors.gray}
            style={
              isFocused2
                ? s.input_focus
                : lastNameState
                ? s.input_valid
                : s.input_blur
            }
            maxLength={30}
            autoCapitalize="words">
            {lastName}
          </TextInput>

          {/* Email */}
          <TextInput
            onFocus={() => setIsFocused3(true)}
            onBlur={() => setIsFocused3(false)}
            onEndEditing={() => {
              setEmailState(isValidEmail(email));
              setSubmitState(
                firstNameState && lastNameState && emailState && passwordState,
              );
            }}
            onChangeText={email => {
              setEmail(email.replace(/\s/g, '').toLowerCase());
              setEmailState(isValidEmail(email));
              setSubmitState(
                firstNameState && lastNameState && emailState && passwordState,
              );
            }}
            placeholder={language[6]}
            placeholderTextColor={colors.gray}
            style={
              isFocused3
                ? s.input_focus
                : emailState
                ? s.input_valid
                : s.input_blur
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
              setSubmitState(
                firstNameState && lastNameState && emailState && passwordState,
              );
            }}
            onChangeText={password => {
              setPassword(password.replace(/\s/g, ''));
              setPasswordState(isValidPassword(password));
              setSubmitState(
                firstNameState && lastNameState && emailState && passwordState,
              );
            }}
            placeholder={language[7]}
            placeholderTextColor={colors.gray}
            style={
              isFocused4
                ? s.input_focus
                : passwordState
                ? s.input_valid
                : s.input_blur
            }
            maxLength={15}
            autoCapitalize="none"
            secureTextEntry={true}>
            {password}
          </TextInput>

          <Pressable
            style={submit ? s.btn : s.btn_disabled}
            onPress={() => {
              if (submit) {
                navigation.navigate('SignIn');
              }
            }}>
            <Text style={s.btn_title}>{language[8]}</Text>
          </Pressable>

          <View style={s.login_btn}>
            <Text style={s.question}>{language[9]}</Text>
            <Pressable onPress={() => navigation.navigate('SignIn')}>
              <Text style={s.login}>{language[10]}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
