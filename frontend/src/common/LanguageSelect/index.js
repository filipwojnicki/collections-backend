import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";

export default function LanguageSelect() {
    const [lang, setLang] = useState(localStorage.getItem("lang") || "pl");
    const { t, i18n } = useTranslation();

    const handleChange = (event) => {
        setLang(event.target.value);
    };

    useEffect(() => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    }, [lang]);

    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">lang.</InputLabel>
                <Select 
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Lang"
                    value={lang}
                    onChange={handleChange}
                >
                    <MenuItem value="pl">PL</MenuItem>
                    <MenuItem value="en">EN</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
