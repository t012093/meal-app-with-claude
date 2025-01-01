import * as React from "react";

interface NumberInputProps {
    value?: number;
    hint: string;
    onValueChange: (value: number) => void;
}

export function NumberInput({ value, hint, onValueChange }: NumberInputProps) {
    return (
        <textField
            className="input p-2 border rounded"
            keyboardType="number"
            hint={hint}
            text={value?.toString()}
            onTextChange={(e) => {
                const num = parseInt(e.value, 10);
                if (!isNaN(num)) {
                    onValueChange(num);
                }
            }}
        />
    );
}