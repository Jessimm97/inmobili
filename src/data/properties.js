const agents = {
    sarah: {
        name: "Sarah Connors",
        photo: "https://i.pravatar.cc/150?img=5",
        phone: "529981112222",
        email: "sarah@inmobiliapp.com"
    },
    mike: {
        name: "Mike Ross",
        photo: "https://i.pravatar.cc/150?img=11",
        phone: "529983334444",
        email: "mike@inmobiliapp.com"
    },
    elena: {
        name: "Elena Fisher",
        photo: "https://i.pravatar.cc/150?img=9",
        phone: "529985556666",
        email: "elena@inmobiliapp.com"
    }
};

export const propertiesData = [
    { 
        id: 1, 
        title: "Oceanfront Luxury Villa",
        location: "Zona Hotelera, Cancún",
        price: '$250,000', 
        bedrooms: 3, 
        baths: 2, 
        stories: 1, 
        img: '/images/exampleHouse.svg',
        description: "Wake up to the sound of waves in this stunning oceanfront villa. Features an open-concept living area, a chef's kitchen, and direct access to a private beach. Perfect for vacation rentals or a family getaway.",
        features: ["Ocean View", "Private Beach", "Chef's Kitchen", "24/7 Security"],
        agent: agents.sarah 
    },
    { 
        id: 2, 
        title: "Modern Family Home",
        location: "Puerto Cancún",
        price: '$450,000', 
        bedrooms: 4, 
        baths: 3, 
        stories: 2, 
        img: '/images/exampleHouse.svg',
        description: "Located in the exclusive Puerto Cancún area, this modern home offers state-of-the-art amenities, including a smart home system, private pool, and access to the golf course.",
        features: ["Golf Course Access", "Smart Home", "Private Pool", "Gated Community"],
        agent: agents.mike
    },
    { 
        id: 3, 
        title: "Cozy Downtown Apartment",
        location: "Downtown Cancún",
        price: '$180,000', 
        bedrooms: 2, 
        baths: 1, 
        stories: 1, 
        img: '/images/exampleHouse.svg',
        description: "A perfect starter home or investment opportunity. This cozy apartment is located in the heart of downtown, walking distance to markets, restaurants, and parks.",
        features: ["Central Location", "Low HOA", "Newly Renovated", "Balcony"],
        agent: agents.elena
    },
    { 
        id: 4, 
        title: "Penthouse with Lagoon View",
        location: "Zona Hotelera, Cancún",
        price: '$600,000', 
        bedrooms: 5, 
        baths: 4, 
        stories: 2, 
        img: '/images/exampleHouse.svg',
        description: "Experience luxury at its finest in this spacious penthouse. Enjoy panoramic views of the Nichupté Lagoon, a private rooftop terrace, and exclusive marina access.",
        features: ["Lagoon View", "Rooftop Terrace", "Marina Access", "Gym"],
        agent: agents.sarah
    },
    { 
        id: 5, 
        title: "Colonial Style Hacienda",
        location: "Álamos II, Cancún",
        price: '$320,000', 
        bedrooms: 3, 
        baths: 2, 
        stories: 1, 
        img: '/images/exampleHouse.svg',
        description: "Beautiful colonial-style home with high ceilings, traditional mexican tile floors, and a lush internal garden. A peaceful oasis in the middle of the city.",
        features: ["Garden", "High Ceilings", "Pet Friendly", "Covered Parking"],
        agent: agents.elena
    },
    { 
        id: 6, 
        title: "Contemporary Smart Home",
        location: "Huayacán, Cancún",
        price: '$500,000', 
        bedrooms: 4, 
        baths: 3, 
        stories: 2, 
        img: '/images/exampleHouse.svg',
        description: "Brand new construction on Avenida Huayacán. This smart home features solar panels, filtered water systems throughout, and a minimalist design.",
        features: ["Solar Panels", "Minimalist Design", "Pool", "Fast Internet"],
        agent: agents.mike
    },
    { 
        id: 7, 
        title: "Beachside Condo",
        location: "Punta Sam",
        price: '$210,000', 
        bedrooms: 2, 
        baths: 2, 
        stories: 1, 
        img: '/images/exampleHouse.svg',
        description: "An affordable option for beach lovers. This condo complex features a communal pool, tennis courts, and is just steps away from the ferry to Isla Mujeres.",
        features: ["Communal Pool", "Tennis Court", "Near Ferry", "Air Conditioning"],
        agent: agents.sarah
    },
    { 
        id: 8, 
        title: "Exclusive Mansion",
        location: "Lagos del Sol",
        price: '$750,000', 
        bedrooms: 5, 
        baths: 4, 
        stories: 3, 
        img: '/images/exampleHouse.svg',
        description: "The crown jewel of Lagos del Sol. This massive 3-story mansion features a home theater, wine cellar, and lakeside views. Security and privacy guaranteed.",
        features: ["Lake View", "Home Theater", "Wine Cellar", "Triple Garage"],
        agent: agents.mike
    },
    { 
        id: 9, 
        title: "Investment Studio",
        location: "Plaza Las Américas Area",
        price: '$290,000', 
        bedrooms: 3, 
        baths: 2, 
        stories: 1, 
        img: '/images/exampleHouse.svg',
        description: "High ROI potential. This property is zoned for short-term rentals and is located next to the biggest shopping mall in the city.",
        features: ["Shopping Nearby", "Airbnb Friendly", "Modern Finishes", "Elevator"],
        agent: agents.elena
    },
    { 
        id: 10, 
        title: "Family Residence",
        location: "Jardines del Sur",
        price: '$380,000', 
        bedrooms: 3, 
        baths: 2.5, 
        stories: 2, 
        img: '/images/exampleHouse.svg',
        description: "A wonderful place to raise a family. The residential area offers parks, schools within walking distance, and a very safe environment.",
        features: ["Near Schools", "Parks", "Kids Area", "Double Security"],
        agent: agents.sarah
    }
];