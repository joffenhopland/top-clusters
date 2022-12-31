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
    primary: colorPalette.purple,
    iconColor: colorPalette.blue,
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
      fontSize: 56,
      fontWeight: "bold",
      lineHeight: "110%",
    },
    h2: {
      fontFamily: "Roboto",
      fontSize: 48,
      fontWeight: "bold",
      lineHeight: "120%",
    },
    h3: {
      fontFamily: "Roboto",
      fontSize: 36,
      fontWeight: "bold",
      lineHeight: "120%",
    },
    h4: {
      fontFamily: "Roboto",
      fontSize: 24,
      fontWeight: "bold",
      lineHeight: "140%",
    },
    h5: {
      fontFamily: "Roboto",
      fontSize: 18,
      fontWeight: "bold",
      lineHeight: "150%",
    },
    h6: {
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeight: "bold",
      lineHeight: "150%",
    },
    paragraph: {
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeight: "regular",
      lineHeight: "150%",
    },
    paragraphLarge: {
      fontFamily: "Roboto",
      fontSize: 18,
      fontWeight: "regular",
      lineHeight: "150%",
    },
    label: {
      fontFamily: "Roboto",
      fontSize: 24,
      fontWeight: "bold",
      lineHeight: "120%",
    },
  },
};
