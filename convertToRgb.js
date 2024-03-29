/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
*/

function rgb(r, g, b){
  return convertToRGB(r)+convertToRGB(g)+convertToRGB(b)
}

const convertToRGB = (rgbVal) =>{
  
  if(rgbVal <= 0) return '00'
  if(rgbVal >= 255) return 'FF'

  firstHex=parseInt(rgbVal/16)
  secondHex=((rgbVal/16)-firstHex) * 16
  
  return getHexValue(firstHex)+getHexValue(secondHex)
  
}


const getHexValue = (digit) =>{
  const rgbToHex = {
    '0': '0',  
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': 'A',
    '11': 'B',
    '12': 'C',
    '13': 'D',
    '14': 'E',
    '15': 'F',
  }
    
  return rgbToHex[digit.toString()]  
  
  
}
