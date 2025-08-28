// clicking on the heart icon of any card will increase the count in the Navbar
const heartIcons = document.getElementsByClassName("heart-icon-count")

const heartCountElement = document.getElementById("heartCount")

let heartCount = parseInt(heartCountElement.innerText)

for (let icon of heartIcons) {
    icon.addEventListener("click", function () { 
        heartCount++
        heartCountElement.innerText = heartCount
    })
}

// Call button all code start here

let coins = 100; // Initial coin value

// Function to update coin display
function updateCoinDisplay() {
    const coinElement = document.getElementById("coin-count");
    if (coinElement) {
        coinElement.innerText = coins;
    }
}

// Function to add call history
function addToCallHistory(serviceName, serviceNumber) {
    const historyContainer = document.getElementById("callHistoryList");
    if (!historyContainer) return;
// Format time in Bangladesh Time (UTC+6)

const now = new Date();
    const bdTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
    const timeString = bdTime.toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });


// Create new entry
const newEntry = document.createElement("div");
newEntry.className = "bg-white rounded-xl p-3 flex justify-between items-center mt-3";

// Append to history
newEntry.innerHTML = `
        <div class="flex items-center">
            <div class="ml-3">
                <h1 class="inter-font font-semibold text-[#111111] text-sm">${serviceName}</h1>
                <p class="text-[#5C5C5C] hind-madurai-font text-sm">${serviceNumber}</p>
            </div>
        </div>
        <p class="text-[#111111] hind-madurai-font text-sm">${timeString}</p>
    `;
historyContainer.prepend(newEntry);

}

// Function to clear call history
const clearHistoryBtn = document.getElementById("clearHistoryBtn");
if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", function () {
        const historyContainer = document.getElementById("callHistoryList");
        if (historyContainer) {
            historyContainer.innerHTML = ""; 
        }
    });
}



// Get all call buttons
const callButtons = document.getElementsByClassName("call-btn");

// Loop through each button
for (let button of callButtons) {
    button.addEventListener("click", function () {
        // Find the parent card container
        const card = button.closest(".call-btn-container");

        // if (!card) return;

        // Get service name and number from within the card
        const serviceNameElement = card.getElementsByClassName("service-title")[0];
        const serviceNumberElement = card.getElementsByClassName("service-number")[0];

        // if (!serviceNameElement || !serviceNumberElement) return;

        const serviceName = serviceNameElement.innerText;
        const serviceNumber = serviceNumberElement.innerText;

        // Check coin balance
        if (coins < 20) {
            alert("Insufficient coins to make a call. You need at least 20 coins.");
            return;
        }

        // Deduct coins and update UI
        coins -= 20;
        updateCoinDisplay();

        // Show call alert
        alert(`Calling ${serviceName} at ${serviceNumber}`);

        // Add to call history
        addToCallHistory(serviceName, serviceNumber);
    });
}

// Clear history button event



// Initial coin display update
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