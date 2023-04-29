import React, { useEffect } from 'react'
import { useRef } from 'react'
import { getDatabase, ref, push } from 'firebase/database';

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

        const db = getDatabase()
            push(ref(db, 'paymentInfo/' ), {
                order: order
            })
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


