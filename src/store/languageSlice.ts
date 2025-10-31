import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
    locale: string;
}

const initialState: LanguageState = {
    locale: localStorage.getItem("locale") || "uk", 
}

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLocale: (state, action: PayloadAction<string>) => {
            state.locale = action.payload;
            localStorage.setItem("locale", action.payload); 
        }
    }
})

export const { setLocale } = languageSlice.actions;
export default languageSlice.reducer;