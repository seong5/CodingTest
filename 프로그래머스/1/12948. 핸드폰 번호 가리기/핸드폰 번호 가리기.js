function solution(phone_number) {
  const len = phone_number.length;             
  const hidden = "*".repeat(len - 4);          
  const last4 = phone_number.slice(-4);        
  return hidden + last4;                       
}