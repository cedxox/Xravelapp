import { Dimensions } from 'react-native';
const { height,width } = Dimensions.get('window');

const COLOR = {
    blue: "#4267b2",
    red: "#eb6a58",
    green: "#449282",
    white: "#fbfbfb",
    lightwhite: "#ffffff",
    lightblue: "#6885c1",
    lightred: "#eb9c9b",
    lightgreen: "#73ada1",
    black: "#121212",
    dark: "#34313a",
    gray: "#b4b2b6",
    lightgray: "#d1cfd5",
};

const SIZES = {
    xsmall: 11,
    small: 12,
    medium: 16,
    large: 20,
    xlarge: 24,
    xxlarge: 44,
    height,
    width
};

const TEXT = {
    xxsmall: 11,
    xsmall: 13,
    small: 15,
    medium: 17,
    large: 21,
    xlarge: 27,
    xxlarge: 32,
};

const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },

        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },

    medium: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },

        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    },
};

export { COLOR, SIZES, TEXT, SHADOWS };