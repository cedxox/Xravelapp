import { StyleSheet } from "react-native"
import { COLOR } from "../constants/theme"

const styles =StyleSheet.create({
    profile: {
        position: 'absolute',
        left:0,
        right:0,
        top: 110,
        alignItems: 'center'

    },
    image: {
        resizeMode: 'cover',
        width:100,
        height: 100,
        borderColor: COLOR.lightwhite,
        borderWidth:2,
        borderRadius: 90
    },

    zame: {
        padding: 5,
        borderRadius: 12,
        backgroundColor: COLOR.gray
    }

})

export default styles