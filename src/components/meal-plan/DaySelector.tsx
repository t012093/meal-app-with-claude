import * as React from "react";
import { SegmentedBarItem } from "@nativescript/core";

interface DaySelectorProps {
    selectedDay: number;
    onDayChange: (day: number) => void;
}

export function DaySelector({ selectedDay, onDayChange }: DaySelectorProps) {
    const items = React.useMemo(() => {
        return ['月', '火', '水', '木', '金', '土', '日'].map(day => {
            const item = new SegmentedBarItem();
            item.title = day;
            return item;
        });
    }, []);

    return (
        <segmentedBar
            items={items}
            selectedIndex={selectedDay}
            onSelectedIndexChange={(e) => onDayChange(e.value)}
            className="m-2"
        />
    );
}