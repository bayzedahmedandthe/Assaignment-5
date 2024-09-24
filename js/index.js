
document.getElementById('btn-blog').addEventListener('click', function(){
   window.location.href = '/Blog.html'
})

// btn history function start
document.getElementById('btn-history').addEventListener('click', function(){
   const sectionHistory = document.getElementById('section-history');
   const sectionDonation = document.getElementById('section-donation');
   const btnDonation = document.getElementById('btn-donation');
   const btnHistory = document.getElementById('btn-history');
   const footer = document.getElementById('footer');
   sectionHistory.classList.remove('hidden',);
   sectionDonation.classList.add('hidden',);
   btnHistory.classList.add('bg-lime-400');
   btnDonation.classList.remove('bg-lime-400');
   btnDonation.classList.add('border-2')
   const firestCardContainerInputField = getInputFieldById('firest-card-container-input-field');
   const secendCardContainerInputField = getInputFieldById('secend-card-container-input-field');
   const thirdCardContainerInputField = getInputFieldById('secend-card-container-input-field');
   const div =  document.createElement('div');
   const text = document.createElement('div');
   const divContainer = document.createElement('div')
   
   div.innerHTML= `<div class = " border-2 max-w-[80%] mx-auto rounded-2xl">
   <p class = "font-bold text-xl p-4">${firestCardContainerInputField} Taka is Donated for famine-2024 in feni, Bangladesh</p>
   <p class = "pb-4 pl-4">Date: ${new Date().toString()}</p></div>`;
   text.innerHTML= `<div class = " border-2 max-w-[80%] mx-auto rounded-2xl mt-7">
   <p class = "font-bold text-xl p-4">${secendCardContainerInputField} Taka is Donated for Flod Relif at feni, Bangladesh</p>
   <p class = "pb-4 pl-4">Date: ${new Date().toString()}</p></div>`;
   divContainer.innerHTML= `<div class = " border-2 max-w-[80%] mx-auto rounded-2xl my-7">
   <p class = "font-bold text-xl p-4">${thirdCardContainerInputField} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
   <p class = "pb-4 pl-4">Date: ${new Date().toString()}</p></div>`;
 
   sectionHistory.appendChild(div);
   sectionHistory.appendChild(text);
   sectionHistory.appendChild(divContainer);
})
// btn history end

// btn Donation function start
document.getElementById('btn-donation').addEventListener('click', function(){
   const sectionHistory = document.getElementById('section-history');
   const sectionDonation = document.getElementById('section-donation');
   const btnDonation = document.getElementById('btn-donation');
   const btnHistory = document.getElementById('btn-history')
   sectionDonation.classList.remove('hidden');
   sectionHistory.classList.add('hidden');
   btnHistory.classList.remove('bg-lime-400')
   btnDonation.classList.add('bg-lime-400')
})
// btn Donation function end

// firset card calculate function start
document.getElementById('firest-card-container-donate-btn').addEventListener('click', function(){ 
   const modal = document.getElementById('my_modal_1');
   modal.showModal();
   const firestCardContainerInputField = getInputFieldById('firest-card-container-input-field');
   console.log(typeof firestCardContainerInputField);
const firestcardContainerDonatedBalance = getElementInnerTextById('firest-card-donated-amount');
const mainBalance = getElementInnerTextById('main-balance');
if(!isNaN(firestCardContainerInputField) && firestCardContainerInputField > 0){
   const donatedBalance = firestCardContainerInputField + firestcardContainerDonatedBalance;
const newMainBalance = mainBalance - firestCardContainerInputField;
document.getElementById('main-balance').innerText = newMainBalance;
document.getElementById('firest-card-donated-amount').innerText = donatedBalance;
}
else{
   alert('Please enter a positive number for your donation.')
}
})
// firset card calculate function end

// secend card calculate function start

document.getElementById('secend-card-container-donate-btn').addEventListener('click', function(){
   const modal = document.getElementById('my_modal_1');
   modal.showModal();
   const secendCardContainerInputField = getInputFieldById('secend-card-container-input-field');
   const secendCardContainerDonatedBalance = getElementInnerTextById('secend-card-donated-amount');
   const mainBalance = getElementInnerTextById('main-balance');
if(!isNaN(secendCardContainerInputField) && secendCardContainerInputField > 0){
   const donatedBalance = secendCardContainerInputField + secendCardContainerDonatedBalance;
   const newMainBalance = mainBalance - secendCardContainerInputField;
   document.getElementById('main-balance').innerText = newMainBalance;
   document.getElementById('secend-card-donated-amount').innerText = donatedBalance;
}
else{
   alert('Please enter a positive number for your donation.')
}
   })

// secend card calculate function end


// third card calculate function start

document.getElementById('third-card-container-donate-btn').addEventListener('click', function(){
   const modal = document.getElementById('my_modal_1');
   modal.showModal();
   const thirdCardContainerInputField = getInputFieldById('third-card-container-input-field');
   const thirdCardContainerDonatedBalance = getElementInnerTextById('third-card-donated-amount');
   const mainBalance = getElementInnerTextById('main-balance');
if(!isNaN(thirdCardContainerInputField) && thirdCardContainerInputField > 0){
   const donatedBalance = thirdCardContainerInputField + thirdCardContainerDonatedBalance;
   const newMainBalance = mainBalance -thirdCardContainerInputField;
   document.getElementById('main-balance').innerText = newMainBalance;
   document.getElementById('third-card-donated-amount').innerText = donatedBalance;
}
else{
   alert('Please enter a positive number for your donation')
}
   })

// third card calculate function end