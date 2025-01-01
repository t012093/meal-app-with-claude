import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface FormFieldProps {
    label: string;
    children: React.ReactNode;
}

export function FormField({ label, children }: FormFieldProps) {
    return (
        <>
            <label className="text-sm text-gray-600 mt-2">{label}</label>
            {children}
        </>
    );
}