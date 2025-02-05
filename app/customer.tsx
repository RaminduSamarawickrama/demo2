import {Text, View} from "react-native";
import {Link} from "expo-router";

function Customer() {
    return (
        <View>
            <Text>Customer</Text>
            <Link href='/'>Goto Dashboard</Link>
        </View>
    );
}

export default Customer;