//ACTION
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// ACTION CREATER (액션 생성 함수)
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// 스토어 안에서 관리할 상태값
const initialState = {
  number: 0
};

// 리듀서
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + 1
      };
    case DECREMENT:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}
