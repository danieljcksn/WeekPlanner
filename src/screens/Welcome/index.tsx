import React, {useContext} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';
import {LanguageContext} from '../../contexts/LanguageContext';

export default function Welcome({navigation}: {navigation: any}) {
  const {languageOption} = useContext(LanguageContext);

  return (
    <View style={styles.container}>
      <View style={styles.rectangle} />
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.header}>
            {languageOption?
            "Bem vindo ao":
            "Welcome to"}
          </Text>
          <Text style={styles.header_gr}>WeekPlanner</Text>
        </View>
        <Image style={styles.img} source={require('../../assets/fig1.png')} />
        <Text style={styles.msg}>
          Esperamos te ajudar{'\n'}
          na organização e{'\n'}
          planejamento de{'\n'}
          suas tarefas!
        </Text>
        <Pressable
          style={{paddingTop: 35}}
          onPress={() => navigation.navigate('SignUp')}>
          <Icon name="arrow-forward-ios" color={colors.white} size={30} />
        </Pressable>
      </View>
    </View>
  );
}
