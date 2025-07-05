import { useState } from "react";
import { ActivityIndicator, Button, Text, View } from "react-native";
import ColorDetails from "./ColorDetails";
import styles from "./colors.style";
import { useGetColorsQuery } from "./colorsSlice";

export default function Colors() {
    const { data: colors, error, isFetching } = useGetColorsQuery()
    const [selectedColorId, setSelectedColorId] = useState<number | null>(null)

    return (
        <View style={styles.wrapper}>
            <Text style={styles.heading}>API call for colors using RTK Query</Text>
            {error && <Text>Error while loading data</Text>}
            {isFetching && <ActivityIndicator size="large" />}
            {!colors && <Text>No data</Text>}
            {colors?.data.map(({ id, color, name }) => {
                const isSelected = selectedColorId === id
                return (
                    <View key={id} style={styles.colorContainer}>
                        <View style={styles.colorHeader}>
                            <View style={styles.colorLabel}>
                                <View style={[styles.colorDisplay, { backgroundColor: color, marginRight: 5 }]} />
                                <Text>{name}</Text>
                            </View>
                            <Button
                                title={isSelected ? 'Collapse' : 'Expand'}
                                onPress={() => setSelectedColorId(isSelected ? null : id)}
                            />
                        </View>
                        {isSelected && <ColorDetails id={selectedColorId} />}
                    </View>
                )
            })}
        </View>
    )
}

// api response for reference
// const apiResponse = {
//     "page": 1,
//     "per_page": 12,
//     "total": 12,
//     "total_pages": 1,
//     "data": [
//         {
//             "id": 1,
//             "name": "cerulean",
//             "year": 2000,
//             "color": "#98B2D1",
//             "pantone_value": "15-4020"
//         },
//         {
//             "id": 2,
//             "name": "fuchsia rose",
//             "year": 2001,
//             "color": "#C74375",
//             "pantone_value": "17-2031"
//         },
//         {
//             "id": 3,
//             "name": "true red",
//             "year": 2002,
//             "color": "#BF1932",
//             "pantone_value": "19-1664"
//         },
//         {
//             "id": 4,
//             "name": "aqua sky",
//             "year": 2003,
//             "color": "#7BC4C4",
//             "pantone_value": "14-4811"
//         },
//         {
//             "id": 5,
//             "name": "tigerlily",
//             "year": 2004,
//             "color": "#E2583E",
//             "pantone_value": "17-1456"
//         },
//         {
//             "id": 6,
//             "name": "blue turquoise",
//             "year": 2005,
//             "color": "#53B0AE",
//             "pantone_value": "15-5217"
//         },
//         {
//             "id": 7,
//             "name": "sand dollar",
//             "year": 2006,
//             "color": "#DECDBE",
//             "pantone_value": "13-1106"
//         },
//         {
//             "id": 8,
//             "name": "chili pepper",
//             "year": 2007,
//             "color": "#9B1B30",
//             "pantone_value": "19-1557"
//         },
//         {
//             "id": 9,
//             "name": "blue iris",
//             "year": 2008,
//             "color": "#5A5B9F",
//             "pantone_value": "18-3943"
//         },
//         {
//             "id": 10,
//             "name": "mimosa",
//             "year": 2009,
//             "color": "#F0C05A",
//             "pantone_value": "14-0848"
//         },
//         {
//             "id": 11,
//             "name": "turquoise",
//             "year": 2010,
//             "color": "#45B5AA",
//             "pantone_value": "15-5519"
//         },
//         {
//             "id": 12,
//             "name": "honeysuckle",
//             "year": 2011,
//             "color": "#D94F70",
//             "pantone_value": "18-2120"
//         }
//     ],
//     "support": {
//         "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
//         "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."
//     }
// }