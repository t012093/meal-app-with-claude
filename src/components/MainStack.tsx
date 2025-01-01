import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { ProfileForm } from "./profile/ProfileForm";
import { MealPlanScreen } from "./screens/MealPlanScreen";
import { ChatScreen } from "./screens/ChatScreen";
import { BottomTabBar } from "./navigation/BottomTabBar";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => {
    const [currentRoute, setCurrentRoute] = React.useState<keyof MainStackParamList>("Profile");

    return (
        <BaseNavigationContainer>
            <gridLayout rows="*, auto">
                <StackNavigator.Navigator
                    row={0}
                    initialRouteName="Profile"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: "#65adf1",
                        },
                        headerShown: true,
                    }}
                    screenListeners={{
                        focus: (e) => {
                            setCurrentRoute(e.target?.split("-")[0] as keyof MainStackParamList);
                        }
                    }}
                >
                    <StackNavigator.Screen
                        name="Profile"
                        component={ProfileForm}
                        options={{
                            title: "プロフィール設定"
                        }}
                    />
                    <StackNavigator.Screen
                        name="MealPlan"
                        component={MealPlanScreen}
                        options={{
                            title: "献立プラン"
                        }}
                    />
                    <StackNavigator.Screen
                        name="Chat"
                        component={ChatScreen}
                        options={{
                            title: "チャット"
                        }}
                    />
                </StackNavigator.Navigator>
                <BottomTabBar
                    row={1}
                    currentRoute={currentRoute}
                    navigation={undefined} // This will be injected by the navigation container
                />
            </gridLayout>
        </BaseNavigationContainer>
    );
};