import {Text, View} from "react-native";
import {Link} from "expo-router";

function Index(){
    return(
        <View>
            <Text>Hello World!</Text>

            <Link href='/customer'>Goto Customer</Link>
        </View>
    );
}

export default Index;