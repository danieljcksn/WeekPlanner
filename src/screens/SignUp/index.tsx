import React, { useState } from 'react'
import { View, Text, Image, Pressable, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';

import colors from '../../styles/colors';

const isValidName = (name: string) => {
  let reg = /^[a-zA-Z]*$/;

  if (reg.test(name) === false)
    return false;
  else
    return name.length > 0;
}

const isValidEmail = (email: string) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  return (reg.test(email));
}


const isValidPassword = (password: string) => {
  return password.length >= 8;
}

export default function SignUp({ navigation }: { navigation: any }) {
  //First name
  const [firstName, setFirstName] = useState("");
  const [firstNameState, setFirstNameState] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  //Last name
  const [lastName, setLastName] = useState("");
  const [lastNameState, setLastNameState] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);

  //Email
  const [email, setEmail] = useState("");
  const [emailState, setEmailState] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);

  //Password
  const [password, setPassword] = useState("");
  const [passwordState, setPasswordState] = useState(false);
  const [isFocused4, setIsFocused4] = useState(false);

  const [submit, setSubmitState] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.title}>
            <Text style={styles.header}>
              Lorem ipsum{'\n'}
              dolor abc quote.
            </Text>
          </View>
          <Text style={styles.form_title}>
            Crie uma conta nova
          </Text>

          {/* Primeiro nome */}
          <TextInput
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onEndEditing={() => {
              setFirstNameState(isValidName(firstName));
              setSubmitState(
                firstNameState &&
                lastNameState &&
                emailState &&
                passwordState
              );
            }}
            onChangeText={(firstName) => {
              setFirstName(firstName.replace(/\s/g, ""));
              setFirstNameState(isValidName(firstName));
              setSubmitState(
                firstNameState &&
                lastNameState &&
                emailState &&
                passwordState
              );
            }}

            placeholder="Primeiro nome"
            placeholderTextColor={colors.gray}
            style={(isFocused) ?
              styles.input_focus :
              ((firstNameState) ?
                styles.input_valid :
                styles.input_blur)
            }
            maxLength={30}
            autoCapitalize="words"
          >{firstName}</TextInput>

          {/* Último nome */}
          <TextInput
            onFocus={() => setIsFocused2(true)}
            onBlur={() => setIsFocused2(false)}
            onEndEditing={() => {
              setLastNameState(isValidName(lastName));
              setSubmitState(
                firstNameState &&
                lastNameState &&
                emailState &&
                passwordState
              );
            }}
            onChangeText={(lastName) => {
              setLastName(lastName.replace(/\s/g, ""));
              setLastNameState(isValidName(lastName));
              setSubmitState(
                firstNameState &&
                lastNameState &&
                emailState &&
                passwordState
              );
            }}

            placeholder="Último nome"
            placeholderTextColor={colors.gray}
            style={(isFocused2) ?
              styles.input_focus :
              ((lastNameState) ?
                styles.input_valid :
                styles.input_blur)
            }
            maxLength={30}
            autoCapitalize="words"
          >{lastName}</TextInput>

          {/* Email */}
          <TextInput
            onFocus={() => setIsFocused3(true)}
            onBlur={() => setIsFocused3(false)}
            onEndEditing={() => {
              setEmailState(isValidEmail(email));
              setSubmitState(
                firstNameState &&
                lastNameState &&
                emailState &&
                passwordState
              );
            }}

            onChangeText={(email) => {
              setEmail(email.replace(/\s/g, "").toLowerCase());
              setEmailState(isValidEmail(email));
              setSubmitState(
                firstNameState &&
                lastNameState &&
                emailState &&
                passwordState
              );
            }}

            placeholder="Email"
            placeholderTextColor={colors.gray}
            style={(isFocused3) ?
              styles.input_focus :
              ((emailState) ?
                styles.input_valid :
                styles.input_blur)
            }
            maxLength={50}
            autoCapitalize="none"
            autoComplete="email"
          >{email}</TextInput>

          {/* Password */}
          <TextInput
            onFocus={() => setIsFocused4(true)}
            onBlur={() => setIsFocused4(false)}
            onEndEditing={() => {
              setPasswordState(isValidPassword(password));
              setSubmitState(
                firstNameState &&
                lastNameState &&
                emailState &&
                passwordState
              );
            }}

            onChangeText={(password) => {
              setPassword(password.replace(/\s/g, ""));
              setPasswordState(isValidPassword(password));
              setSubmitState(
                firstNameState &&
                lastNameState &&
                emailState &&
                passwordState
              );
            }}

            placeholder="Senha"
            placeholderTextColor={colors.gray}
            style={(isFocused4) ?
              styles.input_focus :
              ((passwordState) ?
                styles.input_valid :
                styles.input_blur)
            }
            maxLength={15}
            autoCapitalize="none"
            secureTextEntry={true}
          >{password}</TextInput>

          <Pressable style={
            (submit) ?
              styles.btn :
              styles.btn_disabled
          } onPress={() => {
            if (submit)
              navigation.navigate('SignIn');
          }}>
            <Text style={styles.btn_title}>Começar</Text>
          </Pressable>

          <View style={styles.login_btn}>
            <Text style={styles.question}>Já tem uma conta?</Text>
            <Pressable onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.login}>Logar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
