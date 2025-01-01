import * as React from "react";
import { GridLayout } from "@nativescript/core";
import { NavigationContainer } from "@react-navigation/core";
import { MainStack } from "./MainStack";

export function AppContainer() {
    return (
        <NavigationContainer>
            <GridLayout rows="*, auto">
                <MainStack />
            </GridLayout>
        </NavigationContainer>
    );
}