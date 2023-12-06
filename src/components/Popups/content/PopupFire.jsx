import React from 'react'
import Popups from '..'

function PopupFire(props) {
    const {title} = props

    return (
        <div className={'show-popup'}>
            <div className="swal-card text-wrapper">
                <div className={`swal-card-header swal-card-headerNormal`}>
                    <p className={`swal-card-headerTitle`} >{title}</p>
                    {/* <i className="fas fa-times icon-close" onClick={() => Popups.close()}></i> */}
                </div>
                <div className="swal-card-body">
                    {props.children}
                </div>
                {/* <div className="swal-card-footer">
                    <div className="swal-card-footerBtnLeft">
                        <button className="swal-btn swal-btnLeft">Terima</button>
                    </div>
                    <div className="swal-card-footerBtnRight">
                        <button className="swal-btn swal-btnRight" onClick={() => Popups.close()}>Close</button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default PopupFire