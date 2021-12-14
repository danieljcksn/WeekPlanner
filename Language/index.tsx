import React, {useContext} from 'react';
import {LanguageContext} from '../src/contexts/LanguageContext';

export default function Language(){
  const {languageOption} = useContext(LanguageContext);

  const pt = [
    //Welcome Screen
    'Bem vindo(a) ao',
    'Esperamos te ajudar\nna organização e\nplanejamento de\nsuas tarefas!',
    //Sign Up
    'Lorem ipsum\ndolor abc quote.',
    'Criar uma nova conta',
    'Primeiro nome',
    'Último nome',
    'Email',
    'Senha',
    'Começar',
    'Já tem uma conta?',
    'Logar',
    //Sign In
    'Lorem ipsum\ndolor abc quote.',
    'Log In',
    'Email',
    'Senha',
    'Entrar',
    'Ainda não está registrado?',
    'Criar conta',
  ];

  const en = [
    //Welcome Screen
    'Welcome to',
    'We hope to help you\norganize and plan\nyour tasks',
    //Sign Up
    'Lorem ipsum\ndolor abc quote.',
    'Create new account',
    'First name',
    'Last name',
    'Email',
    'Passsword',
    'Get started',
    'Already has an accout?',
    'Sign In',
    //Sign In
    'Lorem ipsum\ndolor abc quote.',
    'Login',
    'Email',
    'Password',
    'Sign In',
    "Don't have an account?",
    'Sign up now',
  ];

  return languageOption ? pt : en;
}
