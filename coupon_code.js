//Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
//A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let d1 = new Date(currentDate)
  let d2 = new Date(expirationDate)
  return enteredCode === correctCode && d1 <= d2
}