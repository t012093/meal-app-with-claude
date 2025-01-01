import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../../screens/HomeScreen";
import { CalendarScreen } from "../../screens/CalendarScreen";
import { ChatScreen } from "../../screens/ChatScreen";
import { ProfileScreen } from "../../screens/ProfileScreen";
import { BottomTabBar } from "./BottomTabBar";

const Stack = createStackNavigator();

export function MainStack() {
    const [currentRoute, setCurrentRoute] = React.useState("Home");

    return (
        <>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#65adf1",
                    },
                    headerTintColor: "#fff"
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: "ホーム" }} />
                <Stack.Screen name="Calendar" component={CalendarScreen} options={{ title: "カレンダー" }} />
                <Stack.Screen name="Chat" component={ChatScreen} options={{ title: "写真" }} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "プロフィール" }} />
            </Stack.Navigator>
            <gridLayout row={1} height="65">
                <BottomTabBar currentRoute={currentRoute} />
            </gridLayout>
        </>
    );
}