import * as React from "react";
import { Meal } from "../../types/MealPlan";

interface MealCardProps {
    meal: Meal;
    onTap?: () => void;
}

export function MealCard({ meal, onTap }: MealCardProps) {
    return (
        <gridLayout
            className="bg-white rounded-lg shadow-sm p-4 m-2"
            rows="auto, auto, auto"
            onTap={onTap}
        >
            <stackLayout row={0} className="mb-2">
                <label className="text-lg font-bold">{meal.name}</label>
                <label className="text-sm text-gray-500">
                    {meal.calories}kcal • ¥{meal.cost}
                </label>
            </stackLayout>
            
            <gridLayout row={1} columns="*, *, *" className="text-center mb-2">
                <stackLayout col={0}>
                    <label className="text-sm">タンパク質</label>
                    <label className="text-sm font-bold">{meal.protein}g</label>
                </stackLayout>
                <stackLayout col={1}>
                    <label className="text-sm">炭水化物</label>
                    <label className="text-sm font-bold">{meal.carbs}g</label>
                </stackLayout>
                <stackLayout col={2}>
                    <label className="text-sm">脂質</label>
                    <label className="text-sm font-bold">{meal.fat}g</label>
                </stackLayout>
            </gridLayout>

            <label row={2} className="text-sm text-gray-600">
                {meal.ingredients.slice(0, 3).join(", ")}
                {meal.ingredients.length > 3 ? "..." : ""}
            </label>
        </gridLayout>
    );
}