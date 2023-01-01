// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

const colorPalette = {
  purple: "#341F6F",
  blue: "#6B7CFF",
  lightViolet: "#E0E4FC",
  lightGrey: "#6D6E76",
  //   labelGradient: "#A737FF - #6B7CFF", need to figure out gradients
  //   blurGradient: "", need to figure out blur gradients
  green: "#0ECD9D",
  red: "#CD0E61",
  black: "#0B0B0B",
  white: "#FFFFFF",
};

export const theme = {
  colors: {
    background: colorPalette.white,
    foreground: colorPalette.black,
    black: colorPalette.black,
    lightViolet: colorPalette.lightViolet,
    lightGrey: colorPalette.lightGrey,
    iconColor: colorPalette.blue,
    primary: colorPalette.purple,
    success: colorPalette.green,
    danger: colorPalette.red,
    failure: colorPalette.red,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textStyles: {
    h1: {
      fontFamily: "Roboto",
      fontSize: "56px",
      fontWeight: "700",
      lineHeight: "110%",
    },
    h2: {
      fontFamily: "Roboto",
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "120%",
    },
    h3: {
      fontFamily: "Roboto",
      fontSize: "36px",
      fontWeight: "700",
      lineHeight: "120%",
    },
    h4: {
      fontFamily: "Roboto",
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "140%",
    },
    h5: {
      fontFamily: "Roboto",
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: "150%",
    },
    h6: {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: "150%",
    },
    paragraph: {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "150%",
    },
    paragraphLarge: {
      fontFamily: "Roboto",
      fontSize: "18px",
      fontWeight: "400",
      lineHeight: "150%",
    },
    paragraphLargeBold: {
      fontFamily: "Roboto",
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "150%",
    },
    paragraphSmall: {
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "110%",
    },
    label: {
      fontFamily: "Roboto",
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "120%",
    },
  },
};
