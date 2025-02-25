interface Testimonial {
    id: number;
    name: string;
    title: string;
    company: string;
    content: string;
    link?: string;
}

const useTestimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Prudence',
        content: `Austine my teammate consistently delivers high-qualty work and a supportive team player. A true asset to any tech project.`,
        title: 'software developer',
        company: 'MUT',
    },
    {
        id: 2,
        name: 'David',
        content: `I worked with Austine on a recent web development project and was highly impressed. I highly recommend Austine for top-notch web development services`,
        title: 'software developer',
        company: 'JKUAT',
    },
    {
        id: 3,
        name: 'Calvin',
        content: `I feel fortunate to have Austine as a teammate. Learning and growing alongside him has been a priviledge`,
        title: 'software developer',
        company: 'MUT',
    },
    {
        id: 4,
        name: 'Lemik',
        content: `Studying with Austine has revealed his skills in web design and software development.His teamwork and attitude make him a joy to work with`,
        title: 'cyber security',
        company: 'MUT',
    }
]

export default useTestimonials;