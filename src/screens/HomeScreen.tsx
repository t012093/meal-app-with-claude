import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function HomeScreen() {
    return (
        <scrollView className="bg-gray-50">
            <stackLayout className="p-4">
                {/* Today's Summary Card */}
                <stackLayout className="pb-4">
                    <label className="text-2xl font-semibold text-gray-900">今日の献立</label>
                    <label className="text-sm text-gray-500 mt-1">2024年12月3日（火）</label>
                </stackLayout>

                {/* Progress Card */}
                <stackLayout className="bg-white rounded-xl p-4 mb-4">
                    <gridLayout rows="auto, auto" columns="*, *" className="mb-3">
                        <label row={0} col={0} className="text-3xl font-bold text-blue-500">1,350</label>
                        <label row={0} col={1} className="text-3xl font-bold text-gray-400 text-right">1,800</label>
                        <label row={1} col={0} className="text-xs text-gray-500">摂取カロリー</label>
                        <label row={1} col={1} className="text-xs text-gray-500 text-right">目標カロリー</label>
                    </gridLayout>
                    
                    {/* Progress Bar */}
                    <stackLayout className="h-2 bg-gray-100 rounded-full">
                        <stackLayout className="h-2 bg-blue-500 rounded-full" width="75%"/>
                    </stackLayout>
                </stackLayout>

                {/* Breakfast Section */}
                <stackLayout className="bg-white rounded-xl p-4 mb-4">
                    <gridLayout rows="auto" columns="auto, *" className="mb-3">
                        <label col={0} className="text-lg font-semibold text-blue-500">朝食</label>
                        <label col={1} className="text-sm text-gray-500 text-right">08:00</label>
                    </gridLayout>
                    
                    <stackLayout className="border-l-2 border-blue-100 pl-3 mb-3">
                        <label className="text-base font-medium">和風アボカドトースト</label>
                        <label className="text-sm text-gray-600">全粒粉パン, アボカド, 温泉卵</label>
                        <label className="text-xs text-gray-500 mt-1">320 kcal</label>
                    </stackLayout>
                    
                    <flexboxLayout className="justify-start">
                        <label className="text-xs text-blue-600 bg-blue-50 py-1 px-2 rounded-full mr-2">タンパク質 15g</label>
                        <label className="text-xs text-blue-600 bg-blue-50 py-1 px-2 rounded-full mr-2">脂質 12g</label>
                        <label className="text-xs text-blue-600 bg-blue-50 py-1 px-2 rounded-full">炭水化物 45g</label>
                    </flexboxLayout>
                </stackLayout>

                {/* Lunch Section */}
                <stackLayout className="bg-white rounded-xl p-4 mb-4">
                    <gridLayout rows="auto" columns="auto, *" className="mb-3">
                        <label col={0} className="text-lg font-semibold text-green-500">昼食</label>
                        <label col={1} className="text-sm text-gray-500 text-right">12:30</label>
                    </gridLayout>
                    
                    <stackLayout className="border-l-2 border-green-100 pl-3 mb-3">
                        <label className="text-base font-medium">チキンとアボカドのサラダボウル</label>
                        <label className="text-sm text-gray-600">グリルチキン, アボカド, キヌア, 季節野菜</label>
                        <label className="text-xs text-gray-500 mt-1">450 kcal</label>
                    </stackLayout>
                    
                    <flexboxLayout className="justify-start">
                        <label className="text-xs text-green-600 bg-green-50 py-1 px-2 rounded-full mr-2">タンパク質 28g</label>
                        <label className="text-xs text-green-600 bg-green-50 py-1 px-2 rounded-full mr-2">脂質 22g</label>
                        <label className="text-xs text-green-600 bg-green-50 py-1 px-2 rounded-full">炭水化物 35g</label>
                    </flexboxLayout>
                </stackLayout>

                {/* Dinner Section */}
                <stackLayout className="bg-white rounded-xl p-4">
                    <gridLayout rows="auto" columns="auto, *" className="mb-3">
                        <label col={0} className="text-lg font-semibold text-purple-500">夕食</label>
                        <label col={1} className="text-sm text-gray-500 text-right">19:00</label>
                    </gridLayout>
                    
                    <stackLayout className="border-l-2 border-purple-100 pl-3 mb-3">
                        <label className="text-base font-medium">鮭の西京焼き定食</label>
                        <label className="text-sm text-gray-600">玄米, 味噌汁, ほうれん草のお浸し, 切り干し大根</label>
                        <label className="text-xs text-gray-500 mt-1">580 kcal</label>
                    </stackLayout>
                    
                    <flexboxLayout className="justify-start">
                        <label className="text-xs text-purple-600 bg-purple-50 py-1 px-2 rounded-full mr-2">タンパク質 32g</label>
                        <label className="text-xs text-purple-600 bg-purple-50 py-1 px-2 rounded-full mr-2">脂質 18g</label>
                        <label className="text-xs text-purple-600 bg-purple-50 py-1 px-2 rounded-full">炭水化物 78g</label>
                    </flexboxLayout>
                </stackLayout>
            </stackLayout>
        </scrollView>
    );
}