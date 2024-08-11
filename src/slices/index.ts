import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface appState {
    isGenerating: boolean
    generatedPrompt: string
    generatedImageURL: string,
    imageUploaded: string
}

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        isGenerating: false,
        imageUploaded: '',
        generatedPrompt: '',
        generatedImageURL: '',
    },
    reducers: {
        setImageUploaded: (state: appState, action: PayloadAction<string>) => {
            state.imageUploaded = action.payload
        },
        setIsGenerating: (state: appState, action: PayloadAction<boolean>) => {
            state.isGenerating = action.payload
        },
        setGeneratedPrompt: (state: appState, action: PayloadAction<string>) => {
            state.generatedPrompt = action.payload
        },
        setGeneratedImageURL: (state: appState, action: PayloadAction<string>) => {
            state.generatedImageURL = action.payload
        },
    },
})

export const {setIsGenerating, setGeneratedPrompt, setGeneratedImageURL, setImageUploaded} =
    appSlice.actions
