import React, { useState, useMemo, useEffect } from "react";
import { ThemeModeContext } from "./components/ThemeMode/ThemeContext";
import RouteApp from "./components/RouteApp";
import CssBaseline from "@mui/material/CssBaseline";
import "./components/i18n";

import {
    StyledEngineProvider,
    createTheme,
    ThemeProvider,
} from "@mui/material/styles";

function App() {
    const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    useEffect(() => {
        localStorage.setItem("mode", mode);
    }, [mode]);

    return (
        <StyledEngineProvider value={colorMode} injectFirst>
            <ThemeModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <RouteApp />
                </ThemeProvider>
            </ThemeModeContext.Provider>
        </StyledEngineProvider>
    );
}

export default App;
