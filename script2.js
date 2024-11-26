// Sample dataset of activities
const activities = [
    { name: "Jet Skiing Adventure", costRange: "1000 - 1,500 INR", ageRange:"15-50 years"  },
    { name: "Snorkeling", costRange: "800 - 1,000 INR",ageRange:"15-50 years" },
    { name: "Parasailing", costRange: "800 - 2,000 INR",ageRange:"15-55 years" }
];

// Injecting activity list into HTML
const activityList = document.querySelector('.activity-list');
activities.forEach((activity, index) => {
    const activityDiv = document.createElement('div');
    activityDiv.classList.add('activity-item');
    activityDiv.textContent = activity.name;
    activityDiv.addEventListener('click', () => showActivityDetails(index));
    activityList.appendChild(activityDiv);
});

// Show details for a specific activity when clicked
function showActivityDetails(index) {
    const activity = activities[index];
    const activityDetails = document.getElementById('activityDetails');
    
    activityDetails.innerHTML = `
        <h2>${activity.name}</h2>
        <p><strong>Cost Range:</strong> ${activity.costRange}</p>
        <p><strong>Age Group:</strong> ${activity.ageRange}</p>
       
    `;
    activityDetails.style.display = 'block';
}

// Redirect to the booking page with the selected activity
function bookActivity(activityName) {
    window.location.href = `booking.html?activity=${encodeURIComponent(activityName)}`;
}
