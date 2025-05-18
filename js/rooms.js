document.addEventListener("DOMContentLoaded", () => {
const rooms = [
    {
        image: "assets/room1.jpg",
        title: "Deluxe Room",
        features: [
            "King-size bed",
            "Ensuite bathroom",
            "Free Wi-Fi",
            "City view"
        ]
    },
    {
        image: "assets/room2.jpg",
        title: "Suite Room",
        features: [
            "Spacious living area",
            "Private balcony",
            "Mini bar",
            "Complimentary breakfast"
        ]
    },
    {
        image: "assets/room3.jpg",
        title: "Standard Room",
        features: [
            "Queen-size bed",
            "Air conditioning",
            "Flat-screen TV",
            "Work desk"
        ]
    },
    {
        image: "assets/room4.jpg",
        title: "Family Room",
        features: [
            "Two double beds",
            "Kids play area",
            "Mini fridge",
            "Garden view"
        ]
    },
    {
        image: "assets/room5.jpg",
        title: "Executive Suite",
        features: [
            "King-size bed",
            "Private lounge",
            "Jacuzzi",
            "Personal butler"
        ]
    },
    {
        image: "assets/room6.jpg",
        title: "Penthouse",
        features: [
            "Panoramic city view",
            "Private terrace",
            "Luxury amenities",
            "Exclusive elevator access"
        ]
    }
    // Add more rooms here as needed
];

  const cardsContainer = document.querySelector(".rooms-cards");
  if (!cardsContainer) return;

  cardsContainer.innerHTML = rooms.map(room => `
    <div class="room-card">
      <img src="${room.image}" alt="${room.title}" class="room-image" />
      <h3 class="room-title">${room.title}</h3>
      <ul class="room-features">
        ${room.features.map(f => `<li>${f}</li>`).join("")}
      </ul>
      <a href="#book" class="btn book-btn">Book Now</a>
    </div>
  `).join("");
});