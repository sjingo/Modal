

export default function ModalReducer(state, action){

    switch(action.type){
        case 'OPEN_MODAL' :
            return {
                modalIsOpen: true
            }
        case 'CLOSE_MODAL' : 
            return {
                modalIsOpen: false
            }
        default : 
            throw new Error()
    }

}

