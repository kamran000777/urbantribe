import React from 'react'
import './Warranty.css'

function Warranty() {
  return (
    <div className='warranty'>
      <div className='warranty__policy'>
        <p className='policy__title'>
        urbanTribe Warranty Policy.
        </p>
        <p className='policy__para'>
        This warranty policy applies to urbanTribe products sold in India only, which includes Mobile Phones, Accessories, IoT Products,etc. During the warranty period, if a functional failure occurs upon normal usage, urbanTribe will provide free repair service or replacement according to the standard policy guidelines set by the company.
        </p>
      </div>
      <div className='warranty__conditions'>
        <p className='warranty__title'>
        Warranty cover conditions:
        </p>
        <p className='warranty__para'>
        Warranty is applicable only for products purchased in India. The international warranty is not applicable
The warranty period of the mobile device is applicable from the activation date or Invoice date whichever is earlier. Delayed activation date due to unforeseen logistics delays on product delivery will be considered however a valid proof of purchase i.e. Invoice is mandatory to produce if demanded at the service center to avail product replacements.
To avail warranty service support for urbanTribe accessories & IoT products, customers are advised to carry the original box pack while visiting the service center along with valid purchase proof of Invoice.
Some accessories (for example toothbrush bristles, hair dryer nozzle, trimmers combs, manual, warranty card, etc.) are not covered by this warranty.
During the warranty period, if any functional failure occurs, urbanTribe will provide maintenance services free of charge for workmanship and required spare parts through their authorized service centers. All replaced parts are owned by urbanTribe.
Warranty does not cover if the device gets rooted by the user and if it cannot get restored by a software update, ASC to ensure to take prior approval from the customer before flashing the software.
Devices/products given for business activities to teams will get service as per the urbanTribe service policy. Warranty start dates will be considered by the activation date.
In case of any dispute, where there is no fault found in the device by the authorized service center and the user is not agreeing then both parties may agree for testing of the device by agencies authorized by Consumer court/organization. The testing fee should be submitting in advance by both parties. If after testing it found quality issue then the testing fee will be borne by the service center, if no fault found in the device then a fee will be borne by the user.
If there is any conflict between this service policy and national laws and regulations, all national laws and regulations shall prevail.

        </p>
      </div>
      <div className='warranty__exclusion'>
        <p className='warranty__title'>Warranty Exclusions:</p>
        <p className='warranty__para'>
        This warranty neither covers man-made damages nor any of the following conditions, however, paid repair services are available.

The device has exceeded the standard warranty duration.
Any unauthorized repair, through the third party. Disassembly, self-repair, modification, and other human behaviours that cause damage.
Warranty sticker is missing/misplaced or altered
Warranty does not cover natural wear and tear (for example cable, connector, etc.), use of non-urbanTribe accessories, usage under extreme conditions, damage caused by an act of God such as floods, fire or earthquakes
Accessories & IOT products are not repairable.
The device is damaged due to improper use such as falling, squeezing, water damage, etc.,
Non-urbanTribe official warranty commitments
No warranty card and valid proof of purchase, however, an exception can be granted if the customer can prove that the accessory is within the warranty period
Products purchased overseas are not entitled to claim warranty services in domestic service centers however can avail repair services on chargeable basis taking into consideration of spare part costs etc., with a prior appointment at service centers.
        </p>
      </div>
    </div>
  )
}

export default Warranty