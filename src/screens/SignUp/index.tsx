import React, { useState } from 'react'
import {View, Text, Image, Pressable, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

const isValidName = (name: string) => {
    //Tem mais coisa aq
    if(name.length > 0)
        return true;
    else
        return false;
}

const isValidEmail = (email: string) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    return(reg.test(email));
}


const isValidPassword = (password: string) => {
    return password.length >= 8
}

export default function SignUp({navigation}){
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

    return(
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
                        onEndEditing={() => setFirstNameState(isValidName(firstName))}
                        
                        onChangeText={(firstName) => {
                            setFirstName(firstName);
                            setFirstNameState(isValidName(firstName));
                        }}

                        placeholder="Primeiro nome"
                        placeholderTextColor={colors.gray}
                        style={(isFocused) ? 
                            styles.input_focus:
                            ((firstNameState)?
                            styles.input_valid:
                            styles.input_blur)
                        }
                        maxLength={30}
                        autoCapitalize="words"
                    >{firstName}</TextInput>

                    {/* Último nome */}
                    <TextInput
                        onFocus={() => setIsFocused2(true)}
                        onBlur={() => setIsFocused2(false)}
                        onEndEditing={() => setLastNameState(isValidName(lastName))}
                        
                        onChangeText={(lastName) => {
                            setLastName(lastName);
                            setLastNameState(isValidName(lastName));
                        }}

                        placeholder="Último nome"
                        placeholderTextColor={colors.gray}
                        style={(isFocused2) ? 
                            styles.input_focus:
                            ((lastNameState)?
                            styles.input_valid:
                            styles.input_blur)
                        }
                        maxLength={30}
                        autoCapitalize="words"
                    >{lastName}</TextInput>       

                    {/* Email*/}
                    <TextInput
                        onFocus={() => setIsFocused3(true)}
                        onBlur={() => setIsFocused3(false)}
                        onEndEditing={() => setEmailState(isValidEmail(email))}
                        
                        onChangeText={(email) => {
                            setEmail(email);
                            setEmailState(isValidEmail(email));
                        }}

                        placeholder="Email"
                        placeholderTextColor={colors.gray}
                        style={(isFocused3) ? 
                            styles.input_focus:
                            ((emailState)?
                            styles.input_valid:
                            styles.input_blur)
                        }
                        maxLength={30}
                        autoCapitalize="none"
                        autoComplete="email"
                    >{email}</TextInput>     

                    {/* Password*/}
                    <TextInput
                        onFocus={() => setIsFocused4(true)}
                        onBlur={() => setIsFocused4(false)}
                        onEndEditing={() => setPasswordState(isValidPassword(password))}
                        
                        onChangeText={(password) => {
                            setPassword(password);
                            setPasswordState(isValidPassword(password));
                        }}

                        placeholder="Senha"
                        placeholderTextColor={colors.gray}
                        style={(isFocused4) ? 
                            styles.input_focus:
                            ((passwordState)?
                            styles.input_valid:
                            styles.input_blur)
                        }
                        maxLength={30}
                        autoCapitalize="none"
                        secureTextEntry={true}
                    >{password}</TextInput>     

                    <Pressable style={styles.btn}>
                        <Text style={styles.btn_title}>Começar</Text>
                    </Pressable>

                    <View style={styles.login_btn}>
                        <Text style={styles.question}>Já tem uma conta?</Text>
                        <Text style={styles.login}>Logar</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
