import * as React from "react";
import { DailyMealPlan } from "../../types/MealPlan";
import { MealCard } from "./MealCard";

interface DailyMealListProps {
    mealPlan: DailyMealPlan;
    onMealTap?: (mealType: 'breakfast' | 'lunch' | 'dinner') => void;
}

export function DailyMealList({ mealPlan, onMealTap }: DailyMealListProps) {
    return (
        <stackLayout>
            {mealPlan.breakfast && (
                <>
                    <label className="text-md font-bold ml-2 mt-4">朝食</label>
                    <MealCard
                        meal={mealPlan.breakfast}
                        onTap={() => onMealTap?.('breakfast')}
                    />
                </>
            )}
            
            {mealPlan.lunch && (
                <>
                    <label className="text-md font-bold ml-2 mt-4">昼食</label>
                    <MealCard
                        meal={mealPlan.lunch}
                        onTap={() => onMealTap?.('lunch')}
                    />
                </>
            )}
            
            {mealPlan.dinner && (
                <>
                    <label className="text-md font-bold ml-2 mt-4">夕食</label>
                    <MealCard
                        meal={mealPlan.dinner}
                        onTap={() => onMealTap?.('dinner')}
                    />
                </>
            )}
        </stackLayout>
    );
}