import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    colorDisplay: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    colorLabel: {
        flexDirection: 'row',
    },
    colorHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
    },
    colorContainer: {
        borderBottomWidth: 1,
    },
    heading: {
        fontWeight: 600,
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 8
    },
    wrapper: {
        borderBottomWidth: 2
    }
})

export default styles