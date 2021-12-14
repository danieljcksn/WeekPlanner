import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fs from '../../styles/fs';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  header: {
    fontFamily: 'Ubuntu-B',
    fontSize: fs.big,
    color: colors.black,
    alignItems: 'flex-start',
    //top: "300%"
  },
  content: {
    top: '10%',
    paddingHorizontal: '10%',
  },
  title: {
    alignSelf: 'flex-start',
  },
  btn: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: colors.default_blue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  btn_disabled: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    marginTop: 20,
    color: colors.black,
    backgroundColor: colors.light_gray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  btn_title: {
    fontSize: fs.small,
    fontFamily: 'Ubuntu-B',
    color: colors.white,
  },
  btn_title_disabled: {
    fontSize: fs.small,
    fontFamily: 'Ubuntu-B',
    color: colors.black,
  },
  msg: {
    fontSize: fs.xsmall,
    fontFamily: 'Ubuntu-B',
    color: colors.gray,
    marginLeft: 10,
    marginTop: 10,
  },
  flag: {
    fontSize: 25,
  },
});

export default styles;
