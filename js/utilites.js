
function getButtonById(id){
  const getButton = document.getElementById(id);
  return getButton;
  // console.log('kk');
}

function getBannerButtonById(id){
  const bannerButton = document.getElementById(id);
  return bannerButton;
}

function getCardButtonById(id){
  const cardDonateButton = document.getElementById(id);
  return cardDonateButton;
}

function getInputFieldById(id){
   const inputField = document.getElementById(id). value;
   const inputFieldNumber = parseFloat(inputField);
   return inputFieldNumber;
 }
 

function getElementInnerTextById(id){
    const elementInnerText = document.getElementById(id).innerText;
    const elementInnerTextNumber = parseFloat(elementInnerText);
    return elementInnerTextNumber;
}