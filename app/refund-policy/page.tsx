import React from "react";

const RefundCancellationPolicy = () => {
  return (
    <div className="bg-white text-gray-800">
      
      {/* Top Header Section */}
      <div className="bg-gray-100 py-20 text-center">
        <h1 className="text-4xl font-bold">Refund Policy</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 leading-8 text-[15px]">

        <h2 className="font-semibold text-lg mb-4">
          Refund & Cancellation Policy
        </h2>

        <p className="mb-4">
          The act of discontinuing a Service or a Product provided by ShriCloud is defined as an act of Cancellation. The customer agrees that a Cancellation request can be submitted anytime upon submitting the request via the Client Dashboard or by opening a ticket in our Billing Department.
        </p>

        <p className="mb-6">
          During the process of canceling a Product or a Service, ShriCloud will attempt to resolve the reason for the Cancellation request provided and act in the best interest of the client. In case the Product or Service is no longer suitable for the customer, ShriCloud will act in compliance with our Terms of Service policy.
        </p>

        <h3 className="font-semibold text-md mb-3">
          Billing and Renewal policy
        </h3>

        <p className="mb-4">
          Any Product or Service provided by ShriCloud is billed regularly depending on the chosen by the customer during the order process Billing Cycle. If a customer would like to cancel a recurring service, they have to submit a cancellation request via the Client Dashboard or to submit a ticket in our Billing Department.
        </p>

        <p className="mb-4">
          The customer agrees and acknowledges that a renewed product cannot be canceled anytime, as we do not process automatic payments, we believe a customer only submits a renewal payment when they genuinely are satisfied with the service and wish to continue the same, therefore all renewal payments are final and ShriCloud is not obiliged to process a refund on the same.
        </p>

        <p className="mb-4">
          The customer agrees that purchased or renewed addon services or any third-party services offered by ShriCloud are not refundable no matter when the cancellation request is submitted.
        </p>

        <p className="mb-4">
          The customer agrees, it is their sole responsibility to ensure all payment information is correct and up to date as well as all outstanding invoices are paid if the service should be canceled before the service due date.
        </p>

        <p className="mb-4">
          Renewal payments for Products or Services with ShriCloud should be submitted not later than 24 hours after the product due date. If the customer does not submit a payment within that period ShriCloud reserves the right to suspend the customer’s account until renewal payment is submitted.
        </p>

        {/* Continue same pattern for rest content */}
        
        <p className="mt-10 text-sm text-gray-500">
          Last Revised: 31st March 2023
        </p>

      </div>
    </div>
  );
};

export default RefundCancellationPolicy;