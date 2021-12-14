import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {LanguageContext} from '../../contexts/LanguageContext';

const getEmoji = (hours: Number) => {
  if (hours >= 5 && hours < 12) {
    return '🌤';
  }
  if (hours >= 12 && hours <= 15) {
    return '☀';
  }
  if (hours >= 16 && hours < 18) {
    return '🌇';
  }
  if (hours >= 18 && hours <= 23) {
    return '🌃';
  }
  return '🌑';
};

const getPercentage = (tasks: Number, done_tasks: Number) => {
  return parseFloat(done_tasks / tasks).toFixed(4) * 100;
};

//Solução não recomendada
// export default function Home({navigation}: {navigation: any}) {
export default function Home() {
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

  const tasks = 4,
    done_tasks = 3;
  const percentage = getPercentage(tasks, done_tasks);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.header}>
            {languageOption
              ? week_days_pt[date.getDay() - 1]
              : week_days[date.getDay() - 1]}
            {getEmoji(date.getHours())}
          </Text>
          {/* <Text>
            21/12
          </Text> */}
        </View>

        {tasks > 0 ? (
          <View>
            <View style={styles.inline}>
              <Text style={styles.progress_txt}>
                {languageOption
                  ? 'Seu progresso hoje:'
                  : 'Your progress today:'}
              </Text>
              <Text style={styles.percentage}>
                {percentage.toString() + '%'}
              </Text>
            </View>
            <View style={styles.progress_bar} />
            <View
              style={[
                styles.progress_bar_filled,
                {width: getPercentage(tasks, done_tasks).toString() + '%'},
              ]}
            />
          </View>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}
