import {StyleSheet} from 'react-native'
import { COLOR } from '../../constants/theme'

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        marginHorizontal: 20

    },
    titleContainer: {
        margin: 15,
        backgroundColor: COLOR.lightwhite,
        height: 120,
        position: 'absolute',
        top: 170,
        left: 0,
        right:0,
        borderRadius: 20
    },
    titleColumn: {
        padding: 10
        
    },
    bottom: {
        paddingHorizontal: 30,
        backgroundColor: COLOR.lightwhite,
        height:90,
        paddingVertical: 20
    }
})


export default styles