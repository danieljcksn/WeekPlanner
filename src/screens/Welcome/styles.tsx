import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fs from '../../styles/fs';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.default_blue,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  rectangle: {
    backgroundColor: 'white',
    width: '150%',
    height: '75%',
    position: 'absolute',
    left: -150,
    top: -200,
    transform: [{rotate: '60deg'}],
    zIndex: 0,
  },
  header: {
    fontFamily: 'Ubuntu-B',
    fontSize: fs.big,
    color: colors.black,
    paddingTop: 30,
    alignItems: 'flex-start',
    //top: "300%"
  },
  header_gr: {
    fontFamily: 'Ubuntu-B',
    fontSize: fs.big,
    color: colors.default_blue,
  },
  content: {
    top: '10%',
    paddingHorizontal: '17%',
    alignItems: 'center',
  },
  msg: {
    fontFamily: 'Ubuntu-L',
    fontSize: fs.medium,
    textAlign: 'center',
    color: colors.white,
  },
  img: {
    width: 350,
    height: 350,
  },
  title: {
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default styles;
