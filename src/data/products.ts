
export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  brand: string;
  features: string[];
  rating: number;
  reviews: number;
  stock: number;
  isFeatured: boolean;
  isNew: boolean;
  colors: { name: string; value: string }[];
};

export const products: Product[] = [
  {
    id: "1",
    name: "TechFit Pro",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2564&auto=format&fit=crop",
    description: "The TechFit Pro is our flagship smartwatch with advanced health tracking, 5-day battery life, and a vibrant AMOLED display.",
    category: "Fitness",
    brand: "TechFit",
    features: [
      "Heart rate monitoring",
      "Sleep tracking",
      "GPS",
      "Water resistant (50m)",
      "5-day battery life",
      "AMOLED display"
    ],
    rating: 4.8,
    reviews: 356,
    stock: 42,
    isFeatured: true,
    isNew: false,
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Silver", value: "#C0C0C0" },
      { name: "Blue", value: "#0000FF" }
    ]
  },
  {
    id: "2",
    name: "LuxeWear Smartwatch",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2572&auto=format&fit=crop",
    description: "The LuxeWear combines elegant design with cutting-edge technology. Premium materials, customizable watch faces, and comprehensive health tracking.",
    category: "Luxury",
    brand: "LuxeWear",
    features: [
      "Premium stainless steel case",
      "Sapphire crystal display",
      "Health monitoring suite",
      "7-day battery life",
      "Wireless charging",
      "Voice assistant"
    ],
    rating: 4.7,
    reviews: 218,
    stock: 15,
    isFeatured: true,
    isNew: true,
    colors: [
      { name: "Gold", value: "#FFD700" },
      { name: "Silver", value: "#C0C0C0" },
      { name: "Rose Gold", value: "#B76E79" }
    ]
  },
  {
    id: "3",
    name: "ActiveTrack Sport",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=2574&auto=format&fit=crop",
    description: "Built for athletes and fitness enthusiasts. The ActiveTrack Sport offers advanced workout metrics, durability, and comfort for all-day wear.",
    category: "Sport",
    brand: "ActiveTrack",
    features: [
      "30+ sport modes",
      "Advanced running metrics",
      "Heart rate zones",
      "GPS and altimeter",
      "10-day battery life",
      "Rugged design"
    ],
    rating: 4.6,
    reviews: 412,
    stock: 56,
    isFeatured: false,
    isNew: false,
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Red", value: "#FF0000" },
      { name: "Green", value: "#008000" }
    ]
  },
  {
    id: "4",
    name: "SmartLife Essential",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?q=80&w=2670&auto=format&fit=crop",
    description: "The perfect entry-level smartwatch with all essential features at an affordable price. Track your health, receive notifications, and more.",
    category: "Essential",
    brand: "SmartLife",
    features: [
      "Heart rate monitoring",
      "Basic sleep tracking",
      "Notification alerts",
      "Water resistant (30m)",
      "3-day battery life",
      "Customizable watch faces"
    ],
    rating: 4.3,
    reviews: 567,
    stock: 89,
    isFeatured: false,
    isNew: false,
    colors: [
      { name: "Black", value: "#000000" },
      { name: "White", value: "#FFFFFF" },
      { name: "Blue", value: "#0000FF" }
    ]
  },
  {
    id: "5",
    name: "KidTrack Junior",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1610473087980-471e8c681d86?q=80&w=2570&auto=format&fit=crop",
    description: "Designed for children, the KidTrack Junior combines fun with safety features. GPS tracking, activity monitoring, and interactive games.",
    category: "Kids",
    brand: "KidTrack",
    features: [
      "GPS tracking",
      "SOS button",
      "Activity games",
      "Water resistant (30m)",
      "5-day battery life",
      "Parental controls"
    ],
    rating: 4.5,
    reviews: 193,
    stock: 27,
    isFeatured: false,
    isNew: true,
    colors: [
      { name: "Blue", value: "#0000FF" },
      { name: "Pink", value: "#FFC0CB" },
      { name: "Green", value: "#008000" }
    ]
  },
  {
    id: "6",
    name: "BizWatch Pro",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?q=80&w=2541&auto=format&fit=crop",
    description: "The BizWatch Pro is designed for professionals. Elegant design, productivity features, and long battery life for busy schedules.",
    category: "Business",
    brand: "BizTech",
    features: [
      "Calendar integration",
      "Email notifications",
      "Voice assistant",
      "Meeting reminders",
      "14-day battery life",
      "Premium design"
    ],
    rating: 4.6,
    reviews: 178,
    stock: 32,
    isFeatured: true,
    isNew: false,
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Brown", value: "#964B00" },
      { name: "Silver", value: "#C0C0C0" }
    ]
  },
  {
    id: "7",
    name: "HealthPro Monitor",
    price: 279.99,
    image: "https://images.unsplash.com/photo-1563861826100-c7b81fa7d787?q=80&w=2670&auto=format&fit=crop",
    description: "The HealthPro Monitor focuses on comprehensive health tracking with medical-grade sensors and detailed health insights.",
    category: "Health",
    brand: "HealthPro",
    features: [
      "ECG monitoring",
      "Blood oxygen levels",
      "Stress tracking",
      "Temperature sensor",
      "7-day battery life",
      "Health reports"
    ],
    rating: 4.7,
    reviews: 243,
    stock: 18,
    isFeatured: false,
    isNew: true,
    colors: [
      { name: "White", value: "#FFFFFF" },
      { name: "Black", value: "#000000" },
      { name: "Blue", value: "#0000FF" }
    ]
  },
  {
    id: "8",
    name: "OutdoorX Explorer",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?q=80&w=2670&auto=format&fit=crop",
    description: "Built for adventurers and outdoor enthusiasts. The OutdoorX Explorer offers rugged design, advanced navigation, and survival features.",
    category: "Outdoor",
    brand: "OutdoorX",
    features: [
      "Military-grade durability",
      "Advanced GPS navigation",
      "Compass and altimeter",
      "Weather alerts",
      "21-day battery life",
      "SOS features"
    ],
    rating: 4.8,
    reviews: 189,
    stock: 12,
    isFeatured: true,
    isNew: false,
    colors: [
      { name: "Olive", value: "#808000" },
      { name: "Black", value: "#000000" },
      { name: "Orange", value: "#FFA500" }
    ]
  }
];
