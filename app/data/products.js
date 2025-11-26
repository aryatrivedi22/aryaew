const products = [
    {
        id: "high-pressure-ball-valves",
        image: "/products/ball-valve.jpg",
        title: "High Pressure Ball Valves",
        description: "Premium quality ball valves designed for high-pressure industrial applications with superior sealing and durability.",
        specifications: [
            "Pressure Rating: Up to 6000 PSI",
            "Temperature Range: -20°C to 200°C",
            "Material: Stainless Steel 316/304",
            "Size Range: 1/4\" to 4\"",
            "End Connections: Threaded, Flanged, Welded",
            "Certification: ISO 9001, API 6D"
        ],
        features: [
            "Full bore design for maximum flow",
            "Fire-safe design with anti-static device",
            "Blow-out proof stem design",
            "PTFE/RTFE seat seals",
            "Locking device available"
        ],
        applications: [
            "Oil & Gas Industry",
            "Chemical Processing",
            "Power Generation",
            "Water Treatment Plants",
            "Pharmaceutical Manufacturing"
        ]
    },
    {
        id: "electrical-components",
        image: "/products/electrical-components.jpg",
        title: "Electrical Components",
        description: "Comprehensive range of industrial electrical components and connectors for reliable power distribution and control.",
        specifications: [
            "Voltage Rating: 240V to 690V AC",
            "Current Rating: Up to 630A",
            "Protection Grade: IP65 to IP68",
            "Material: Copper, Brass, Engineering Plastics",
            "Standards: IEC, IS, UL Compliant",
            "Temperature Rating: -40°C to 120°C"
        ],
        features: [
            "Corrosion-resistant construction",
            "Easy installation and maintenance",
            "Color-coded for easy identification",
            "Vibration and shock resistant",
            "Flame retardant materials"
        ],
        applications: [
            "Industrial Automation",
            "Control Panels",
            "Motor Control Centers",
            "Switchgear Assemblies",
            "Instrumentation Systems"
        ]
    },
    {
        id: "needle-valves",
        image: "/products/needle-valve.jpg",
        title: "Needle Valves",
        description: "Precision needle valves for accurate flow control in critical applications requiring fine-tuned regulation.",
        specifications: [
            "Pressure Rating: Up to 10,000 PSI",
            "Temperature Range: -40°C to 400°C",
            "Material: SS316, Alloy 400, Brass",
            "Connection: NPT, BSP, Compression",
            "Size: 1/8\" to 1\"",
            "Stem Material: Hardened Stainless Steel"
        ],
        features: [
            "Precise flow control capability",
            "Non-rotating stem tip design",
            "Zero dead volume design available",
            "Back-seating stem design",
            "Panel mounting options"
        ],
        applications: [
            "Instrumentation Systems",
            "Sampling Systems",
            "Gauge Isolation",
            "Process Control",
            "Laboratory Equipment"
        ]
    },
    {
        id: "industrial-hardware",
        image: "/products/industrial-hardware.jpg",
        title: "Industrial Hardware",
        description: "Durable hardware solutions for various industrial requirements including fasteners, fittings, and mounting components.",
        specifications: [
            "Material: Carbon Steel, SS304/316, Alloy Steel",
            "Finish: Zinc Plated, Hot Dip Galvanized, Passivated",
            "Grade: 4.8, 8.8, 10.9, 12.9",
            "Size Range: M3 to M64",
            "Standards: DIN, ISO, ASTM, IS",
            "Thread Types: Metric, UNC, UNF, BSW, BSF"
        ],
        features: [
            "High tensile strength",
            "Corrosion resistant options",
            "Precision manufactured",
            "Various head styles available",
            "Custom sizes on request"
        ],
        applications: [
            "Machinery Manufacturing",
            "Structural Engineering",
            "Automotive Industry",
            "Marine Applications",
            "Construction Projects"
        ]
    },
    {
        id: "t-elbows",
        image: "/products/t-elbows.jpg",
        title: "T Elbows",
        description: "High-quality T elbow fittings for efficient piping systems with excellent flow characteristics and leak-proof design.",
        specifications: [
            "Size Range: 1/8\" to 4\"",
            "Pressure Rating: 2000 to 6000 PSI",
            "Material: SS316L, Brass, Carbon Steel",
            "Connection Type: Compression, NPT, BSP, Welded",
            "Temperature Range: -20°C to 200°C",
            "Standards: ASME B16.11, ASTM"
        ],
        features: [
            "Seamless construction available",
            "Zero leakage design",
            "Easy installation",
            "Compact design saves space",
            "High flow capacity"
        ],
        applications: [
            "Hydraulic Systems",
            "Pneumatic Systems",
            "Process Piping",
            "Instrumentation",
            "Tube Routing Systems"
        ]
    },
    {
        id: "custom-fittings-assemblies",
        image: "/products/custom-fittings.jpg",
        title: "Custom Fittings & Assemblies",
        description: "Tailored fittings and assemblies designed to your exact specifications for unique industrial applications.",
        specifications: [
            "Material: As per customer requirement",
            "Pressure Rating: Up to customer specs",
            "Size: Custom designed",
            "Finish: As per application needs",
            "Testing: Hydrostatic, Pneumatic, NDT",
            "Documentation: Full traceability provided"
        ],
        features: [
            "Design consultation available",
            "Prototype development",
            "CAD/CAM design support",
            "Quality testing at every stage",
            "Fast turnaround time"
        ],
        applications: [
            "Special Purpose Machinery",
            "Research & Development",
            "Aerospace Components",
            "Defense Equipment",
            "Custom Automation Systems"
        ]
    },
    {
        id: "wiper-motors",
        image: "/products/wiper-motors.jpg",
        title: "Wiper Motors",
        description: "Industrial-grade wiper motors for various applications requiring reliable and consistent performance in harsh environments.",
        specifications: [
            "Voltage: 12V, 24V, 48V DC",
            "Speed: 30-120 RPM",
            "Torque: Up to 40 Nm",
            "Protection: IP65, IP67",
            "Motor Type: Permanent Magnet DC",
            "Mounting: Universal bracket system"
        ],
        features: [
            "Self-parking mechanism",
            "Overload protection",
            "Low noise operation",
            "Weather resistant",
            "Long service life"
        ],
        applications: [
            "Heavy Vehicles",
            "Construction Equipment",
            "Marine Vessels",
            "Agricultural Machinery",
            "Industrial Cleaning Systems"
        ]
    },
    {
        id: "oem-supply-b2b-bulk",
        image: "/products/oem-supply.jpg",
        title: "OEM Supply & B2B Bulk Orders",
        description: "Large-scale supply solutions for OEM and B2B requirements with competitive pricing and assured quality.",
        specifications: [
            "Minimum Order: As per agreement",
            "Lead Time: 2-8 weeks depending on quantity",
            "Quality: 100% inspected",
            "Packaging: As per customer requirement",
            "Payment Terms: Flexible options available",
            "Support: Dedicated account manager"
        ],
        features: [
            "Volume discounts available",
            "Consistent quality assurance",
            "Just-in-time delivery options",
            "Custom packaging solutions",
            "Technical support included"
        ],
        applications: [
            "Manufacturing Plants",
            "Assembly Lines",
            "Distribution Networks",
            "Resellers & Distributors",
            "Project-based Supply"
        ]
    }
];

export default products;

export const getProductById = (id) => {
    return products.find(product => product.id === id);
};
