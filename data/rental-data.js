// NAVIGATION FOR RENTAL PAGE
const quickNavigation = [
    {
        title: "Hydraulic Jacking Equipment System",
        sectionId: "hydraulic",
    },
    {
        title: "Divers Launch and Recovery System (L.A.R.S)",
        sectionId: "lars",
    },
    {
        title: "Smart Car Parking Solutions",
        sectionId: "parking",
    },
    {
        title: "Suspended Rope Access Platform",
        sectionId: "suspended-rope",
    },
];

// RENTAL PRODUCTS
const rentalProducts = [
    {
        id: "hydraulic",
        title: "Hydraulic Jacking Equipment System",
        subtitle: "Advanced Hydraulic Jacking System Rentals for EPC Contractors",
        description: [
            "At Arya Engineering Works, we understand the capital constraints of large-scale projects. We provide a comprehensive Hydraulic Jacking Equipment Rental Scheme specifically designed for EPC contractors and tank fabricators.",
            "Instead of heavy upfront investments, leverage our top-tier hydraulic jacking systems to streamline your storage tank construction projects. Our rental solutions are fully compliant with API 653 standards, ensuring safety and precision in every lift."
        ],
        features: [
            "Capabilities: 12T, 18T, and 25T lifting capacities available",
            "Complete Package: Rentals include all necessary accessories, power packs, and hoses",
            "Global Reach: Serving clients across PAN India, GCC, and Southeast Asian countries",
            "Cost-Effective: Reduce your capital expenditure (CAPEX) while accessing world-class technology"
        ],
        images: ["/rental/hydraulic-jacking/2.webp", "/rental/hydraulic-jacking/1.webp"],
    },
    {
        id: "lars",
        title: "Divers Launch and Recovery System (L.A.R.S)",
        subtitle: "Compact L.A.R.S Rental Solutions for Air Diving Operations",
        description: [
            "Arya Engineering Works offers specially designed, compact Launch & Recovery Systems (LARS) for rent, perfect for offshore air diving operations where deck space is at a premium.",
            "Our LARS units are engineered to meet strict international standards (DNV/ABS/Lloyds/IMCA), guaranteeing safety and reliability in harsh marine environments."
        ],
        features: [
            "Compact Design: Ideal for vessels with limited deck space",
            "Certified: Meets DNV/ABS/Lloyds/IMCA international standards",
            "Safety First: Engineered for reliability in harsh marine environments",
            "Complete System: Includes all required accessories and safety equipment"
        ],
        images: ["/rental/LARS/1.jpeg", "/rental/LARS/2.jpeg", "/rental/LARS/3.webp", "/rental/LARS/4.webp"],
    },
    {
        id: "parking",
        title: "Smart Car Parking Solutions",
        subtitle: "Automated Car Parking Systems on Rent",
        description: [
            "Maximize your property's potential with Arya Engineering Works' Car Parking Rental Options. Whether for commercial complexes or corporate entities, our dependent parking systems offer a smart way to manage limited space."
        ],
        features: [
            "Space Optimization: Double your parking capacity without new construction",
            "Efficiency: Users find spots faster, saving time and fuel",
            "Flexibility: An ideal solution for temporary requirements or retrofitting existing lots"
        ],
        images: ["/rental/parking-system/1.webp", "/rental/parking-system/2.webp", "/rental/parking-system/3.webp"],
    },
    {
        id: "suspended-rope",
        title: "Suspended Rope Access Platform",
        subtitle: "Suspended Rope Access Platforms for Safe Height Works",
        description: [
            "Safety at heights is non-negotiable. Arya Engineering Works provides Suspended Rope Access Platforms on a rental basis, perfect for maintenance, painting, glazing, and welding tasks on high-rise structures."
        ],
        features: [
            "Versatile Application: Suitable for commercial buildings, industrial chimneys, tunnels, and infrastructure projects",
            "Certified Safety: All equipment is load-tested and maintained in strict compliance with the Maharashtra Factory Act",
            "Ready Stock: We maintain a fleet of diverse platform types ready for immediate deployment across India and GCC regions"
        ],
        images: ["/rental/suspended-rope/1.webp", "/rental/suspended-rope/2.jpeg", "/rental/suspended-rope/3.jpeg"],
    }
];

export { quickNavigation, rentalProducts };