import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fs from "../../styles/fs";


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: "100%",
    height: "100%",
    overflow: "hidden"
  },
  header: {
    fontFamily: 'Ubuntu-B',
    fontSize: 29,
    color: colors.black,
    alignItems: "flex-start"
    //top: "300%"
  },
  content: {
    top: "7%",
    paddingHorizontal: "10%",
  },
  title: {
    alignSelf: "flex-start"
  },
  progress_txt:{
    fontSize: fs.small,
    fontFamily: 'Ubuntu-L',
    color: colors.black,
  },
  progress_bar:{
    backgroundColor: colors.light_gray,
    width: "100%",
    height: 20,
    marginTop: 10,
    borderRadius: 40,
    zIndex: 0,
    position: "relative"
  },
  progress_bar_filled:{
    backgroundColor: colors.light_green,
    height: 20,
    marginTop: 10,
    borderRadius: 40,
    position: "absolute",
    top: 55
  },
  percentage:{
    fontFamily: 'Ubuntu-B',
    fontSize: fs.small,
    marginLeft: 4,
    color: colors.light_green
  },
  inline: {
    flexDirection: "row",
    marginTop: 35
  }

})

export default styles;