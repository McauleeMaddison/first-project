function calculateTotalCost(pricePerItem, quantity, discountPercent) {
    const totalBeforeDiscount = pricePerItem * quantity;
    const discountAmount = (totalBeforeDiscount * discountPercent) / 100;
    return totalBeforeDiscount - discountAmount;
}

function applyTaxes(initialAmount) {
    let amount = initialAmount;
    amount += amount * 0.05;
    amount += 10;
    amount += amount * 0.02;
    return amount;
}

function getLoyaltyDiscount(yearsAsMember, numberOfPurchases) {
    if (yearsAsMember >= 5 && numberOfPurchases >= 50) {
        return "20% Discount";
    } else if (yearsAsMember >= 3 || numberOfPurchases >= 30) {
        return "10% Discount";
    } else if (yearsAsMember >= 1 && numberOfPurchases >= 10) {
        return "5% Discount";
    } else {
        return "No Discount";
    }
}

function processInventory(stock, threshold, incrementValue) {
    return stock < threshold ? stock + incrementValue : --stock;
}

function hasRequiredPermissions(userPermissions, requiredPermissions) {
    return (userPermissions & requiredPermissions) === requiredPermissions;
}

const results = [];

results.push("1. Total Cost: $" + calculateTotalCost(25, 4, 15).toFixed(2));
results.push("2. Final Amount after Taxes: $" + applyTaxes(120).toFixed(2));
results.push("3. Loyalty Discount: " + getLoyaltyDiscount(4, 35));
results.push("4. Updated Stock: " + processInventory(8, 10, 5));

const READ = 1, WRITE = 2, EXECUTE = 4;
const userPerms = READ | WRITE;
results.push("5. Has Required Permissions (Read+Write): " + hasRequiredPermissions(userPerms, READ | WRITE));
results.push("5. Has All Permissions (Read+Execute): " + hasRequiredPermissions(userPerms, READ | EXECUTE));

const resultBox = document.getElementById("results");
resultBox.textContent = results.join("\n");
