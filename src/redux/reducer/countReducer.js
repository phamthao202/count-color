let initialState = {
  count: 0,
  color: "",
  colorOneBox: [],
};
const countReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      state.colorOneBox.push(null);
      state.count++;
      return { ...state }; //li do phai return each time: switch se check tung phan,dung cai nao se dung tai do luon , va minh phai return
    case "DECREMENT":
      if (state.count > 0) {
        state.count--;
        //   state.colorOneBox.pop()
        state.colorOneBox.splice(state.colorOneBox.length - 1, 1);
      }
      return { ...state };
    case "RESET":
      state.count = 0;
      return { ...state };
    case "COLOR":
      state.color = payload;
      console.log(state.color);
      return { ...state };
    case "COLORONEBOX":
      state.colorOneBox[payload.index] = payload.value;

      return { ...state };
    default:
      //same like "else". Swith same as if
      return { ...state };
  }
};
export default countReducer;
