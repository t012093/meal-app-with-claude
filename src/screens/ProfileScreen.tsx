import * as React from "react";

export function ProfileScreen() {
    return (
        <flexboxLayout flexDirection="column" flexGrow={1} className="bg-gray-50">
            <scrollView>
                <stackLayout className="p-4">
                    {/* Basic Info */}
                    <stackLayout className="bg-white rounded-xl mb-4">
                        <stackLayout className="p-4">
                            <label className="text-lg font-bold text-gray-900">プロフィール設定</label>
                            <label className="text-sm text-gray-500 mt-1">基本情報</label>
                        </stackLayout>
                        
                        <stackLayout className="px-4 pb-4">
                            <stackLayout className="mb-4">
                                <label className="text-gray-600 mb-2">年齢</label>
                                <textField className="border rounded p-2" hint="年齢を入力" />
                            </stackLayout>
                            
                            <stackLayout className="mb-4">
                                <label className="text-gray-600 mb-2">性別</label>
                                <textField className="border rounded p-2" hint="性別を入力" />
                            </stackLayout>
                            
                            <stackLayout className="mb-4">
                                <label className="text-gray-600 mb-2">身長 (cm)</label>
                                <textField className="border rounded p-2" hint="身長を入力" keyboardType="number" />
                            </stackLayout>
                            
                            <stackLayout className="mb-4">
                                <label className="text-gray-600 mb-2">体重 (kg)</label>
                                <textField className="border rounded p-2" hint="体重を入力" keyboardType="number" />
                            </stackLayout>
                        </stackLayout>
                    </stackLayout>

                    {/* Food Preferences */}
                    <stackLayout className="bg-white rounded-xl mb-4">
                        <stackLayout className="p-4">
                            <label className="text-lg font-bold text-gray-900">食事の好み</label>
                        </stackLayout>

                        <stackLayout className="px-4 pb-4">
                            <stackLayout className="mb-4">
                                <label className="text-gray-600 mb-2">好きな食材</label>
                                <textField className="border rounded p-2" hint="好きな食材を入力" />
                            </stackLayout>
                            
                            <stackLayout className="mb-4">
                                <label className="text-gray-600 mb-2">苦手な食材</label>
                                <textField className="border rounded p-2" hint="苦手な食材を入力" />
                            </stackLayout>
                            
                            <stackLayout className="mb-4">
                                <label className="text-gray-600 mb-2">アレルギー</label>
                                <textField className="border rounded p-2" hint="アレルギーがある食材を入力" />
                            </stackLayout>
                        </stackLayout>
                    </stackLayout>

                    {/* Goals Section */}
                    <stackLayout className="bg-white rounded-xl">
                        <stackLayout className="p-4">
                            <label className="text-lg font-bold text-gray-900">目標設定</label>
                        </stackLayout>

                        <stackLayout className="px-4 pb-4">
                            <stackLayout className="mb-4">
                                <label className="text-gray-600 mb-2">健康目標</label>
                                <textField className="border rounded p-2" hint="目標を入力" />
                            </stackLayout>
                            
                            <stackLayout className="mb-4">
                                <label className="text-gray-600 mb-2">週間予算</label>
                                <textField className="border rounded p-2" hint="予算を入力" keyboardType="number" />
                            </stackLayout>
                            
                            <button className="bg-blue-500 text-white py-3 rounded-full">
                                保存する
                            </button>
                        </stackLayout>
                    </stackLayout>
                </stackLayout>
            </scrollView>
        </flexboxLayout>
    );
}