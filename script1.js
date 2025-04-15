document.addEventListener("DOMContentLoaded", fetchCryptoData);

async function fetchCryptoData() {
    try {
        const response = await fetch("https://67c5828b351c081993fa4768.mockapi.io/crypto");
        const data = await response.json();
        displayCryptoData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayCryptoData(data) {
    const container = document.getElementById("crypto-container");
    container.innerHTML = "";

    data.forEach(crypto => {
        const card = document.createElement("div");
        card.classList.add("card");

        // Determine positive or negative change
        const changeClass = crypto.change >= 0 ? "positive" : "negative";
        const changeSymbol = crypto.change >= 0 ? "+" : "";

        card.innerHTML = `
            <div class="card-header">
                    <span class="coin-name">${crypto.name}</span>
                    <span class="coin-symbol">${crypto.symbol}</span>
                </div>
                <div class="price">${crypto.price.toFixed(2)}</div>
                <div class="stats">
                    <span>96,641.20</span>
                    <span class="${changeClass} red">${changeSymbol}${crypto.change.toFixed(2)}%</span>
                </div>
        `;

        container.appendChild(card);
    });
}

                   