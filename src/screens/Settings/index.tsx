import React, {useState} from 'react';
import {View, Text, Image, Switch, Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../styles/colors';

import s from './styles';
import Language from '../../../Language';

export default function Settings() {
  const language = Language();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [item1, setItem1] = useState(false);
  const [item2, setItem2] = useState(false);
  const [item3, setItem3] = useState(false);
  const [item4, setItem4] = useState(false);
  const [item5, setItem5] = useState(false);

  return (
    <View style={s.container}>
      <View style={s.content}>
        <View style={s.pic_name}>
          <Image
            style={s.profile_pic}
            source={{
              uri: 'https://images.unsplash.com/photo-1594751543129-6701ad444259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            }}
          />
          <Text style={s.header}>Daniel</Text>
        </View>
        <Pressable
          onPressIn={() => setItem1(true)}
          onPressOut={() => setItem1(false)}
          style={item1 ? s.item_pressed : s.item}>
          <View style={s.icon_title}>
            <Ionicons
              name="ios-information-circle-outline"
              size={22}
              color={colors.black}
            />
            <Text style={s.item_title}>{language[23]}</Text>
          </View>
          <MaterialIcons name="navigate-next" size={22} color={colors.gray} />
        </Pressable>
        <Pressable
          onPressIn={() => setItem2(true)}
          onPressOut={() => setItem2(false)}
          style={item2 ? s.item_pressed : s.item}>
          <View style={s.icon_title}>
            <Ionicons
              name="ios-notifications-outline"
              size={22}
              color={colors.black}
            />
            <Text style={s.item_title}>{language[24]}</Text>
          </View>
          <MaterialIcons name="navigate-next" size={22} color={colors.gray} />
        </Pressable>
        <Pressable
          onPressIn={() => setItem3(true)}
          onPressOut={() => setItem3(false)}
          style={item3 ? s.item_pressed : s.item}>
          <View style={s.icon_title}>
            <Ionicons
              name="lock-closed-outline"
              size={22}
              color={colors.black}
            />
            <Text style={s.item_title}>{language[25]}</Text>
          </View>
          <MaterialIcons name="navigate-next" size={22} color={colors.gray} />
        </Pressable>
        <Pressable
          onPressIn={() => setItem4(true)}
          onPressOut={() => setItem4(false)}
          style={item4 ? s.item_pressed : s.item}>
          <View style={s.icon_title}>
            <MaterialIcons name="language" size={22} color={colors.black} />
            <Text style={s.item_title}>{language[26]}</Text>
          </View>
          <MaterialIcons name="navigate-next" size={22} color={colors.gray} />
        </Pressable>
        <Pressable
          onPressIn={() => setItem5(true)}
          onPressOut={() => setItem5(false)}
          onPress={() => toggleSwitch()}
          style={item5 ? s.item_pressed : s.item}>
          <View style={s.icon_title}>
            {isEnabled ? (
              <Ionicons name="ios-moon" size={22} color={colors.black} />
            ) : (
              <Ionicons
                name="ios-moon-outline"
                size={22}
                color={colors.black}
              />
            )}
            <Text style={s.item_title}>{language[27]}</Text>
          </View>
          <Switch
            trackColor={{false: '#767577', true: colors.default_blue}}
            thumbColor={isEnabled ? colors.white : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </Pressable>
      </View>
    </View>
  );
}
