// add event-listener to the Donate & History Button

// for "Donation" button
document.getElementById('btn-donation')
.addEventListener('click', function(event){
    event.preventDefault();
    showSectionById('donation-cards-section');

})


// for "History" button
document.getElementById('btn-history')
.addEventListener('click', function(event){
    event.preventDefault();
    showSectionById('history-section');

})

 
