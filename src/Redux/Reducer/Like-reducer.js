import {INCREMENT, DECREMENT} from "../Types"


let initalState={
    likes:0,
    minus:0
}
export const LikeReducer=(state=initalState, action)=>{
    switch(action.type){
        case INCREMENT:
            //?
            return{
                ...state,
                likes:state.likes+1,
            }
        case DECREMENT:{
            return{
                ...state,
                likes:state.likes===0?0:state.likes-1
            }
        }
            default:
                return state
    }
}