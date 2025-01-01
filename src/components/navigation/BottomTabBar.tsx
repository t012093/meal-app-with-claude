import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";

interface BottomTabBarProps {
    currentRoute: string;
    navigation: FrameNavigationProp<any, any> | undefined;
}

export function BottomTabBar({ currentRoute, navigation }: BottomTabBarProps) {
    return (
        <flexboxLayout flexDirection="row" height="65" className="bg-white border-t border-gray-200">
            <flexboxLayout 
                flexGrow={1} 
                flexDirection="column" 
                className={`py-2 ${currentRoute === 'Home' ? 'bg-blue-50' : ''}`}
                justifyContent="center"
                onTap={() => navigation?.navigate('Home')}
            >
                <label className="text-center text-xl mb-1">⌂</label>
                <label className={`text-center text-xs ${currentRoute === 'Home' ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                    ホーム
                </label>
            </flexboxLayout>

            <flexboxLayout 
                flexGrow={1}
                flexDirection="column"
                className={`py-2 ${currentRoute === 'Calendar' ? 'bg-indigo-50' : ''}`}
                justifyContent="center"
                onTap={() => navigation?.navigate('Calendar')}
            >
                <label className="text-center text-xl mb-1">◈</label>
                <label className={`text-center text-xs ${currentRoute === 'Calendar' ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>
                    カレンダー
                </label>
            </flexboxLayout>

            <flexboxLayout 
                flexGrow={1}
                flexDirection="column"
                className={`py-2 ${currentRoute === 'Chat' ? 'bg-green-50' : ''}`}
                justifyContent="center"
                onTap={() => navigation?.navigate('Chat')}
            >
                <label className="text-center text-xl mb-1">◉</label>
                <label className={`text-center text-xs ${currentRoute === 'Chat' ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                    写真
                </label>
            </flexboxLayout>

            <flexboxLayout 
                flexGrow={1}
                flexDirection="column"
                className={`py-2 ${currentRoute === 'Profile' ? 'bg-purple-50' : ''}`}
                justifyContent="center"
                onTap={() => navigation?.navigate('Profile')}
            >
                <label className="text-center text-xl mb-1">○</label>
                <label className={`text-center text-xs ${currentRoute === 'Profile' ? 'text-purple-600 font-medium' : 'text-gray-500'}`}>
                    プロフィール
                </label>
            </flexboxLayout>
        </flexboxLayout>
    );
}