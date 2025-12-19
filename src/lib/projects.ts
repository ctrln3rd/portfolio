export type Project = {
    id: string,
    title: string,
    date: string,
    description: string,
    images?: string[],
    link?: string
}

export const projects: Project[] = [
    {
      id: "001",
      title: "conky theme",
      description: "n Svelte, the most common and Svelte-like way to get a component's width is by using bind:clientWidth. This allows you to sync a variable with the element's width in real-time without writing complex event listeners.",
      images: ["project1", "project1"],
      date: "oct, 2025"
    },
    {
      id: "002",
      title: "conky theme",
      description: "n Svelte, the most common and Svelte-like way to get a component's width is by using bind:clientWidth. This allows you to sync a variable with the element's width in real-time without writing complex event listeners.",
      images: ["project1", "project1", "project1", "project1"],
      date: "nov, 2025"
    },
    {
      id: "002",
      title: "conky theme",
      description: "n Svelte, the most common and Svelte-like way to get a component's width is by using bind:clientWidth. This allows you to sync a variable with the element's width in real-time without writing complex event listeners.",
      images: ["project1"],
      date: "dec, 2025"
    }
]