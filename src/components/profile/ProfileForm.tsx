import { Dialogs } from '@nativescript/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { UserProfile } from '../../types/UserProfile';
import { FormField } from './FormField';
import { NumberInput } from './NumberInput';
import { GenderSelector } from './GenderSelector';
import { ServingSizeSelector } from './ServingSizeSelector';

export function ProfileForm() {
    const [profile, setProfile] = React.useState<Partial<UserProfile>>({
        servingSize: 1
    });

    const handleSave = () => {
        if (!validateProfile()) {
            return;
        }
        // TODO: Save profile
        Dialogs.alert("Profile saved!");
    };

    const validateProfile = (): boolean => {
        if (!profile.age || profile.age < 1 || profile.age > 120) {
            Dialogs.alert("Please enter a valid age between 1 and 120");
            return false;
        }
        if (!profile.height || profile.height < 1 || profile.height > 300) {
            Dialogs.alert("Please enter a valid height between 1 and 300 cm");
            return false;
        }
        if (!profile.weight || profile.weight < 1 || profile.weight > 500) {
            Dialogs.alert("Please enter a valid weight between 1 and 500 kg");
            return false;
        }
        if (!profile.weeklyBudget || profile.weeklyBudget < 1) {
            Dialogs.alert("Please enter a valid weekly budget");
            return false;
        }
        if (!profile.gender) {
            Dialogs.alert("Please select your gender");
            return false;
        }
        return true;
    };

    return (
        <scrollView className="p-4">
            <stackLayout className="form">
                <label className="text-xl font-bold mb-4">Your Profile</label>
                
                <FormField label="Age">
                    <NumberInput
                        value={profile.age}
                        hint="Enter your age"
                        onValueChange={(value) => setProfile(prev => ({ ...prev, age: value }))}
                    />
                </FormField>

                <FormField label="Gender">
                    <GenderSelector
                        value={profile.gender}
                        onChange={(gender) => setProfile(prev => ({ ...prev, gender }))}
                    />
                </FormField>

                <FormField label="Height (cm)">
                    <NumberInput
                        value={profile.height}
                        hint="Enter your height"
                        onValueChange={(value) => setProfile(prev => ({ ...prev, height: value }))}
                    />
                </FormField>

                <FormField label="Weight (kg)">
                    <NumberInput
                        value={profile.weight}
                        hint="Enter your weight"
                        onValueChange={(value) => setProfile(prev => ({ ...prev, weight: value }))}
                    />
                </FormField>

                <FormField label="Weekly Budget (¥)">
                    <NumberInput
                        value={profile.weeklyBudget}
                        hint="Enter your weekly budget"
                        onValueChange={(value) => setProfile(prev => ({ ...prev, weeklyBudget: value }))}
                    />
                </FormField>

                <FormField label="Serving Size">
                    <ServingSizeSelector
                        value={profile.servingSize}
                        onChange={(value) => setProfile(prev => ({ ...prev, servingSize: value }))}
                    />
                </FormField>

                <button
                    className="btn btn-primary mt-4"
                    onTap={handleSave}
                >
                    Save Profile
                </button>
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    form: {
        padding: 16,
    }
});