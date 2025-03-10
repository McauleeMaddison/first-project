// JavaScript Operators Challenge

// 1. Arithmetic Operators Task
function calculateTotalCost(pricePerItem, quantity, discountPercent) {
    const totalBeforeDiscount = pricePerItem * quantity;
    const discountAmount = (totalBeforeDiscount * discountPercent) / 100;
    return totalBeforeDiscount - discountAmount;
}

// 2. Assignment Operators Task
function applyTaxes(initialAmount) {
    let amount = initialAmount;
    amount += amount * 0.05;
    amount += 10;
    amount += amount * 0.02;
    return amount;
}

// 3. Comparison & Logical Operators Task
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

// 4. Increment/Decrement & Ternary Operators Task
function processInventory(stock, threshold, incrementValue) {
    return stock < threshold ? stock + incrementValue : --stock;
}

// 5. Bitwise Operators Task
function hasRequiredPermissions(userPermissions, requiredPermissions) {
    return (userPermissions & requiredPermissions) === requiredPermissions;
}

// Output Results
const results = [];

results.push("1. Total Cost: $" + calculateTotalCost(25, 4, 15).toFixed(2));
results.push("2. Final Amount after Taxes: $" + applyTaxes(120).toFixed(2));
results.push("3. Loyalty Discount: " + getLoyaltyDiscount(4, 35));
results.push("4. Updated Stock: " + processInventory(8, 10, 5));

// Permissions: 1=Read, 2=Write, 4=Execute
const READ = 1, WRITE = 2, EXECUTE = 4;
const userPerms = READ | WRITE;
results.push("5. Has Required Permissions (Read+Write): " + hasRequiredPermissions(userPerms, READ | WRITE));
results.push("5. Has All Permissions (Read+Execute): " + hasRequiredPermissions(userPerms, READ | EXECUTE));

// Display results on page
const resultBox = document.getElementById("results");
resultBox.textContent = results.join("\n");
