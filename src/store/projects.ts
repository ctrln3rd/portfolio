interface Project {
    id: number;  
    title: string;  
    image: string;  
    description: string;  
    date?: string;  
    link?: string;  
    github?: string;  
    technologyUsed: string[];  
    features: string[];  // ✅ List of key features  
}

const useProjects: Project[] = [
    {
        id: 3,
        title: 'FX Pilot',
        image: 'fxpilot',
        description: 'Online trading simulator with a wide range of features. Explore to view more.',
        date: 'October 20, 2024',
        link: 'https://fxpilot.austinemark.com',
        technologyUsed: ['React', 'Next.js', 'TypeScript', 'Node.js', 'WebSockets'],
        features: [
            'Live market simulation',
            'Real-time price tracking',
            'User portfolio management',
            'Trading history logs'
        ],
        
    },
    {
        id: 2,
        title: 'Nimbus Now',
        image: 'nimbusnow',
        description: 'Your real-time weather expert, delivering modern accurate forecasts from trusted APIs using artificial intelligence.',
        date: 'August 19, 2024',
        link: 'https://nimbusnow.austinemark.com',
        technologyUsed: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Open-Meteo API', 'TensorFlow.js'],
        features: [
            'Real-time weather updates',
            'Hourly and weekly forecasts',
            'AI-powered activity recommendations',
            'User location-based alerts'
        ],
    },
    {
        id: 1,
        title: 'Gym Management',
        image: 'gymapp',
        description: 'Driven by innovation, this gym management web app helps gym businesses streamline their operations.',
        date: 'April 30, 2024',
        technologyUsed: ['React', 'Node.js', 'Express', 'MongoDB'],
        features: [
            'Membership management',
            'Class scheduling',
            'Payment processing',
            'Trainer-client communication'
        ],
       
    }
];

export default useProjects;
