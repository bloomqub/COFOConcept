import React, { useEffect } from 'react'
import { useRef } from 'react'

export default function Paypal() {
  const paypal = useRef()
  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: 'CAPTURE',
          purchase_units: [
            {
              description: 'Workout Video',
              amount: {
                currency_code: 'USD',
                value: 10.0,
              },
            },
          ],
        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        console.log(order)
      },
      onError: (err) => {
        console.log(err)
      },
    }).render(paypal.current)
  }, [])
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  )
}


// // Import the Firebase SDK
// const firebase = require('firebase/app');
// require('firebase/firestore');

// // Configure your Firebase app
// const firebaseConfig = {
//   // Your Firebase configuration
// };
// firebase.initializeApp(firebaseConfig);

// // Import the PayPal SDK
// const paypal = require('@paypal/checkout-server-sdk');

// // Configure the PayPal SDK with your client ID and secret
// const clientId = '<your_client_id>';
// const clientSecret = '<your_client_secret>';
// const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
// const client = new paypal.core.PayPalHttpClient(environment);

// // Define a function to create a PayPal payment
// async function createPayPalPayment(amount, returnUrl, cancelUrl) {
//   try {
//     const request = new paypal.orders.OrdersCreateRequest();
//     request.prefer("return=representation");
//     request.requestBody({
//       "intent": "CAPTURE",
//       "purchase_units": [{
//         "amount": {
//           "currency_code": "USD",
//           "value": amount
//         }
//       }],
//       "application_context": {
//         "return_url": returnUrl,
//         "cancel_url": cancelUrl
//       }
//     });
//     const response = await client.execute(request);
//     return response.result.id; // Return the payment ID
//   } catch (error) {
//     console.error(error);
//   }
// }












//Found this code online, not sure if it works

// // Import the Firebase SDK
// // Define a function to confirm a PayPal payment
// async function confirmPayPalPayment(paymentId) {
//   try {
//     const request = new paypal.orders.OrdersCaptureRequest(paymentId);
//     request.requestBody({});
//     const response = await client.execute(request);
//     return response.result; // Return the payment details
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Define a function to update the database when a payment is confirmed
// async function updateDatabase(paymentDetails) {
//   try {
//     const db = firebase.firestore();
//     const collection = db.collection('shirt');
//     const doc = collection.doc(paymentDetails.reference_id);
//     await doc.update({
//       'status': 'paid',
//       'timestamp': new Date(),
//       'payment_id': paymentDetails.id
//     });
//     console.log(Updated database for purchase ${paymentDetails.reference_id});
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Call the functions to create a PayPal payment, confirm the payment, and update the database
// createPayPalPayment('Amount', 'https://example.com/success', 'https://example.com/cancel')
//   .then(paymentId => {
//     console.log(Created PayPal payment with ID ${paymentId});
//     return confirmPayPalPayment(paymentId);
//   })
//   .then(paymentDetails => {
//     console.log(Confirmed payment for video ${paymentDetails.reference_id});
//     return updateDatabase(paymentDetails);
//   })
//   .catch(err => {
//     console.error(err);
//   });