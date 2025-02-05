import {Stack} from "expo-router";

function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerTitle:'Dashboard' }}/>
            <Stack.Screen name='customer' />
        </Stack>
    );
}
export default RootLayout;