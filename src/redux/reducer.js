const initialNotice = {
  status: false,
  text: '',
}
const noticeReducer = (state = initialNotice, action) => {
  switch (action.type) {
      case 'SET_NOTICE_STATUS':
      return {
        ...state,
        status: action.payload,
      };
      case 'SET_NOTICE_TEXT':
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};




export { noticeReducer }

//window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark': 'light'