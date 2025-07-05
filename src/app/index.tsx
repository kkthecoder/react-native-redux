import Colors from "@/features/colors/Colors";
import Message from "@/features/message/Message";
import Users from "@/features/users/Users";
import { ScrollView, View } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
        }}
      >
        <Message />
        <Users />
        <Colors />
      </View>
    </ScrollView>
  );
}
