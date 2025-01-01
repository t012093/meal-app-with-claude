export interface UserProfile {
  age: number;
  gender: 'male' | 'female' | 'other';
  height: number;
  weight: number;
  dietaryRestrictions: string[];
  preferences: {
    likes: string[];
    dislikes: string[];
  };
  healthGoal: 'weightLoss' | 'weightGain' | 'maintenance';
  weeklyBudget: number;
  servingSize: number;
}