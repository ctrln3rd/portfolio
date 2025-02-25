const Projects = [
    {
        id: 'p003',
        title: 'fx pilot',
        description: 'online trading simulator with wide range of features explore to view more',
        date: 'October 20, 2024',
        link: 'https://fxpilot.austinemark.com',
        github: 'none',
        image: 'fxpilot.jpg',
        markdown: 'fxpilot'
    },
    {
        id: 'p002',
        title: 'nimbus now',
        description: 'your real-time weather expert, dilevering modern accurate forecasts from trusted API using artificial intelligence',
        date: 'August 19, 2024',
        link: 'https://nimbusnow.austinemark.com',
        github: 'none',
        image: 'nimbusnow.jpg',
        markdown: 'nimbusnow'
    },
    {
        id: 'p001',
        title: 'gym management',
        description: 'driven by innovative mind created a gym management web app that can be used by gym businesses',
        date: 'April 30, 2024',
        link: 'none',
        github: 'none',
        image: 'gymapp.jpg',
        markdown: 'gymapp'
    }
]

/*image: `${process.env.PUBLIC_URL}/images/testimonials/prudence.jpg`,*/

const Testimonials = [
    {
        id: '001',
        name: 'Prudence',
        content: `Austine my teammate consistently delivers high-qualty work and a supportive team player. A true asset to any tech project.`,
        title: 'software developer',
        company: 'MUT',
    },
    {
        id: '002',
        name: 'David',
        content: `I worked with Austine on a recent web development project and was highly impressed. I highly recommend Austine for top-notch web development services`,
        title: 'software developer',
        company: 'JKUAT',
    },
    {
        id: '003',
        name: 'Calvin',
        content: `I feel fortunate to have Austine as a teammate. Learning and growing alongside him has been a priviledge`,
        title: 'software developer',
        company: 'MUT',
    },
    {
        id: '004',
        name: 'Lemik',
        content: `Studying with Austine has revealed his skills in web design and software development.His teamwork and attitude make him a joy to work with`,
        title: 'cyber security',
        company: 'MUT',
    }
]


const shuffleArray = (arr)=>{
    return arr.sort(()=> Math.random() - 0.5)
  }
const projects = shuffleArray(Projects);
const testimonials = shuffleArray(Testimonials);



const technologies = [
   {
        title: 'frontend development',
        description: 'Some of the modern powerful tools enabling me create modern user interfaces: react a javascript library, tailwind css, html 5',
        icons: [
            {name: 'React', icon: 'react.png'},
            {name: 'Tailwind css', icon: 'tailwind.png'},
            {name: 'Html 5', icon: 'html5.png'}
        ]
    },
    {
        title: 'backend development',
        description: 'For server-side development, I work with technologies such as nodejs because of its speed, python django for robust applications and flask for simple one',
        icons: [
            {name: 'Node', icon: 'node.png'},
            {name: 'Django', icon: 'django.png'},
            {name: 'Flask', icon: 'flask.png'}
        ]
    },
    {
        title: 'Cloud solutions',
        description: 'I utilize popular and reliable cloud plartforms like aws, gcp and firebase',
        icons: [
            {name: 'AWS', icon: 'aws.png'},
            {name: 'GCP', icon: 'gcp.png'},
            {name: 'firebase', icon: 'firebase.png'}
        ]
    },
    {
        title: 'machine learning and AI',
        description: 'I use tecgnologies and frameworks like python, javascript, tensorflow framework, pytorch and etc for machine learning and Ai',
        icons: [
            {name: 'Python', icon: 'python.png'},
            {name: 'Javascript', icon: 'javascript.png'},
            {name: 'tensorflow', icon: 'tensorflow.png'},
            {name: 'pytorch', icon: 'pytorch.png'}
        ]
    }
]

const otherprojects = [
    {   
        id: 'op001',
        title: 'personal website',
        description: 'personal site I created to showcase my expertise, things I have created, contact info and much more',
        link: 'https://austinemark.com',
        github: 'https://github.com'
    },
]

export {projects, testimonials, technologies, otherprojects}