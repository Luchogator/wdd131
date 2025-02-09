document.addEventListener("DOMContentLoaded", function () {
    const temples = [
        {
            templeName: "Salt Lake Temple",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 253015,
            imageUrl: "images/salt-lake-temple.jpg"
        },
        {
            templeName: "San Diego Temple",
            location: "San Diego, California, United States",
            dedicated: "1993, April, 25",
            area: 72000,
            imageUrl: "images/san-diego-temple.jpg"
        },
        {
            templeName: "Provo City Center Temple",
            location: "Provo, Utah, United States",
            dedicated: "2016, March, 20",
            area: 85000,
            imageUrl: "images/provo-city-center-temple.jpg"
        },
        {
            templeName: "Mexico City Temple",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "images/mexico-city-temple.jpg"
        },
        {
            templeName: "Tokyo Japan Temple",
            location: "Tokyo, Japan",
            dedicated: "1980, October, 27",
            area: 52893,
            imageUrl: "images/tokyo-japan-temple.jpg"
        },
        {
            templeName: "Johannesburg South Africa Temple",
            location: "Johannesburg, South Africa",
            dedicated: "1985, August, 24",
            area: 52190,
            imageUrl: "images/johannesburg-south-africa-temple.jpg"
        },
        {
            templeName: "Sao Paulo Brazil Temple",
            location: "Sao Paulo, Brazil",
            dedicated: "1978, October, 30",
            area: 59946,
            imageUrl: "images/sao-paulo-brazil-temple.jpg"
        },
        {
            templeName: "Yigo Guam Temple",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "images/yigo-guam-temple.jpg"
        },
        {
            templeName: "Paris France Temple",
            location: "Paris, France",
            dedicated: "2017, May, 21",
            area: 44164,
            imageUrl: "images/paris-france-temple.jpg"
        },
        {
            templeName: "Mesa Arizona Temple",
            location: "Mesa, Arizona, United States",
            dedicated: "1927, October, 23",
            area: 113916,
            imageUrl: "images/mesa-arizona-temple.jpg"
        },
        {
            templeName: "Manila Philippines Temple",
            location: "Manila, Philippines",
            dedicated: "1984, September, 25",
            area: 26539,
            imageUrl: "images/manila-philippines-temple.jpg"
        },
        {
            templeName: "Buenos Aires Argentina Temple",
            location: "Buenos Aires, Argentina",
            dedicated: "1986, January, 17",
            area: 116000,
            imageUrl: "images/buenos-aires-temple.jpg"
        }
    ];

    function displayTemples(filteredTemples) {
        const container = document.getElementById("temple-container");
        container.innerHTML = "";

        filteredTemples.forEach((temple) => {
            const templeCard = document.createElement("div");
            templeCard.classList.add("temple-card");

            templeCard.innerHTML = `
                <figure>
                    <figcaption>
                        <h3>${temple.templeName}</h3>
                        <p><strong>Location:</strong> ${temple.location}</p>
                        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                        <p><strong>Size:</strong> ${temple.area} sq ft</p>
                    </figcaption>
                    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                </figure>
            `;

            container.appendChild(templeCard);
        });
    }

    // Event Listeners for Filtering
    document.getElementById("all").addEventListener("click", () => displayTemples(temples));

    document.getElementById("old").addEventListener("click", () => {
        displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900));
    });

    document.getElementById("new").addEventListener("click", () => {
        displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000));
    });

    document.getElementById("large").addEventListener("click", () => {
        displayTemples(temples.filter(t => t.area > 90000));
    });

    document.getElementById("small").addEventListener("click", () => {
        displayTemples(temples.filter(t => t.area < 10000));
    });

    // Load all temples by default
    displayTemples(temples);

    // Update footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModifiedDate").textContent = document.lastModified;
});
