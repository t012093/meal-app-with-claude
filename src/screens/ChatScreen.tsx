import * as React from "react";

export function ChatScreen() {
    const [analyzing, setAnalyzing] = React.useState(false);
    const [imageSource, setImageSource] = React.useState<string | null>(null);
    const [analysisResult, setAnalysisResult] = React.useState<any>(null);

    const handleTakePhoto = () => {
        console.log("Take photo");
    };

    return (
        <flexboxLayout flexDirection="column" flexGrow={1} className="bg-gray-50">
            <scrollView>
                <stackLayout className="p-4">
                    {/* Header */}
                    <stackLayout className="mb-6">
                        <label className="text-2xl font-semibold text-gray-900">食事を記録</label>
                        <label className="text-sm text-gray-500 mt-1">
                            写真を撮影して自動で食事内容を解析します
                        </label>
                    </stackLayout>

                    {/* Camera Button */}
                    <stackLayout className="bg-white rounded-xl p-6 mb-4 items-center">
                        {!imageSource ? (
                            <button 
                                className="bg-blue-500 text-white font-medium py-3 px-6 rounded-full"
                                onTap={handleTakePhoto}
                            >
                                写真を撮影
                            </button>
                        ) : null}

                        {/* Image Preview */}
                        {imageSource && (
                            <stackLayout className="w-full">
                                <image src={imageSource} className="w-full h-64 rounded-lg mb-4" stretch="aspectFill" />
                                <button 
                                    className="bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full mb-4"
                                    onTap={() => setImageSource(null)}
                                >
                                    撮り直す
                                </button>
                            </stackLayout>
                        )}
                    </stackLayout>

                    {/* Analysis Status */}
                    {analyzing && (
                        <stackLayout className="bg-white rounded-xl p-6 mb-4">
                            <label className="text-center text-gray-600 mb-2">解析中...</label>
                            <activityIndicator busy={true} className="text-blue-500" />
                        </stackLayout>
                    )}

                    {/* Results */}
                    {analysisResult && (
                        <stackLayout className="bg-white rounded-xl p-6 mb-4">
                            <label className="text-lg font-semibold text-gray-900 mb-4">解析結果</label>
                            
                            <stackLayout className="mb-4">
                                <label className="text-sm text-gray-500">料理名</label>
                                <label className="text-base text-gray-900">{analysisResult.dishName}</label>
                            </stackLayout>

                            <stackLayout className="mb-4">
                                <label className="text-sm text-gray-500">推定カロリー</label>
                                <label className="text-base text-gray-900">{analysisResult.calories} kcal</label>
                            </stackLayout>

                            <label className="text-sm text-gray-500 mb-2">栄養素</label>
                            <gridLayout rows="auto" columns="*, *, *" className="mb-4">
                                <stackLayout col={0} className="text-center bg-blue-50 p-2 rounded-lg mr-2">
                                    <label className="text-sm text-blue-600">タンパク質</label>
                                    <label className="text-xs text-gray-600">{analysisResult.protein}g</label>
                                </stackLayout>
                                <stackLayout col={1} className="text-center bg-green-50 p-2 rounded-lg mr-2">
                                    <label className="text-sm text-green-600">脂質</label>
                                    <label className="text-xs text-gray-600">{analysisResult.fat}g</label>
                                </stackLayout>
                                <stackLayout col={2} className="text-center bg-purple-50 p-2 rounded-lg">
                                    <label className="text-sm text-purple-600">炭水化物</label>
                                    <label className="text-xs text-gray-600">{analysisResult.carbs}g</label>
                                </stackLayout>
                            </gridLayout>

                            <button 
                                className="bg-blue-500 text-white font-medium py-3 px-6 rounded-full w-full"
                                onTap={() => console.log("Save to database")}
                            >
                                記録を保存
                            </button>
                        </stackLayout>
                    )}
                </stackLayout>
            </scrollView>
        </flexboxLayout>
    );
}