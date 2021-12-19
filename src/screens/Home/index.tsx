import React, {useContext} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {LanguageContext} from '../../contexts/LanguageContext';
import Language from '../../../Language';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getEmoji, getPercentage} from '../../Components/Utils';

export default function Home() {
  const language = Language();
  const {languageOption} = useContext(LanguageContext);
  const date = new Date(Date.now());
  const week_days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const week_days_pt = [
    'Segunda-feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
    'Domingo',
  ];

  const labels = ['#40D8FF', '#40FFAF', '#FFF740', '#FFA740', '#D940FF'];
  const tasks = [
    {
      id: 1,
      title: 'Exercícios de Matemática',
      description: 'Descrição',
      color: 0,
      date_time: '14:00',
      file: '',
      link: 'https://www.google.com',
    },
    {
      id: 2,
      title: 'Exercícios de Matemática',
      description: 'Descrição',
      color: 1,
      date_time: '14:00',
      file: '',
      link: 'https://www.google.com',
    },
    {
      id: 3,
      title: 'Exercícios de Matemática',
      description: 'Descrição',
      color: 2,
      date_time: '14:00',
      file: '',
      link: 'https://www.google.com',
    },
    {
      id: 4,
      title: 'Exercícios de Matemática',
      description: 'Descrição',
      color: 3,
      date_time: '14:00',
      file: '',
      link: 'https://www.google.com',
    },
  ];

  const Task = ({item}) => (
    <View style={styles.task_card}>
      <View style={{marginRight: 10, marginLeft: 8}}>
        <Icon name="coffee" size={24} color={labels[item.color]} />
      </View>
      <View>
        <Text style={styles.task_title}>{item.title}</Text>
        <Text>{item.date_time}</Text>
      </View>
      <View style={[styles.circle, {borderColor: labels[item.color]}]}/>
    </View>
  );

  const renderItem = ({item}) => <Task item={item} />;

  const done_tasks = 3;
  const percentage = getPercentage(tasks.length, done_tasks);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.header}>
            {!languageOption
              ? week_days_pt[date.getDay() - 1]
              : week_days[date.getDay() - 1]}
            {getEmoji(date.getHours())}
          </Text>
          <Text>21/12</Text>
        </View>

        {tasks.length > 0 ? (
          <View>
            <View style={styles.inline}>
              <Text style={styles.progress_txt}>{language[20]}</Text>
              <Text style={styles.percentage}>
                {percentage.toString() + '%'}
              </Text>
            </View>
            <View style={styles.progress_bar} />
            <View
              style={[
                styles.progress_bar_filled,
                {
                  width:
                    getPercentage(tasks.length, done_tasks).toString() + '%',
                },
              ]}
            />
          </View>
        ) : (
          <></>
        )}

        <View>
          <Text style={styles.section_title}>{language[21]} 💪</Text>
          {/* Renderização das tarefas */}
          <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View>
          <Text style={styles.section_title}>{language[22]} 🎉</Text>
        </View>
      </View>
    </View>
  );
}
