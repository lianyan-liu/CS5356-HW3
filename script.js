document.addEventListener("mousemove", (event) => {
    let navbar = document.querySelector(".navbar");

    let xRatio = event.clientX / window.innerWidth;
    let yRatio = event.clientY / window.innerHeight;

    let red = Math.min(200, Math.max(80, xRatio * 180 + 50));  // 80 - 200
    let green = Math.min(150, Math.max(60, yRatio * 120 + 50)); // 60 - 150
    let blue = Math.min(220, Math.max(90, (xRatio + yRatio) / 2 * 180 + 50)); // 90 - 220

    navbar.style.transition = "background-color 0.3s ease-out";
    navbar.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

document.addEventListener("DOMContentLoaded", function () {
    var map = L.map("map").setView([20, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    var places = [
        { name: "Hangzhou, China", coords: [30.2741, 120.1551], date: "Birthplace" },
        { name: "Hokkaido, Japan", coords: [43.2203, 142.8635], date: "2004" },
        { name: "Sri Lanka", coords: [7.8731, 80.7718], date: "2017" },
        { name: "Los Angeles, USA", coords: [34.0522, -118.2437], date: "2018" },
        { name: "Yellowstone National Park, USA", coords: [44.4280, -110.5885], date: "2018" },
        { name: "Las Vegas, USA", coords: [36.1699, -115.1398], date: "2018" },
        { name: "United Kingdom", coords: [51.5074, -0.1278], date: "2024" },
        { name: "New York City, USA", coords: [40.7128, -74.0060], date: "2024" },
        { name: "Boston, USA", coords: [42.3601, -71.0589], date: "2024" }
    ];
    

    places.forEach(place => {
        L.marker(place.coords)
            .addTo(map)
            .bindPopup(`<b>${place.name}</b><br>${place.date}`);
    });
});
