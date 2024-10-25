export { increment } from '../reducer/counterSlice'
import { decrement } from '../reducer/counterSlice'

export const asyncdecrement = (value) => (dispatch, getState) => {
    console.log(getState);
    
    setTimeout(() => {
        dispatch(decrement(value));
    },2000)
}