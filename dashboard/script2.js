// Sample dataset of activities

const activities = [
    {
      name: "Jet Skiing",
      beach: "Munambam Beach",
      location: "Kochi, India",
      price: "₹600 - ₹900/hour",
      timeSlot: "9:00 AM - 6:00 PM",
      description: "Jet Skiing at Munambam Beach is an exhilarating and adrenaline-pumping water sport activity. Riders can enjoy speeds of up to 60 km/h and pass through the splendid and elegant coastline in Kochi, Ernakulam. The activity is offered at Munambam Beach",
      image: "D:/Demo/img/jet.jpg"
    },
    {
      name: "Parasailing",
      beach: "Munambam Beach",
      location: "Kochi, India",
      price: "₹1800/hour (500 Meters)",
      timeSlot: "10:00 AM - 5:00 PM",
      description: "Enjoy a breathtaking view from above as you parasail over the ocean.",
      image: "D:/Demo/img/para.jpg"
    },
    {
      name: "Scuba Diving",
      beach: "Munambam Beach",
      location: "Kochi, India",
      price: "₹3000 - 4000/30-45 Min",
      timeSlot: "8:00 AM - 5:00 PM",
      description: "Explore underwater beauty and vibrant marine life.",
      image: "D:/Demo/img/scuba.jpg"
    },
    {
      name: "Boating ",
      beach: "Munambam Beach",
      location: "Kochi, India",
      price: "₹1000 - 2000/Hour",
      timeSlot: "10:00 AM - 5:00 PM",
      description: "Experience the tranquil beauty of Kerala's backwaters with this overnight Alleppey houseboat cruise from Kochi. Float past rural villages, coconut palms, rice paddies and more as you make your way through the narrow channels and expansive waterways known as the Venice of the East. It's one of the best ways to escape the chaos of the city and truly relax and unwind on your trip to India.",
      image: "D:/Demo/img/boating.jpg"
    }


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
    <img src="${activity.image}" alt="${activity.name}">
    <div>
        <h2>${activity.name}</h2>
        <p><strong>Cost Range:</strong> ${activity.beach}</p>
        <p><strong>Age Group:</strong> ${activity.location}</p>
        <p><strong>price:</strong> ${activity.price}</p>
        <p><strong>timeSlot:</strong> ${activity.timeSlot}</p>
        <p><strong>description:</strong> ${activity.description}</p>
    </div>    
       
    `;
    activityDetails.style.display = 'block';
}

// Redirect to the booking page with the selected activity
function bookActivity(activityName) {
    window.location.href = `booking.html?activity=${encodeURIComponent(activityName)}`;
}
