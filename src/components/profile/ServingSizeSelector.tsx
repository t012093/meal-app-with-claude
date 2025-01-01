import * as React from "react";

interface ServingSizeSelectorProps {
    value: number;
    onChange: (value: number) => void;
}

export function ServingSizeSelector({ value, onChange }: ServingSizeSelectorProps) {
    return (
        <>
            <slider
                value={value}
                minValue={1}
                maxValue={10}
                onValueChange={(e) => onChange(Math.round(e.value))}
            />
            <label className="text-sm text-center">
                {value} {value === 1 ? 'person' : 'people'}
            </label>
        </>
    );
}