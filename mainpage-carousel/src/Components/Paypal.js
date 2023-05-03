import React, { useEffect } from 'react'
import { useRef } from 'react'
import { getDatabase, ref, push } from 'firebase/database';

export default function Paypal() {
  const paypal = useRef()
  /**
   * 
   * @returns
   * Function that renders the PayPal button
   * The function returns the PayPal button
   */
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
      /**
       * 
       * @param {*} data 
       * @param {*} actions 
       * @returns
       * Function that captures the order and pushes the order to the database
       * The function takes in the data and actions as parameters
       * The function returns the order
       */
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        console.log(order)

        const db = getDatabase()
            push(ref(db, 'paymentInfo/' ), {
                order: order
            })
      },
      /**
       * 
       * @param {*} err 
       * Function that logs an error if the payment fails
       * The function takes in the err as a parameter
       * The function returns the error
       */
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


