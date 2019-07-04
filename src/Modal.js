import React, { useReducer} from 'react'
import ReactDOM from 'react-dom'
import ModalReducer from './reducer-modal'
const initialState = {
    modalIsOpen: true,
    modalClass: 'default'
}
export default function Modal(props){

    const [state, dispatch] = useReducer(ModalReducer, initialState)

    const RenderModal = props => <div className={`Modal ${state.modalIsOpen ? 'is-open' : 'is-closed'}`}>
        <button onClick={()=> dispatch({type: 'CLOSE_MODAL'})}>close</button>
            {props.children}
    </div>
    return ReactDOM.createPortal(<RenderModal {...props}/>, document.body)

}

