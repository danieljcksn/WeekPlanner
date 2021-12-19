import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fs from '../../styles/fs';

const s = StyleSheet.create({
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
  form_title: {
    color: colors.black,
    fontFamily: 'Ubuntu-B',
    fontSize: fs.small,
    paddingTop: 50,
  },
  input_blur: {
    borderWidth: 0.8,
    borderColor: colors.gray,
    borderRadius: 10,
    marginTop: 20,
    padding: 15,
    fontSize: fs.small,
    color: colors.black,
    fontFamily: 'Ubuntu-L',
    backgroundColor: colors.white,
  },
  input_focus: {
    borderWidth: 0.8,
    borderColor: colors.default_blue,
    borderRadius: 10,
    marginTop: 20,
    padding: 15,
    fontSize: fs.small,
    color: colors.black,
    fontFamily: 'Ubuntu-L',
    backgroundColor: colors.white,
    shadowColor: colors.default_blue,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  input_valid: {
    borderWidth: 0.8,
    borderColor: colors.default_blue,
    borderRadius: 10,
    marginTop: 20,
    padding: 15,
    fontSize: fs.small,
    color: colors.black,
    fontFamily: 'Ubuntu-R',
    backgroundColor: colors.white,
  },
  btn: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: colors.default_blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_disabled: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_title: {
    fontSize: fs.small,
    color: colors.white,
    fontFamily: 'Ubuntu-B',
  },
  login_btn: {
    flexDirection: 'row',
  },
  question: {
    marginTop: 20,
    fontFamily: 'Ubuntu-B',
    color: colors.gray,
    marginRight: 5,
  },
  login: {
    marginTop: 20,
    fontFamily: 'Ubuntu-B',
    color: colors.default_blue,
  },
});

export default s;
