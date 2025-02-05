"use client"


const projects = [
  {
    title: 'E-Commerce Store',
    description: 'A fully functional e-commerce website built with Next.js and Tailwind CSS Real Site Order Now.',
    image: '/th1.png', // Add your image path here
    githubLink: 'https://github.com/asharibshahid/Hackathon-Ecommerce',
    deployLink: 'https://novacart1.vercel.app',
  },
  {
    title: 'Nike App Hackathon',
    description: 'A JoyFull Hackathon By Giaic q2 Sanity Studio and Next.js.',
    image: '/th2.png', // Add your image path here
    githubLink: 'https://github.com/asharibshahid/hackathon',
    deployLink: 'https://hackathon-seven-zeta.vercel.app/',
  },
  {
    title: 'Blogging Site TechTales',
    description: 'Dynamic Blogging Site with  Sanity+Next.js and Tailwind CSS.',
    image: '/th3.png', // Add your image path here
    githubLink: 'https://github.com/asharibshahid/Pakistan-sNova',
    deployLink: 'https://pakistan-s-nova-z7o5.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-fuchsia-900 via-fuchsia-700 to-stone-800 text-white">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <br />
        <br />
        <h2 className="projects-heading text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-12">My Projects</h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-gray-800 p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gray-700"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-6">{project.description}</p>
              
              <div className="flex justify-between">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub Repo
                </a>
                <a
                  href={project.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
