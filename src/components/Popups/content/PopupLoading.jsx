import React from 'react'

function PopupLoading() {
    return (
        <div className={'show-popup'}>
            <div className="swal-card text-wrapper">
                <div className="swal-card-body-loading">
                    <div className="loaderSwal loaderSwal-1">
                        <div className="loader-outterSwal"></div>
                        <div className="loader-innerSwal"></div>
                    </div>
                    <h2 className="text-white text-center mb-2">Harap Tunggu ...</h2>
                </div>
            </div>
        </div>
    )
}

export default PopupLoading