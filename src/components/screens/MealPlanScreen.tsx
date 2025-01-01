import * as React from "react";
import { Dialogs } from "@nativescript/core";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../types/NavigationParamList";
import { WeeklyMealPlan, DailyMealPlan, Meal } from "../../types/MealPlan";
import { DaySelector } from "../meal-plan/DaySelector";
import { DailyMealList } from "../meal-plan/DailyMealList";

// サンプルデータ
const sampleMeal: Meal = {
    id: "1",
    name: "鮭の塩焼きと味噌汁",
    type: "breakfast",
    calories: 450,
    protein: 28,
    carbs: 45,
    fat: 15,
    ingredients: ["鮭", "米", "味噌", "わかめ", "豆腐"],
    instructions: ["米を炊く", "鮭を焼く", "味噌汁を作る"],
    cost: 500
};

const sampleDailyPlan: DailyMealPlan = {
    date: new Date().toISOString(),
    breakfast: { ...sampleMeal, type: "breakfast" },
    lunch: { ...sampleMeal, name: "チキン南蛮定食", type: "lunch" },
    dinner: { ...sampleMeal, name: "牛丼", type: "dinner" }
};

type MealPlanScreenProps = {
    route: RouteProp<MainStackParamList, "MealPlan">;
    navigation: FrameNavigationProp<MainStackParamList, "MealPlan">;
};

export function MealPlanScreen({ navigation }: MealPlanScreenProps) {
    const [selectedDay, setSelectedDay] = React.useState(0);

    const handleMealTap = (mealType: 'breakfast' | 'lunch' | 'dinner') => {
        Dialogs.alert({
            title: "レシピの詳細",
            message: "ここに調理手順や材料の詳細を表示します。",
            okButtonText: "閉じる"
        });
    };

    return (
        <scrollView>
            <stackLayout>
                <DaySelector
                    selectedDay={selectedDay}
                    onDayChange={setSelectedDay}
                />
                
                <gridLayout columns="auto, *" className="p-2">
                    <label col={0} className="text-xl font-bold">今週の献立</label>
                    <label col={1} className="text-right text-green-600">
                        残り予算: ¥3,500
                    </label>
                </gridLayout>

                <DailyMealList
                    mealPlan={sampleDailyPlan}
                    onMealTap={handleMealTap}
                />
            </stackLayout>
        </scrollView>
    );
}