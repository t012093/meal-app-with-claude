export interface Meal {
    id: string;
    name: string;
    type: 'breakfast' | 'lunch' | 'dinner';
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    ingredients: string[];
    instructions: string[];
    cost: number;
}

export interface DailyMealPlan {
    date: string;
    breakfast?: Meal;
    lunch?: Meal;
    dinner?: Meal;
}

export interface WeeklyMealPlan {
    weekStartDate: string;
    days: DailyMealPlan[];
    totalCost: number;
}