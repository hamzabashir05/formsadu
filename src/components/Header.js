import React from 'react'

export default function Header() {
    return (

        <div className='d-flex justify-content-between p-3 border-bottom'>
            <div className='d-flex align-item-center'>
                <img src='./assets/roomylogo.png' width={45} alt='' className='ms-2'></img>
                <h5 className='ms-5' style={{color:'darkblue', fontWeight:700}} > Roomy Signature Hotel</h5>
            </div>

            <div className='d-flex align-items-center'>
                <h6>PMS Date </h6>
                <h3 className='text-warning ms-1'>12</h3>
                <p>  August 2023 </p>
                <img src='./assets/warning.png' width={20} alt='' className='ms-2'></img>
                <img src='./assets/bell.png' width={15} alt='' className='ms-3'></img>
                <img src='./assets/avatar.png' width={25} alt='' className='ms-4' onClick ></img>
                <p className='ms-2'>Hamza Bashir</p>

            </div>

        </div>


    )
}
