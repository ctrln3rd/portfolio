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
        title: 'tempest IQ',
        image: 'tempestiq',
        description: 'Track forecast data, smartly summerized and insighted just for you and your plans',
        date: 'April 1, 2025',
        link: 'https://tempestiq.netlify.app',
        github: 'https://github.com/ctrln3rd/tempest-iq',
        problem: 'Simplifying forecast information',
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
