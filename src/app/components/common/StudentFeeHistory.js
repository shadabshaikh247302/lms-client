"use client"
import React, { useContext } from 'react'
import { PaymentContext } from '../../../../../../techstack-lms/src/app/context/PaymentContext'

export default function StudentFeeHistory() {
    const { paymentData } = useContext(PaymentContext)
    // console.log(paymentData);

    const formatDate = (isoDate) => {
        if (!isoDate) return ""; // "No Record"
        const date = new Date(isoDate);
        const day = date.getDate().toString().padStart(2, "0");
        const month = date.toLocaleString("en-US", { month: "short" });
        const year = date.getFullYear().toString().slice(-2);
        const hours = date.getHours() % 12 || 12;
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const ampm = date.getHours() >= 12 ? "PM" : "AM";
    
        return `${day}-${month}-${year}, ${hours}:${minutes} ${ampm}`; 
      };


    return (
        <div className="col-md-12 mb-5 px-0">
            <div className="card mb-3">
                <h5 className="p-3 border-bottom">Paid History</h5>
                <div className="card-body">

                    {paymentData.length > 0 ? (
                        paymentData.map((payment, index) => (
                            <div key={index} className="row mb-2">

                                <div className="col-sm-6">
                                    <h6 className="mb-0">
                                        <i className="bi bi-cash-coin me-2 fs-5 text-dark"></i>Amount
                                    </h6>
                                </div>
                                <div className="col-sm-6 mt-md-0 my-2" style={{ color: "green" }}>
                                    <i className="bi bi-currency-rupee me-1 fs-5"></i> {payment?.amount} {/* Payment Amount */}
                                </div>
                                {/* ---------------------------------------- */}
                                <div className="col-sm-6">
                                    <h6 className="mb-0">
                                        <i className="bi bi-calendar-check me-2 fs-5 text-dark"></i>Full Date and Time
                                    </h6>
                                </div>
                                <div className="col-sm-6 mt-md-0 my-2 text-primary">
                                    {formatDate(payment?.createdAt)}  {/* Timestamp of the payment */}
                                </div>
                                {/* --------------------------------------- */}
                                <div className="col-sm-6">
                                    <h6 className="mb-0">
                                        <i className="bi bi-receipt me-2 fs-5 text-dark"></i>Payment Mode
                                    </h6>
                                </div>
                                <div className="col-sm-6 mt-md-0 my-2 text-primary">
                                    {payment?.MOP === "Online Payment" ? payment?.platform : payment?.MOP}  {/* Timestamp of the payment */}
                                </div>
                                {/* --------------------------------------- */}
                                <div className='d-flex justify-content-end'>
                                    <span>
                                        <button className='btn btn-outline-danger btn-sm'>Raise Dispute</button>
                                    </span>
                                </div>

                                <hr className='mt-3' />

                            </div>

                        ))
                    ) : (
                        <p>No payment history available.</p> // If no history is found
                    )}
                </div>
            </div>
        </div>

    )
}
