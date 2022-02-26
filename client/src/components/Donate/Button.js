import React from 'react';
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    "pk_test_51IUqMCJ2iOysJZvP3vrQpEoV2l1SpF9PzkycqVdKjmC3RYuDC3AqTvRfBDcsDwDmtxJlkUyip4GQOb8Akt0lF3O100RSHVPfch"
  );
  const DonationButton = ({ itemID, ammount }) => {
    const handleClick = async (event) => {
      const stripe = await stripePromise;
      stripe
        .redirectToCheckout({
          lineItems: [{ price: itemID, quantity: 1 }],
          mode: "payment",
          successUrl: window.location.protocol + "//localpdf.tech/merge",
          cancelUrl: window.location.protocol + "//localpdf.tech/merge",
          submitType: "donate",
        })
        .then(function (result) {
          if (result.error) {
            console.log(result);
          }
        });
    };
    return (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        onClick={handleClick}
      >
        Donate {ammount}$
      </button>
    );
  };

export default DonationButton;