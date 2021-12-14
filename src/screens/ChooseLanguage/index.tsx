import React, {useState, useContext} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

import colors from '../../styles/colors';
import Language from '../../../Language';
import {LanguageContext} from '../../contexts/LanguageContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Solução não recomendada
export default function ChooseLanguage({navigation}: {navigation: any}) {
  const language = Language();
  const {setLanguageOption} = useContext(LanguageContext);
  const [option, setOption] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.header}>{language[18]}</Text>
        </View>

        <Pressable
          style={option ? styles.btn : styles.btn_disabled}
          onPress={() => {
            setOption(true);
            setLanguageOption(true);
          }}>
          <Text style={option ? styles.btn_title : styles.btn_title_disabled}>
            English
          </Text>
          <Text style={styles.flag}>🇺🇸</Text>
        </Pressable>
        <Pressable
          style={!option ? styles.btn : styles.btn_disabled}
          onPress={() => {
            setOption(false);
            setLanguageOption(false);
          }}>
          <Text style={!option ? styles.btn_title : styles.btn_title_disabled}>
            Português
          </Text>
          <Text style={styles.flag}>🇧🇷</Text>
        </Pressable>
        <Text style={styles.msg}>{language[19]}</Text>

        <Pressable
          style={{paddingTop: 35, alignSelf: 'center'}}
          onPress={() => navigation.navigate('Welcome')}>
          <Icon
            name="arrow-forward-ios"
            color={colors.default_blue}
            size={30}
          />
        </Pressable>
      </View>
    </View>
  );
}
