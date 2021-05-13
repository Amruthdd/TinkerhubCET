import React from 'react';

function Modal(props){
    return (
            <div>
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">{props.title}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-wrap">{props.desc}</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
            
    
    );
}


export default Modal;