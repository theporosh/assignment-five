// heart icon of any card code start here**************
const heartIcons = document.getElementsByClassName("heart-icon-count")

const heartCountElement = document.getElementById("heartCount")

let heartCount = parseInt(heartCountElement.innerText)

for (let icon of heartIcons) {
    icon.addEventListener("click", function () { 
        heartCount++
        heartCountElement.innerText = heartCount
    })
}

// Call button all code start here********************

let coins = 100; 

// Function to update coin display
function updateCoinDisplay() {
    const coinElement = document.getElementById("coin-count");
    coinElement.innerText = coins;
}

// Function to add call history
function addToCallHistory(serviceName, serviceNumber) {
    const historyContainer = document.getElementById("callHistoryList");
    
// current local time
const now = new Date();
    const currentLocalTime = now.toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

// Create new element
const newElement = document.createElement("div");
newElement.classList.add("bg-white", "rounded-xl", "p-3", "flex", "justify-between", "items-center", "mt-3");

// Append to div that has id callHistoryList to put on historyContainer variable
newElement.innerHTML = `
        <div class="flex items-center">
            <div class="ml-3">
                <h1 class="inter-font font-semibold text-[#111111] text-sm">${serviceName}</h1>
                <p class="text-[#5C5C5C] hind-madurai-font text-sm">${serviceNumber}</p>
            </div>
        </div>
        <p class="text-[#111111] hind-madurai-font text-sm">${currentLocalTime}</p>
    `;
historyContainer.append(newElement);

}

// Function to click on clear history button for clear call history
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

    clearHistoryBtn.addEventListener("click", function () {
        const historyContainer = document.getElementById("callHistoryList");
        historyContainer.innerHTML = ""; 
    });




// Getting All call buttons and do functional
const callButtons = document.getElementsByClassName("call-btn");
for (let button of callButtons) {
    button.addEventListener("click", function () {
    const card = button.closest(".call-btn-container");

        const serviceNameElement = card.getElementsByClassName("service-title")[0];
        const serviceNumberElement = card.getElementsByClassName("service-number")[0];

        const serviceName = serviceNameElement.innerText;
        const serviceNumber = serviceNumberElement.innerText;

       if (coins < 20) {
            alert("Insufficient coins to make a call. You need at least 20 coins.");
            return;
        }
        coins -= 20;
        updateCoinDisplay();

        alert(`Calling ${serviceName} at ${serviceNumber}...`);

        addToCallHistory(serviceName, serviceNumber);
    });
}

updateCoinDisplay();




// copy button all code start here

let copyCount = 0;

// Function to update copy count in UI
function updateCopyCount() {
    const copyCountElement = document.getElementById("copyCount");
    if (copyCountElement) {
        copyCountElement.innerText = copyCount;
    }
}

// Get all copy buttons
const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach(button => {
    button.addEventListener("click", function () {
        // Find the parent card
        const card = button.closest(".call-btn-container");

        if (!card) return;

        // Get the service number from this card
        const numberElement = card.querySelector(".service-number");
        if (!numberElement) return;

        const numberToCopy = numberElement.innerText;

        // Copy to clipboard
        navigator.clipboard.writeText(numberToCopy).then(() => {
            // Alert success message
            alert(`Copied: ${numberToCopy}`);

            // Increase count and update display
            copyCount++;
            updateCopyCount();
        }).catch(err => {
            console.error("Copy failed:", err);
            alert("Failed to copy the number.");
        });
    });
});