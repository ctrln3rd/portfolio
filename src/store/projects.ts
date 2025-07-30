export interface Project {
    id: number;  
    title: string;  
    image: string;    
    link?: string;  
    github?: string; 
    client?: string;
    collabo?: string;
    solution?: string;
      
}

const useProjects: Project[] = [
    {
        id: 3,
        title: 'FX Pilot',
        image: 'fxpilot',
        github: 'https://github.com/ctrln3rd/fx-pilot'
        
    },
    {
        id: 2,
        title: 'tempest IQ',
        image: 'tempestiq',
        link: 'https://tempestiq.netlify.app',
        github: 'https://github.com/ctrln3rd/tempest-iq',
        solution: 'Simplifying forecast information',
    },
    {
        id: 1,
        title: 'Gym Guru',
        image: 'gymguru',
        github: 'https://github.com/ctrln3rd/gym-guru',
        solution: 'Easier fitness track'
       
    }
];

export default useProjects;
