import './globals.css';

export const metadata = {
  title: "NIGAPE - Job Bootcamp in Generative AI & Prompt Engineering | Admissions Open",
  description: "Master Generative AI, LLMs, AI Agents & Prompt Engineering with NIGAPE. Immersive South Delhi Campus (GK2) & Live Online cohorts with 1:1 Mentorship & 100% Placement Support.",
  keywords: "Generative AI bootcamp, Prompt Engineering course Delhi, Nigape AI, AI Agents, LLM course, Coding Ninjas alternative, AI Job Bootcamp",
  openGraph: {
    title: "NIGAPE - Job Bootcamp in Generative AI & Prompt Engineering",
    description: "Build production-ready AI agents and high-paying careers in GenAI with 1:1 industry mentorship.",
    type: "website",
    locale: "en_IN",
    siteName: "NIGAPE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>" />
      </head>
      <body className="bg-black text-white antialiased selection:bg-[#FF40EB] selection:text-white">
        {children}
      </body>
    </html>
  );
}
