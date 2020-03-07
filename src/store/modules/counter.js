// ACTION
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";
const CHANGE_COLOR = "counter/CHANGE_COLOR";
// ACTION CREATORS (액션 생성 함수)
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const changeColor = color => ({ type: CHANGE_COLOR, color });
// 스토어안에서 관리할 상태값
const initialState = {
  number: 0,
  color: "#BFCD7E"
};
// 리듀서
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
    case CHANGE_COLOR:
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
}
