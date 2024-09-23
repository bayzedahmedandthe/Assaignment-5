
document.getElementById('btn-blog').addEventListener('click', function(){
   window.location.href = '/Blog.html'
})

document.getElementById('btn-history').addEventListener('click', function(){
   const sectionHistory = document.getElementById('section-history');
   const sectionDonation = document.getElementById('section-donation');
   sectionHistory.classList.remove('hidden');
   sectionDonation.classList.add('hidden');
  



})

document.getElementById('btn-donation').addEventListener('click', function(){
   const sectionHistory = document.getElementById('section-history');
   const sectionDonation = document.getElementById('section-donation');

   sectionDonation.classList.remove('hidden');
   sectionHistory.classList.add('hidden');
})
