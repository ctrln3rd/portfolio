export const changetheme = (theme)=>({
    type:'CHANGE_THEME',
    payload: theme
})

export const devicetheme = ()=>({
    type:'DEVICE_THEME'
})

export const setnoticestatus = (notice)=>({
    type:'SET_NOTICE_STATUS',
    payload: notice
})
export const setnoticetext = (notice)=>({
    type:'SET_NOTICE_TEXT',
    payload: notice
})


