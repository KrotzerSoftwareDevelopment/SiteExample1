import React from 'react';

const Deposit = () => {
  return (
    <div className="PageContainer">
    <div className="Page"  id="NaviFont">
    <h1>Payments</h1>
    <div className="Intro">
    <div id="Title"> </div>
    </div>
     <div id="PageBody">
    <div id="PageContent">
      <div id="SubTitle"> Discounts </div>
     Discounts offered for small businesses impacted by covid.
     <br />
     <br />
     Please make sure you have had a phone consultation; before making any form of deposit or payment.
   </div>
   <div id="PageContent">
   <div id="SubTitle"> Payment Methods </div>
  Stripe payments coming soon!
  </div>
<div id="PageContent">
   <div id="SubTitle"> Crypto Currency</div>
   <div id="Title">Bitcoin:</div>
   <p id="Crypto">3HatRvtFeubW1NASJbvy4ghekHWveprS8H</p>
   <div id="Title"> Ethereum: </div>
   <p id="Crypto">0x9527a7b2325cfe157e4a3a50ac1275be46770702</p>
   <div id="Title"> LiteCoin: </div>
   <p id="Crypto">LXYsXXZMhTPuwbFZ4zTBXFSojPAKBxJFWg </p>
   <div id="Title">Ripple:</div>
   <p id="Crypto">rwpMvfxoodXggJ1g4qv6MWAPQqWDwQyHUW</p>
   </div>
  </div>
    </div>
    </div>
  );
}

export default Deposit;