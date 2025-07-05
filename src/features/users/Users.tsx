import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from 'react-native';
import styles from './users.styles';
import { fetchUsers, selectAllUsers } from './usersSlice';

export default function Users() {
    const dispatch = useAppDispatch()
    // const { users, loading } = useAppSelector(state => state.users)
    const { loading } = useAppSelector(state => state.users)
    const users = useAppSelector(selectAllUsers)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (loading) {
        return <ActivityIndicator />
    }

    return (
        <View style={styles.wrapper}>
            <Text style={styles.heading}>API call for users using Async Thunk and also using Entity Adaptor. Implementation without entity adaptor is commented for reference.</Text>
            {users.map(user => (
                <View key={user.id} style={styles.userItem}>
                    <Text>{user.first_name} {user.last_name}</Text>
                    <Text>{user.email}</Text>
                </View>
            ))}
        </View>
    )
}

// API response for reference
// const apiResponse = [
//     {
//         "id": 1,
//         "email": "george.bluth@reqres.in",
//         "first_name": "George",
//         "last_name": "Bluth",
//         "avatar": "https://reqres.in/img/faces/1-image.jpg"
//     },
//     {
//         "id": 2,
//         "email": "janet.weaver@reqres.in",
//         "first_name": "Janet",
//         "last_name": "Weaver",
//         "avatar": "https://reqres.in/img/faces/2-image.jpg"
//     },
//     {
//         "id": 3,
//         "email": "emma.wong@reqres.in",
//         "first_name": "Emma",
//         "last_name": "Wong",
//         "avatar": "https://reqres.in/img/faces/3-image.jpg"
//     },
//     {
//         "id": 4,
//         "email": "eve.holt@reqres.in",
//         "first_name": "Eve",
//         "last_name": "Holt",
//         "avatar": "https://reqres.in/img/faces/4-image.jpg"
//     },
//     {
//         "id": 5,
//         "email": "charles.morris@reqres.in",
//         "first_name": "Charles",
//         "last_name": "Morris",
//         "avatar": "https://reqres.in/img/faces/5-image.jpg"
//     },
//     {
//         "id": 6,
//         "email": "tracey.ramos@reqres.in",
//         "first_name": "Tracey",
//         "last_name": "Ramos",
//         "avatar": "https://reqres.in/img/faces/6-image.jpg"
//     }
// ]