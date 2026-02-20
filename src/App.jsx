import profileimage from './assets/images/imgdeniar.jpg'
import hadirApp from './assets/images/projectimg/hadirapp.png'
import hainick from './assets/images/projectimg/hainick.png'
import onebox from './assets/images/projectimg/onebox.png'
import simpus from './assets/images/projectimg/simpus.png'

function App() {
  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur shadow z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center">
          <div className="space-x-6 text-sm font-medium">
            <a href="#home" className="hover:text-blue-500">Home</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-24"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Hello, I'm <span className="text-blue-500">Deniar</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              A Web Developer focused on building modern, scalable, and maintainable applications,
              with hands-on experience across both frontend and backend development.
            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500 text-blue-500 px-6 py-3 rounded hover:bg-blue-50 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-72 h-72 rounded-full bg-blue-100 flex items-center justify-center">
              <img
                src={profileimage}
                alt="Deniar Profile"
                className="w-64 h-64 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          I am a web developer with a strong interest in modern web technologies.
          My primary focus is backend development using Golang, Laravel, and Python (FastAPI),
          while also having solid experience in frontend development with React and Tailwind CSS.
        </p>
        <p className="text-gray-600 leading-relaxed">
          I am currently expanding my knowledge in Machine Learning, particularly in areas related
          to data analysis and predictive modeling. I am passionate about building efficient,
          scalable, and maintainable systems that solve real-world problems.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 text-sm">
          {[
            "React",
            "Tailwind CSS",
            "Bootstrap",
            "Golang",
            "Laravel",
            "Phalcon",
            "Python",
            "FastAPI",
            "MySQL",
            "RESTful API",
            "Machine Learning",
            "Git",
          ].map(skill => (
            <div
              key={skill}
              className="bg-gray-100 px-4 py-2 rounded text-center font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12">Projects</h3>

          <div className="
            flex flex-col gap-8
            md:flex-row md:gap-6
            md:overflow-x-auto md:pb-4
            scroll-smooth
          ">
            {[
              {
                image: hadirApp,
                title: "Attendance Management Application",
                desc: "A web-based attendance management system enabling employee check-in/check-out, attendance tracking, and role-based access for administrators and staff.",
                url: "https://www.hadirapp.my.id/",
              },
              {
                image: hainick,
                title: "Hainick – Talent & Creator Management Website",
                desc: "A modern and responsive company profile website designed to support a talent and creator management agency, emphasizing clear information structure and strong brand identity.",
                url: "https://hainickreatif.com/",
              },
              {
                image: onebox,
                title: "OneBox – Prospect & Sales Management Module",
                desc: "Contributed to the development of prospect and sales management modules, featuring kanban boards and calendar views to improve sales workflow efficiency.",
                url: "https://onebox.co.id/",
              },
              {
                image: simpus,
                title: "SIMPUS – Medical Record Management Microservice",
                desc: "Contributed to the development of a medical record management microservice, focusing on secure data handling and system integration.",
                url: "https://ciptalife.id/",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="
                  bg-white rounded-xl shadow
                  hover:shadow-xl hover:-translate-y-1 transition
                  overflow-hidden
                  md:min-w-[320px] md:max-w-[320px]
                  flex-shrink-0
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <h4 className="font-bold text-xl mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 font-medium hover:underline"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>

        <p className="text-gray-600 mb-10 leading-relaxed">
          I am open to professional opportunities, collaborations, and project-based work.
          If you would like to discuss potential opportunities or collaborations,
          please feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:nerdiecorporation@gmail.com"
            className="bg-blue-500 text-white px-6 py-3 rounded text-center font-medium hover:bg-blue-600 transition"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/deniarauniam"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 px-6 py-3 rounded text-center font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            LinkedIn Profile
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm bg-gray-50">
        © {new Date().getFullYear()} Deniar. Built with React and Tailwind CSS.
      </footer>
    </div>
  )
}

export default App