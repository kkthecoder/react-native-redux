import { ActivityIndicator, Text, View } from "react-native";
import styles from './colorDetails.styles';
import { useGetColorByIdQuery } from "./colorsSlice";

interface ColorDetailsProps {
    id: number
}

export default function ColorDetails(props: ColorDetailsProps) {
    const { data: color, isFetching, error } = useGetColorByIdQuery(props.id)

    if (isFetching) {
        return <ActivityIndicator size="large" />
    }

    if (error) {
        return <Text>Error while loading data</Text>
    }

    if (!color) {
        return <Text>No data</Text>
    }

    const { name, id, year, color: hex, pantone_value } = color.data;

    const renderDetails = (label: string, value: string | number) => (
        <View style={styles.detailsContainer}>
            <Text>{label}: </Text>
            <Text>{value}</Text>
        </View>
    )

    return (
        <View>
            {renderDetails('ID', id)}
            {renderDetails('Year', year)}
            {renderDetails('Name', name)}
            {renderDetails('Hex Code', hex)}
            {renderDetails('Pantone Value', pantone_value)}
        </View>
    )
}

// api response for reference
// const apiResponse = {
//     "data": {
//         "id": 1,
//         "name": "cerulean",
//         "year": 2000,
//         "color": "#98B2D1",
//         "pantone_value": "15-4020"
//     },
//     "support": {
//         "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
//         "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."
//     }
// }