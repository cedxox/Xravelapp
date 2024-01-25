import { StyleSheet } from "react-native";
import { COLOR, SIZES } from "../../constants/theme";




const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
        backgroundColor: COLOR.lightwhite
    },

    inputWrapper: (borderColor, )=> ({
        borderColor: borderColor,
        backgroundColor: COLOR.lightwhite,
        borderWidth: 1,
        height: 50,
        borderRadius: 12,
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 15,
        alignItem: 'center'
    }),
    wrappper: {
        marginBottom: 20
    },
    Label: {
        fontFamily: 'OutfitRegular',
        fontSize: SIZES.small,
        marginBottom: 5,
        marginEnd: 5,
        textAlign: "right"
    },
    errorMessage: {
        color: COLOR.red,
        fontFamily: 'OutfitRegular',
        fontSize: SIZES.small,
        marginLeft: 5,
        marginTop: 5,

    }
})

export default styles
