// app/components/Projects.tsx
export default function Projects() {
  const projects = [
    { title: "Smart Task Reminders", description: "et intelligent reminders based on task priority and deadlines. ", link: "#" },
    { title: "Collaborative Task Sharing", description: "Share tasks and to-do lists with friends, family, or colleagues. ", link: "#" },
    { title: "Progress Analytics", description: "Track your productivity with built-in analytics that visualize your task completion trends over time. ", link: "#" },
  ];

  return (
    <section id="projects" className="py-16 bg-background text-center">
      <h2 className="text-3xl font-bold text-primary mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-secondary font-medium hover:underline"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
