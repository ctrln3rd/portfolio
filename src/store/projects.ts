interface Project {
    id: number;  
    title: string;  
    image: string;  
    description: string;  
    date?: string;  
    link?: string;  
    github?: string; 
    client?: string;
    collabo?: string;
    problem?: string;
      
}

const useProjects: Project[] = [
    {
        id: 3,
        title: 'FX Pilot',
        image: 'fxpilot',
        description: 'Online trading simulator with a wide range of features. Explore to view more.',
        date: 'October 20, 2024',
        github: 'https://github.com/ctrln3rd/fx-pilot'
        
    },
    {
        id: 2,
        title: 'Weather Rush',
        image: 'weatherrush',
        description: 'Your real-time weather expert, delivering modern accurate forecasts from trusted APIs using artificial intelligence.',
        date: 'Feb 25, 2025',
        link: 'https://weatherrush.netlify.app',
        github: 'https://github.com/ctrln3rd/weather-rush',
        problem: 'Simplifying weather information',
        client: 'world'
    },
    {
        id: 1,
        title: 'Gym Guru',
        image: 'gymguru',
        description: 'Driven by innovation, this gym management web app helps gym businesses streamline their operations.',
        date: 'April 30, 2024',
        github: 'https://github.com/ctrln3rd/gym-guru',
        problem: 'Easier fitness track'
       
    }
];

export default useProjects;
