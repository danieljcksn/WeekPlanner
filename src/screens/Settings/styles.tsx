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
    fontSize: 29,
    color: colors.black,
    alignItems: 'flex-start',
    //top: "300%"
  },
  content: {
    top: '7%',
  },
  title: {
    alignSelf: 'flex-start',
  },
  pic_name: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  profile_pic: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  item_pressed: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: colors.light_gray,
  },
  item_title: {
    color: colors.black,
    fontSize: fs.small,
    marginLeft: 10,
  },
  icon_title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default s;
