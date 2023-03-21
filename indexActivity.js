console.log("Hello, Welcome to De La Salle University!");

function computeSupply (age, amountPerDay) {
    const maxAge = 100;
    const years = maxAge - age;
    const annualExpenses = amountPerDay * 365;
    const lifetimeSupply = annualExpenses * years;
    console.log(`You need ${Math.round(lifetimeSupply)} to last you until the ripe old age of ${maxAge}`)
}
computeSupply(22, 2);
computeSupply(16, 7);
computeSupply(36, 5.5);