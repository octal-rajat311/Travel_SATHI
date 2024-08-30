/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import { GoogleGenerativeAI } from "@google/generative-ai";



const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location : las vegas, for 3 days for a couple with cheap budget. give me a hotels options with hotel name , address,price,image url,gei=o cordinates,rating , description and suggest a itinerary with place name, place  deatils,image url,geo cordinates, ticket ppricing, tie to travel each of the location for 3 days with each day plane with best time to visit in JSON format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{"hotel_options": [{"name": "The D Las Vegas", "address": "301 Fremont Street, Las Vegas, NV 89101", "price": "$40-$80 per night", "image_url": "https://www.theDcasino.com/images/hero-images/the-d-las-vegas-hotel-hero.jpg", "geo_coordinates": "36.1699,-115.1420", "rating": "3.5 stars", "description": "A budget-friendly hotel located in the heart of downtown Las Vegas, offering basic rooms and access to Fremont Street Experience."}, {"name": "Golden Nugget Las Vegas", "address": "129 E Fremont St, Las Vegas, NV 89101", "price": "$60-$120 per night", "image_url": "https://www.goldennugget.com/las-vegas/images/header-images/gn-lv-hero-image.jpg", "geo_coordinates": "36.1699,-115.1420", "rating": "4 stars", "description": "A historic hotel with a lively casino, multiple dining options, and a famous shark tank attraction."}, {"name": "Circus Circus Hotel & Casino", "address": "2880 S Las Vegas Blvd, Las Vegas, NV 89109", "price": "$30-$60 per night", "image_url": "https://www.circuscircus.com/images/hero-images/circus-circus-hero-image.jpg", "geo_coordinates": "36.1120,-115.1720", "rating": "3 stars", "description": "A budget-friendly hotel known for its circus-themed attractions, family-friendly atmosphere, and affordable rooms."}], "itinerary": [{"day": "Day 1", "plan": [{"time": "9:00 AM - 12:00 PM", "place": "Fremont Street Experience", "details": "Explore the vibrant pedestrian mall with its iconic canopy, street performers, and vintage casinos.", "image_url": "https://www.vegasexperience.com/media/images/freemont-street-experience-canopy.jpg", "geo_coordinates": "36.1699,-115.1420", "ticket_pricing": "Free", "notes": "Free live music and entertainment during the day."}, {"time": "12:00 PM - 2:00 PM", "place": "Heart Attack Grill", "details": "Indulge in a crazy burger experience at this themed restaurant known for its outrageous food and hospital setting.", "image_url": "https://www.heartattackgrill.com/images/gallery/heart-attack-grill-las-vegas-menu.jpg", "geo_coordinates": "36.1699,-115.1420", "ticket_pricing": "Around $15-$25 per meal", "notes": "Warning: Portions are very large."}, {"time": "2:00 PM - 5:00 PM", "place": "The Neon Museum", "details": "Wander through a collection of iconic Las Vegas neon signs from the city\'s past, showcasing a unique piece of history.", "image_url": "https://www.neonmuseum.org/media/images/neon-museum-signs.jpg", "geo_coordinates": "36.1738,-115.1509", "ticket_pricing": "$20-$25 per person", "notes": "Book tickets online in advance for a guided tour."}, {"time": "5:00 PM - 7:00 PM", "place": "Golden Gate Hotel & Casino", "details": "Grab a drink and enjoy the free live music at the historic Golden Gate Hotel & Casino.", "image_url": "https://www.goldengatehotelcasino.com/images/hero-images/golden-gate-hero-image.jpg", "geo_coordinates": "36.1699,-115.1420", "ticket_pricing": "Free", "notes": "Free to enter and enjoy the atmosphere."}, {"time": "7:00 PM - 9:00 PM", "place": "Dinner at a Buffet", "details": "Experience a Las Vegas buffet for dinner with a wide variety of cuisines and affordable prices.", "image_url": "https://www.caesars.com/content/dam/caesars/us/en/destinations/las-vegas/restaurants/bacchanal-buffet/bacchanal-buffet-hero.jpg", "geo_coordinates": "36.1699,-115.1420", "ticket_pricing": "$20-$40 per person", "notes": "Many casinos offer buffets with varying themes and prices."}]}, {"day": "Day 2", "plan": [{"time": "9:00 AM - 11:00 AM", "place": "The LINQ Promenade", "details": "Walk along this outdoor shopping and dining district with its famous High Roller observation wheel.", "image_url": "https://www.linq.com/images/hero-images/linq-promenade-hero-image.jpg", "geo_coordinates": "36.1199,-115.1718", "ticket_pricing": "Free", "notes": "Consider riding the High Roller for panoramic views of the Strip."}, {"time": "11:00 AM - 1:00 PM", "place": "Bellagio Conservatory & Botanical Garden", "details": "Admire the impressive floral displays and themed gardens at the Bellagio, changing seasonally.", "image_url": "https://www.bellagio.com/images/hero-images/bellagio-conservatory-hero-image.jpg", "geo_coordinates": "36.1143,-115.1740", "ticket_pricing": "Free", "notes": "Free entry for all visitors."}, {"time": "1:00 PM - 3:00 PM", "place": "The Venetian and The Palazzo", "details": "Explore the luxurious Venetian and Palazzo, with their canals, gondolas, and upscale shopping.", "image_url": "https://www.venetian.com/images/hero-images/venetian-hero-image.jpg", "geo_coordinates": "36.1281,-115.1720", "ticket_pricing": "Free", "notes": "Free to walk around and enjoy the ambiance."}, {"time": "3:00 PM - 5:00 PM", "place": "The Cosmopolitan of Las Vegas", "details": "Enjoy the stylish atmosphere of this modern hotel, known for its rooftop Chandelier Bar and Chupacabra Cocktail Lounge.", "image_url": "https://www.cosmopolitanlasvegas.com/images/hero-images/cosmopolitan-hero-image.jpg", "geo_coordinates": "36.1219,-115.1738", "ticket_pricing": "Free to enter", "notes": "Check out the unique art installations and vibrant nightlife."}, {"time": "5:00 PM - 7:00 PM", "place": "Dinner at a Casual Restaurant", "details": "Find a casual restaurant on the Strip with affordable prices and tasty food.", "image_url": "https://www.tripadvisor.com/Restaurants-g45963-Las_Vegas-Restaurants.html", "geo_coordinates": "36.1281,-115.1720", "ticket_pricing": "Around $15-$25 per person", "notes": "Consider using online resources to find deals and reviews."}]}, {"day": "Day 3", "plan": [{"time": "9:00 AM - 11:00 AM", "place": "Red Rock Canyon National Conservation Area", "details": "Escape the city and enjoy scenic views, hiking trails, and rock formations in this stunning natural area.", "image_url": "https://www.nps.gov/redr/planyourvisit/photos.htm", "geo_coordinates": "36.2241,-115.3193", "ticket_pricing": "$15 per vehicle", "notes": "Consider bringing snacks and water for your visit."}, {"time": "11:00 AM - 1:00 PM", "place": "Springs Preserve", "details": "Explore this unique outdoor museum showcasing desert ecology, art, and cultural exhibits.", "image_url": "https://www.springspreserve.org/images/hero-images/springs-preserve-hero-image.jpg", "geo_coordinates": "36.1954,-115.1714", "ticket_pricing": "$15 per adult", "notes": "Enjoy the botanical gardens, exhibits, and wildlife."}, {"time": "1:00 PM - 3:00 PM", "place": "Downtown Container Park", "details": "Discover this unique shopping and dining area made from repurposed shipping containers, featuring local vendors and art installations.", "image_url": "https://www.downtowncontainerpark.com/images/hero-images/downtown-container-park-hero-image.jpg", "geo_coordinates": "36.1706,-115.1439", "ticket_pricing": "Free", "notes": "Consider catching a show at the unique Container Park Amphitheater."}, {"time": "3:00 PM - 5:00 PM", "place": "The Mob Museum", "details": "Learn about the history of organized crime in Las Vegas and its impact on the city.", "image_url": "https://www.themobmuseum.org/images/hero-images/mob-museum-hero-image.jpg", "geo_coordinates": "36.1693,-115.1447", "ticket_pricing": "$25 per adult", "notes": "Book tickets online in advance for a guided tour."}, {"time": "5:00 PM - 7:00 PM", "place": "Dinner at a Local Restaurant", "details": "Find a local restaurant in downtown Las Vegas for an affordable and authentic dining experience.", "image_url": "https://www.tripadvisor.com/Restaurants-g45963-Las_Vegas-Restaurants.html", "geo_coordinates": "36.1699,-115.1420", "ticket_pricing": "Around $15-$25 per person", "notes": "Consider using online resources to find deals and reviews."}]}]}\n\n```',
        },
      ],
    },
  ],
});
