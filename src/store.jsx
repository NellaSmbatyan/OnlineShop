import rootred from './Redux/reducers/main'
import { createStore } from 'redux'
const store = createStore(
    rootred
)
export default store