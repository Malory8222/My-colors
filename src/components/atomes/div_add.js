import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const DivAdd = (props) => {
    return (
        <div className="col-md-15 color_wrapper">
            <div className="button color cornered" style={{ backgroundColor: "#404040" }} data-color="#404040" onClick={props.event}>
                <span className="icon">
                    <FontAwesomeIcon icon={faPlus} size="6x" color="#3CAF7C"/>
                </span>
                <div className="swipe"> </div>
            </div>
        </div>
    )
}

export default DivAdd;