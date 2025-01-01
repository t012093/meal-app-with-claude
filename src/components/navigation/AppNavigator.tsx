import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "../../screens/HomeScreen";
import { CalendarScreen } from "../../screens/CalendarScreen";
import { ChatScreen } from "../../screens/ChatScreen";
import { ProfileScreen } from "../../screens/ProfileScreen";
import { BottomTabBar } from "./BottomTabBar";

const StackNavigator = stackNavigatorFactory();

const withBottomTab = (Component: React.ComponentType<any>, currentRoute: string) => {
    return function WrappedComponent(props: any) {
        return (
            <flexboxLayout flexDirection="column" height="100%">
                <flexboxLayout flexGrow={1} flexShrink={1}>
                    <Component {...props} />
                </flexboxLayout>
                <BottomTabBar
                    currentRoute={currentRoute} 
                    navigation={props.navigation}
                />
            </flexboxLayout>
        );
    };
};

export const AppNavigator = () => {
    const [currentRoute, setCurrentRoute] = React.useState<string>("Home");

    const WrappedHomeScreen = React.useMemo(() => withBottomTab(HomeScreen, currentRoute), [currentRoute]);
    const WrappedCalendarScreen = React.useMemo(() => withBottomTab(CalendarScreen, currentRoute), [currentRoute]);
    const WrappedChatScreen = React.useMemo(() => withBottomTab(ChatScreen, currentRoute), [currentRoute]);
    const WrappedProfileScreen = React.useMemo(() => withBottomTab(ProfileScreen, currentRoute), [currentRoute]);

    return (
        <BaseNavigationContainer>
            <StackNavigator.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#65adf1",
                    },
                    headerShown: true,
                }}
                screenListeners={{
                    focus: (e) => {
                        setCurrentRoute(e.target?.split("-")[0] as string);
                    }
                }}
            >
                <StackNavigator.Screen 
                    name="Home" 
                    component={WrappedHomeScreen}
                    options={{ title: "ホーム" }}
                />
                <StackNavigator.Screen 
                    name="Calendar" 
                    component={WrappedCalendarScreen}
                    options={{ title: "カレンダー" }}
                />
                <StackNavigator.Screen 
                    name="Chat" 
                    component={WrappedChatScreen}
                    options={{ title: "写真" }}
                />
                <StackNavigator.Screen 
                    name="Profile" 
                    component={WrappedProfileScreen}
                    options={{ title: "プロフィール" }}
                />
            </StackNavigator.Navigator>
        </BaseNavigationContainer>
    );
};