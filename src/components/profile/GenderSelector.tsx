import * as React from "react";
import { SegmentedBarItem } from "@nativescript/core";

interface GenderSelectorProps {
    value?: 'male' | 'female' | 'other';
    onChange: (gender: 'male' | 'female' | 'other') => void;
}

export function GenderSelector({ value, onChange }: GenderSelectorProps) {
    const items = React.useMemo(() => {
        return [
            { title: 'Male' },
            { title: 'Female' },
            { title: 'Other' }
        ].map(item => {
            const segmentedBarItem = new SegmentedBarItem();
            segmentedBarItem.title = item.title;
            return segmentedBarItem;
        });
    }, []);

    const selectedIndex = value === 'male' ? 0 : value === 'female' ? 1 : value === 'other' ? 2 : 0;

    return (
        <segmentedBar
            items={items}
            selectedIndex={selectedIndex}
            onSelectedIndexChange={(e) => {
                const genders = ['male', 'female', 'other'] as const;
                onChange(genders[e.value]);
            }}
        />
    );
}