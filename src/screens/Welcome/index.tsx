import React from 'react'
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

export default function Welcome(){
    return(
        <View style={styles.container}>
            <View style={styles.rectangle}/>
            <View style={styles.content}>
                <View style={styles.title}>
                    <Text style={styles.header}>Bem vindo ao</Text>
                    <Text style={styles.header_gr}>WeekPlanner</Text>
                </View>
                <Image style={styles.img}source={require('../../assets/fig1.png')} />
                <Text style={styles.msg}>
                    Esperamos te ajudar{'\n'}
                    na organização e{'\n'}
                    planejamento de{'\n'}
                    suas tarefas!
                </Text> 
                <Pressable style={{paddingTop: 35}}>
                    <Icon name="arrow-forward-ios" color={colors.white} size={30}/>
                </Pressable>
            </View>
        </View>
    );
}
