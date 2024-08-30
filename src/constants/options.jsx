export const SelectTravelsList=[
    {
        id:1,
        title:'Just Me',
        desc:'A sole travels in exploration',
        icon:'✈️',
        people:'1 person'
    },

    {
        id:2,
        title:'Couple',
        desc:'Two travel in tandem',
        icon:'🥂',
        people:'2 people'
    },

    {
        id:3,
        title:'Family',
        desc:'A group of fun loving explorers',
        icon:'🏡',
        people:'3 to 5 people'
    },

    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill seekers',
        icon:'⛰️',
        people:'5 to 10 people'
    },
]


export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay concious of cost',
        icon:'💰'
    },

    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on moderate side',
        icon:'🪙'
    },

    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about cost',
        icon:'💸'
    },
]

export const AI_PROMPT='Generate Travel Plan for Location: {location}, for {noOfdays} Days for {traveler} with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the locatiolt for {noOfDays} days with each day plan with best time to visit in JSON format.'