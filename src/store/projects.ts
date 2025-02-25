interface Project {
    id: number;  
    title: string;  
    image: string;  
    description: string;  
    date?: string;  
    link: string;  
    github: string;  
    technologyUsed: string[];  
    features: string[];  // ✅ List of key features  
    challenges: string[]; // ✅ Challenges faced during development  
    futurePlans?: string[]; // ✅ Planned updates or improvements (optional)  
}

const useProjects: Project[] = [
    {
        id: 3,
        title: 'FX Pilot',
        image: 'fxpilot.jpg',
        description: 'Online trading simulator with a wide range of features. Explore to view more.',
        date: 'October 20, 2024',
        link: 'https://fxpilot.austinemark.com',
        github: 'none',
        technologyUsed: ['React', 'Next.js', 'TypeScript', 'Node.js', 'WebSockets'],
        features: [
            'Live market simulation',
            'Real-time price tracking',
            'User portfolio management',
            'Trading history logs'
        ],
        challenges: [
            'Ensuring real-time data accuracy',
            'Implementing a scalable architecture',
            'Managing complex state efficiently'
        ],
        futurePlans: [
            'Adding AI-based trading assistance',
            'Integrating more global markets'
        ]
    },
    {
        id: 2,
        title: 'Nimbus Now',
        image: 'nimbusnow.jpg',
        description: 'Your real-time weather expert, delivering modern accurate forecasts from trusted APIs using artificial intelligence.',
        date: 'August 19, 2024',
        link: 'https://nimbusnow.austinemark.com',
        github: 'none',
        technologyUsed: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Open-Meteo API', 'TensorFlow.js'],
        features: [
            'Real-time weather updates',
            'Hourly and weekly forecasts',
            'AI-powered activity recommendations',
            'User location-based alerts'
        ],
        challenges: [
            'Optimizing API calls for performance',
            'Handling location-based data efficiently',
            'Ensuring accurate AI predictions'
        ],
        futurePlans: [
            'Enhancing AI-based recommendations',
            'Adding user-defined alert thresholds'
        ]
    },
    {
        id: 1,
        title: 'Gym Management',
        image: 'gymapp.jpg',
        description: 'Driven by innovation, this gym management web app helps gym businesses streamline their operations.',
        date: 'April 30, 2024',
        link: 'none',
        github: 'none',
        technologyUsed: ['React', 'Node.js', 'Express', 'MongoDB'],
        features: [
            'Membership management',
            'Class scheduling',
            'Payment processing',
            'Trainer-client communication'
        ],
        challenges: [
            'Ensuring secure user authentication',
            'Optimizing database queries for performance',
            'Managing scheduling conflicts'
        ],
        futurePlans: [
            'Mobile app integration',
            'Automated workout recommendations'
        ]
    }
];

export default useProjects;
