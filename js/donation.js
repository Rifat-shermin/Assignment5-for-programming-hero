// For Donation 1
document.getElementById('btn-donation1')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // get donation input
        const donateMoney = getInputDonationValueById('donation-input-ammount1');



        // validation weather the input value is a number or not
        if (isNaN(donateMoney)) {
            alert('Failed to donate money. Try again later.')
            return;
        }

        if (donateMoney > 0) {
            // get the amounts by using utillity function...
            const amount = getAccountValueById('initial-ammount1');
            const storage = getAccountValueById('amount-in-storage');

            // calculation for donation
            const newAmount = amount + donateMoney;
            const newStorage = storage - donateMoney;


            // set the new amounts .
            document.getElementById('initial-ammount1').innerText = newAmount;
            document.getElementById('amount-in-storage').innerText = newStorage;



            const infoTitle = document.getElementById('donation-info-title1').innerText;
            console.log(infoTitle);

            const dateTime = new Date();

            // Show the modal
            const donateModal = document.getElementById('modal');
            donateModal.style.display = "block";

            // Modal close functionality
            const btnCloseModal = document.getElementById('btn-modal_close');
            const span = document.getElementsByClassName("close")[0];

            // Set up event listeners for closing the modal
            span.onclick = function () {
                donateModal.style.display = "none";
            };

            btnCloseModal.onclick = function () {
                donateModal.style.display = "none";
            };

            // Close modal when clicking outside of it
            window.onclick = function (event) {
                if (event.target === donateModal) {
                    donateModal.style.display = "none";
                }
            };




            // add to History Section.
            const div = document.createElement('div');
            // div.classList.add('border-2 border-gray-200 p-5 space-y-4 rounded-2xl');
            div.classList.add('border-2');
            div.classList.add('border-gray-200');
            div.classList.add('p-5');
            div.classList.add('space-y-4');
            div.classList.add('rounded-2xl');
            div.classList.add('bg-pink-100');
            div.classList.add('text-black');
            div.innerHTML = `
        <p class=""> ${donateMoney} Taka is Donated for ${infoTitle} </p>
        <p class=""> ${dateTime} . </p>    `

            // show in a common section. append to History section
            document.getElementById('history-section').appendChild(div);

        }
        else {
            alert('Failed to donate money. Please put any positive amount.');
        }
    })


    
// For Donation 2
document.getElementById('btn-donation2')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // get donation input
        const donateMoney = getInputDonationValueById('donation-input-ammount2');



        // validation weather the input value is a number or not
        if (isNaN(donateMoney)) {
            alert('Failed to donate money. Try again later.')
            return;
        }

        if (donateMoney > 0) {
            // get the amounts by using utillity function...
            const amount = getAccountValueById('initial-ammount2');
            const storage = getAccountValueById('amount-in-storage');

            // calculation for donation
            const newAmount = amount + donateMoney;
            const newStorage = storage - donateMoney;


            // set the new amounts .
            document.getElementById('initial-ammount2').innerText = newAmount;
            document.getElementById('amount-in-storage').innerText = newStorage;



            const infoTitle = document.getElementById('donation-info-title2').innerText;
            console.log(infoTitle);
            const dateTime = new Date();


            // add to History Section.
            const div = document.createElement('div');
            // div.classList.add('border-2 border-gray-200 p-5 space-y-4 rounded-2xl');
            div.classList.add('border-2');
            div.classList.add('border-gray-200');
            div.classList.add('p-5');
            div.classList.add('space-y-4');
            div.classList.add('rounded-2xl');
            div.classList.add('bg-pink-200');
            div.classList.add('text-black');
            div.innerHTML = `
        <p class=""> ${donateMoney} Taka is Donated for ${infoTitle} </p>
        <p class=""> ${dateTime} . </p>

    `

            // show in a common section. append to History section
            document.getElementById('history-section').appendChild(div);

        }
        else {
            alert('Failed to donate money. Please put any positive amount.');
        }
    })

// For Donation 3
document.getElementById('btn-donation3')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // get donation input
        const donateMoney = getInputDonationValueById('donation-input-ammount3');



        // validation weather the input value is a number or not
        if (isNaN(donateMoney)) {
            alert('Failed to donate money. Try again later.')
            return;
        }

        if (donateMoney > 0) {
            // get the amounts by using utillity function...
            const amount = getAccountValueById('initial-ammount3');
            const storage = getAccountValueById('amount-in-storage');

            // calculation for donation
            const newAmount = amount + donateMoney;
            const newStorage = storage - donateMoney;


            // set the new amounts .
            document.getElementById('initial-ammount3').innerText = newAmount;
            document.getElementById('amount-in-storage').innerText = newStorage;



            const infoTitle = document.getElementById('donation-info-title3').innerText;
            console.log(infoTitle);
            const dateTime = new Date();


            // add to History Section.
            const div = document.createElement('div');
            // div.classList.add('border-2 border-gray-200 p-5 space-y-4 rounded-2xl');
            div.classList.add('border-2');
            div.classList.add('border-gray-200');
            div.classList.add('p-5');
            div.classList.add('space-y-4');
            div.classList.add('rounded-2xl');
            div.classList.add('bg-pink-300');
            div.classList.add('text-black');
            div.innerHTML = `
        <p class=""> ${donateMoney} Taka is Donated for ${infoTitle} </p>
        <p class=""> ${dateTime} . </p>

    `

            // show in a common section. append to History section
            document.getElementById('history-section').appendChild(div);

        }
        else {
            alert('Failed to donate money. Please put any positive amount.');
        }
    })