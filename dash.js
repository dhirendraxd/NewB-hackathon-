es
const totalVegetables = 100;
const contributingFarmers = 10;
const recentContributions = [
    { type: 'Carrot', quantity: 20, farmer: 'Alice' },
    { type: 'Tomato', quantity: 15, farmer: 'Bob' },
    { type: 'Lettuce', quantity: 10, farmer: 'Charlie' }
];
const leaderboardData = [
    { name: 'John Doe', contributions: 30 },
    { name: 'Jane Doe', contributions: 25 },
    { name: 'Bob Smith', contributions: 20 }
];
document.getElementById('totalVegetables').innerText = totalVegetables;
document.getElementById('contributingFarmers').innerText = contributingFarmers;

const contributionsList = document.getElementById('contributionsList');
recentContributions.forEach(contribution => {
    const listItem = document.createElement('li');
    listItem.innerText = `${contribution.type} - ${contribution.quantity} units by ${contribution.farmer}`;
    contributionsList.appendChild(listItem);
});
const leaderboardList = document.getElementById('leaderboardList');
leaderboardData.forEach(entry => {
    const listItem = document.createElement('li');
    listItem.innerText = `${entry.name} - ${entry.contributions} contributions`;
    leaderboardList.appendChild(listItem);
});
