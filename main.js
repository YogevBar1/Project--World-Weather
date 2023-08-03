"use strict";

(() => {
    const selectCountry = document.getElementById("selectCountry");
    const selectCity = document.getElementById("selectCity");
    const weatherContainer = document.getElementById("weatherContainer");

    const citiesByCountry = {
        Israel: [
            "Tel Aviv",
            "Jerusalem",
            "Haifa",
            "Beersheba",
            "Eilat",
            "Netanya",
            "Ashdod",
            "Herzliya",
            "Rishon LeZion",
            "Holon",
            "Petah Tikva",
            "Rehovot",
            "Ashkelon",
            "Nahariya",
            "Tiberias",
            "Acre",
            "Modi'in",
            "Beit Shemesh",
            "Hadera",
            "Kfar Saba",
            "Lod",
            "Ra'anana",
            "Bat Yam",
            "Ramla",
            "Dimona",
            "Sderot",
            "Nazareth",
            "Qalansawe",
            "Umm al-Fahm"
        ],
        USA: [
            "New York",
            "Los Angeles",
            "Chicago",
            "Houston",
            "Phoenix",
            "Philadelphia",
            "San Antonio",
            "San Diego",
            "Dallas",
            "San Jose",
            "Austin",
            "Fort Worth",
            "Jacksonville",
            "Columbus",
            "Charlotte",
            "San Francisco",
            "Indianapolis",
            "Seattle",
            "Denver",
            "Washington, D.C.",
            "Boston",
            "Nashville",
            "Baltimore",
            "Oklahoma City",
            "Louisville",
            "Portland",
            "Las Vegas",
            "Milwaukee",
            "Albuquerque",
            "Tucson"
        ],
        UK: [
            "London",
            "Manchester",
            "Birmingham",
            "Glasgow",
            "Liverpool",
            "Leeds",
            "Newcastle",
            "Edinburgh",
            "Sheffield",
            "Bristol",
            "Cardiff",
            "Belfast",
            "Aberdeen",
            "Southampton",
            "Coventry",
            "Leicester",
            "Brighton",
            "Hull",
            "Plymouth",
            "Stoke-on-Trent",
            "Derby",
            "Swansea",
            "Sunderland",
            "Leeds",
            "Reading",
            "Nottingham",
            "Bradford",
            "Kingston upon Hull",
            "Wolverhampton",
            "Preston"
        ],
        Canada: [
            "Toronto",
            "Montreal",
            "Vancouver",
            "Calgary",
            "Edmonton",
            "Ottawa",
            "Winnipeg",
            "Quebec City",
            "Hamilton",
            "London",
            "Victoria",
            "Halifax",
            "Kitchener",
            "Windsor",
            "Oshawa",
            "Saskatoon",
            "Regina",
            "St. John's",
            "Barrie",
            "Kelowna",
            "Abbotsford",
            "Sherbrooke",
            "Trois-Rivières",
            "Guelph",
            "Kingston",
            "Sudbury",
            "Chicoutimi",
            "Thunder Bay",
            "Moncton"
        ],
        Australia: [
            "Sydney",
            "Melbourne",
            "Brisbane",
            "Perth",
            "Adelaide",
            "Gold Coast",
            "Canberra",
            "Newcastle",
            "Wollongong",
            "Geelong",
            "Hobart",
            "Townsville",
            "Cairns",
            "Darwin",
            "Toowoomba",
            "Ballarat",
            "Bendigo",
            "Albury",
            "Launceston",
            "Mackay",
            "Rockhampton",
            "Bunbury",
            "Coffs Harbour",
            "Bundaberg",
            "Wagga Wagga",
            "Hervey Bay",
            "Mildura",
            "Warrnambool",
            "Kalgoorlie"
        ],
        Germany: [
            "Berlin",
            "Hamburg",
            "Munich",
            "Cologne",
            "Frankfurt",
            "Stuttgart",
            "Düsseldorf",
            "Dortmund",
            "Essen",
            "Leipzig",
            "Bremen",
            "Dresden",
            "Hanover",
            "Nuremberg",
            "Duisburg",
            "Bochum",
            "Wuppertal",
            "Bielefeld",
            "Bonn",
            "Münster",
            "Karlsruhe",
            "Mannheim",
            "Augsburg",
            "Wiesbaden",
            "Gelsenkirchen",
            "Mönchengladbach",
            "Braunschweig",
            "Chemnitz",
            "Kiel"
        ],
        France: [
            "Paris",
            "Marseille",
            "Lyon",
            "Toulouse",
            "Nice",
            "Nantes",
            "Strasbourg",
            "Montpellier",
            "Bordeaux",
            "Lille",
            "Rennes",
            "Reims",
            "Le Havre",
            "Cergy",
            "Saint-Étienne",
            "Toulon",
            "Angers",
            "Grenoble",
            "Dijon",
            "Nîmes",
            "Aix-en-Provence",
            "Saint-Quentin-en-Yvelines",
            "Brest",
            "Le Mans",
            "Amiens",
            "Tours",
            "Limoges",
            "Clermont-Ferrand",
            "Villeurbanne"
        ],
        Japan: [
            "Tokyo",
            "Yokohama",
            "Osaka",
            "Nagoya",
            "Sapporo",
            "Fukuoka",
            "Kobe",
            "Kyoto",
            "Kawasaki",
            "Saitama",
            "Hiroshima",
            "Sendai",
            "Kitakyushu",
            "Chiba",
            "Sakai",
            "Shizuoka",
            "Nerima",
            "Okayama",
            "Kumamoto",
            "Hamamatsu",
            "Hachioji",
            "Suginami",
            "Amagasaki",
            "Nishinomiya",
            "Kawaguchi",
            "Kanazawa",
            "Utsunomiya",
            "Oita",
            "Matsudo",
            "Kurashiki"
        ],
        Brazil: [
            "São Paulo",
            "Rio de Janeiro",
            "Salvador",
            "Brasília",
            "Fortaleza",
            "Belo Horizonte",
            "Manaus",
            "Curitiba",
            "Recife",
            "Porto Alegre",
            "Belém",
            "Goiânia",
            "Guarulhos",
            "Campinas",
            "São Luís",
            "São Gonçalo",
            "Maceió",
            "Duque de Caxias",
            "Natal",
            "Teresina",
            "Campo Grande",
            "Osasco",
            "Aracaju",
            "Cuiabá",
            "Feira de Santana",
            "Joinville",
            "Londrina",
            "Niterói",
            "Belford Roxo"
        ],
        China: [
            "Shanghai",
            "Beijing",
            "Tianjin",
            "Guangzhou",
            "Shenzhen",
            "Chongqing",
            "Chengdu",
            "Nanjing",
            "Wuhan",
            "Hangzhou",
            "Xi'an",
            "Shenyang",
            "Harbin",
            "Jinan",
            "Dalian",
            "Zhengzhou",
            "Changsha",
            "Kunming",
            "Qingdao",
            "Guiyang",
            "Shijiazhuang",
            "Taiyuan",
            "Changchun",
            "Ürümqi",
            "Lanzhou",
            "Hefei",
            "Fuzhou",
            "Nanning",
            "Haikou"
        ],
        Russia: [
            "Moscow",
            "Saint Petersburg",
            "Novosibirsk",
            "Yekaterinburg",
            "Nizhny Novgorod",
            "Kazan",
            "Chelyabinsk",
            "Omsk",
            "Samara",
            "Rostov-on-Don",
            "Ufa",
            "Krasnoyarsk",
            "Voronezh",
            "Perm",
            "Volgograd",
            "Krasnodar",
            "Saratov",
            "Tyumen",
            "Tolyatti",
            "Izhevsk",
            "Barnaul",
            "Ulyanovsk",
            "Irkutsk",
            "Khabarovsk",
            "Yaroslavl",
            "Vladivostok",
            "Tomsk",
            "Orenburg",
            "Kemerovo"
        ],
        India: [
            "Mumbai",
            "Delhi",
            "Bangalore",
            "Hyderabad",
            "Ahmedabad",
            "Chennai",
            "Kolkata",
            "Surat",
            "Pune",
            "Jaipur",
            "Lucknow",
            "Kanpur",
            "Nagpur",
            "Indore",
            "Thane",
            "Bhopal",
            "Visakhapatnam",
            "Pimpri-Chinchwad",
            "Patna",
            "Vadodara",
            "Ghaziabad",
            "Ludhiana",
            "Agra",
            "Nashik",
            "Faridabad",
            "Meerut",
            "Rajkot",
            "Varanasi",
            "Srinagar",
            "Aurangabad"
        ]
    };


    function populateCities() {
        const selectedCountry = selectCountry.value;
        const cities = citiesByCountry[selectedCountry] || [];

        // Clear previous options
        selectCity.innerHTML = "";

        // Add new options for cities
        if (cities.length === 0) {
            const option = document.createElement("option");
            option.textContent = "Select city";
            selectCity.appendChild(option);
        } else {
            cities.forEach(city => {
                const option = document.createElement("option");
                option.textContent = city;
                selectCity.appendChild(option);
            });
        }
    }
    selectCountry.addEventListener("change", populateCities);

    async function getJSON(url) {
        // Get JSON from REST API
        // 1. Get response back
        const response = await fetch(url);
        // 2. Extract data as JSON
        const data = await response.json();
        return data;
    }

    selectCity.addEventListener("change", async () => {
        const selectedCity = selectCity.value;
        if (selectedCity === "Select city") {
            // User has not selected any city yet, do nothing
            return;
        }

        let city = selectedCity;

        const apiKey = 'da13201d36831242cbc1d64dc1fa4c04';
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

        const weather = await getJSON(url);
        console.log(weather);

        const temperature = weather.list[0].main.temp; // Get the current temperature from the weather data
        const text = `The weather in ${city} is ${temperature} C`;

        weatherContainer.innerHTML = text;
    });

    // Populate the cities select initially
    populateCities();
})();