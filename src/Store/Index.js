import { createStore } from 'redux'

const countReducer=(state={counter:0},action)=>{
    if(action.type==='increment')
    {
        return{
        counter:state.counter+2
        }
    }

    if(action.type==='decrement'){
        return{
            counter:state.counter-2
        }
    }

    return state

}


const Store=createStore(countReducer)

export default Store