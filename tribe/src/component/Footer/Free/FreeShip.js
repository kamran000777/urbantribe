import React from 'react'
import './FreeShip.css'

function FreeShip() {
  return (
    <div className='free__ship'>
      <div className='termsOfSale'>
        <p className='terms__title'>Terms of Sales</p>
        <p className='terms__para'>
        Thank you for shopping at urbanTribe online store. urbanTribe online store is operated by urbanTribe Mobile Telecommunications (India) Private Limited, a Company incorporated in India having its registered office at 3rd Floor, Tower B, Building Number 8, DLF Cyber City, Gurugram-122002, Haryana, India.<br/><br/>
        We will keep you updated on your order status via email. You may cancel your order in My Orders via the "Cancel" button, or contact at our Customer Support at <span className='free__links'>https://www.urbanTribe.in.
          </span> Refunds are typically processed within 5-7 business days through the same payment method as the order. Orders cannot be canceled once they have reached "Processing" status.<br/><br/>
        The Partner makes every effort to supply the Products listed in your Order Confirmation. In some situations, however, we will need to cancel your order. For example, (1) the item is no longer in stock; (2) the item is no longer being produced; (3) there is a price fluctuation; or (4) a Third Party notifies the partner that cancellation is necessary. If this is the case, the distribution partner will cancel your order, notify you of the cancellation, and timely refund the money you have paid toward the Order unless the case involves violations of applicable national law.
        </p>
      </div>
      <div className='order__tracking free__ship'>
        <p className='free__title'>
        Order Tracking:
        </p>
        <p className='order__para free__para'>
        Please visit the “My Orders” section on www.urbanTribe.com and click on the order number.<br/><br/>
        Kindly get in touch with our customer support team for more details at <span className='free__links'>
        orders.in@urbanTribe.com
          </span>
        </p>
      </div>
      <div className='order__refund'>
      <p className='refund__title free__title'>
        Order Refund:
        </p>
        <p className='refund__para free__para'>
        Once the order is delivered, it cannot be returned. It includes the condition of the box in even unopened condition. If you have received a wrong or damaged product, please connect with our Customer Service team at orders.in@urbanTribe.com within 24 hours from the time of delivery.
        </p>
      </div>
      <div className='shipping'>
        <p className='ship__info free__title'>
        Shipping Information:
        </p>
        <p className='ship__para free__para'>
        We are delivering to almost all the major cities, covering 15000+ pin codes. All the deliveries will be done within 3-5 days once the orders are dispatched. (Please be noted: The real delivery timeline would be impacted by the local logistics)
        </p>
      </div>
      <div className='payment__free'>
        <p className='payment__title free__title'>
        Payment Options:
        </p>
        <p className='payment__para free__para'></p>
        urbanTribe Store offers the following various payment methods.

 Credit Card or Debit Card.

 EMI- EMI options will automatically appear at checkout if the items in your bag qualify and your card is from an eligible bank.

 Net Banking-We accept Net Banking payments from most banks throughout India.

 UPI-When selected at checkout, you can either enter your UPI ID or scan a QR code to authorize the payment on your UPI mobile app. Maximum payment limits may apply based on your bank.

 Wallet

 Payment on Delivery
      </div>
    </div>
  )
}

export default FreeShip