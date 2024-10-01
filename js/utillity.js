// .........Common functions..........

// getting Donation value from the input value
function getInputDonationValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    
    return inputNumber;

}


// getting the account balance that have initially
function getAccountValueById(id){
    const accountValue = document.getElementById(id).innerText;
    const accountNumber = parseFloat(accountValue);

    return accountNumber;
}


// Changing buttons (add hidden class to all the sections)
function showSectionById(id){
    // adding hidden class
    document.getElementById('donation-cards-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    // removing hidden class from the given section's id
    document.getElementById(id).classList.remove('hidden');
}


// function for pop-up modal
function getModalElementById(id){
    const givenId = document.getElementById(id);
    return givenId;
}


