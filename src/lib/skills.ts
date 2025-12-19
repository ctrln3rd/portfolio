export type Skill ={
    id: string,
    title: string,
    sub?: string[]
}
export const skills = [
  {
    id: "001",
    title: "Full stack apps",
    sub: ["next.js", "svelte", "tailwind css", "typescript"]
  },
  {
    id: "002",
    title: "cloud computing",
    sub: ["aws", "gcp", "cloudflare"]
  },
  {
    id: "003",
    title: "ai intergration",
    sub: ["ai agent", "apis"]
  }
]