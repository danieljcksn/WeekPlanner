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
})

export default styles;