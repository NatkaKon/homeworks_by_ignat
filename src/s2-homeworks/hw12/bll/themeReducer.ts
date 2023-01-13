const initState = {
    themeId: 1,
}

export const themeReducer = (state: ThemeType = initState, action: changeThemeIdType): ThemeType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id}) // fix any


//types
type ThemeType = {
    themeId: number
}
type changeThemeIdType = ReturnType<typeof changeThemeId>