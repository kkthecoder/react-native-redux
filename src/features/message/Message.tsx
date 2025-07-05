import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Button, Text, View } from 'react-native';
import styles from './message.styles';
import { setMessage } from "./messageSlice";

export default function Message() {
    const dispatch = useAppDispatch()
    const { message } = useAppSelector(state => state.message)

    const handlePress = () => {
        dispatch(setMessage('Message from component'))
    }
    return (
        <View style={styles.wrapper}>
            <Text style={styles.heading}>Basic example to use redux toolkit and set data in store</Text>
            <View style={styles.container}>
                <Text style={styles.text}>{message}</Text>
                <Button title="Set message" onPress={handlePress} />
            </View>
        </View>
    )
}
