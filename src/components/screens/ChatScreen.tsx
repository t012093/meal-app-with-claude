import * as React from "react";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../types/NavigationParamList";

type ChatScreenProps = {
    route: RouteProp<MainStackParamList, "Chat">;
    navigation: FrameNavigationProp<MainStackParamList, "Chat">;
};

export function ChatScreen({ navigation }: ChatScreenProps) {
    return (
        <scrollView>
            <stackLayout className="p-4">
                <label className="text-xl font-bold mb-4">チャット</label>
                <label className="text-gray-600">
                    AIアシスタントとチャットして、献立や健康についての相談ができます。
                </label>
            </stackLayout>
        </scrollView>
    );
}