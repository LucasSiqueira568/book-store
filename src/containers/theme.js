import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#4ad66d",
    secondary: "#FFFFFF",
    black: "#242423",
    grey: "#e0e1dd",

    textColor: "#10002b",
    start: "#f9c74f",
}

export const SIZES = {
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    width,
    height

}

const appTheme = { COLORS, SIZES };

export default appTheme;