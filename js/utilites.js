



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