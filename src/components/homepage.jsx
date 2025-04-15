import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  // Sample statistics data
  const stats = [
    { label: "Active Users", value: "10,000+" },
    { label: "Tasks Completed", value: "1.2M+" },
    { label: "Projects Managed", value: "25,000+" },
    { label: "Time Saved", value: "120,000 hrs" },
  ];

  // Sample features
  const features = [
    {
      title: "Task Management",
      description:
        "Create, organize, and prioritize your tasks with ease. Set deadlines, add notes, and track progress.",
      bgColor: "bg-blue-500",
      btnText: "Try Task Manager",
      btnLink: "/tasks",
    },
    {
      title: "Project Collaboration",
      description:
        "Work together with your team on projects. Share tasks, updates, and track milestones together.",
      bgColor: "bg-purple-500",
      btnText: "Start Collaborating",
      btnLink: "/projects",
    },
    {
      title: "Calendar Integration",
      description:
        "Visualize your schedule and deadlines. Sync with other calendar apps to manage your time effectively.",
      bgColor: "bg-green-500",
      btnText: "View Calendar",
      btnLink: "/calendar",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Get detailed insights into your productivity, team performance, and project progress with visual reports.",
      bgColor: "bg-yellow-500",
      btnText: "See Analytics",
      btnLink: "/analytics",
    },
    {
      title: "Mobile Access",
      description:
        "Access your tasks and projects on-the-go with our mobile-friendly interface and native apps.",
      bgColor: "bg-red-500",
      btnText: "Download App",
      btnLink: "/download",
    },
    {
      title: "Automated Workflows",
      description:
        "Create custom automation rules to streamline repetitive tasks and focus on what matters most.",
      bgColor: "bg-indigo-500",
      btnText: "Set Up Automation",
      btnLink: "/automation",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description:
        "Create your free account in seconds. No credit card required to get started with our basic plan.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      number: "02",
      title: "Create Projects",
      description:
        "Set up projects and invite team members. Organize your work with custom categories and labels.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      number: "03",
      title: "Manage Tasks",
      description:
        "Create, assign, and track tasks. Set priorities, deadlines, and monitor progress in real-time.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      number: "04",
      title: "Track Progress",
      description:
        "Monitor project development with visual dashboards. Generate reports and optimize your workflow.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  // Integrations
  const integrations = [
    {
      name: "Slack",
      logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
    },
    {
      name: "Google Calendar",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
    },
    {
      name: "Microsoft Teams",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg",
    },
    { name: "Jira", logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg" },
    {
      name: "GitHub",
      logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
      name: "Dropbox",
      logo: "https://cdn.worldvectorlogo.com/logos/dropbox-1.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
   
      <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center md:text-left relative z-10">
              <div className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                <span className="bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent">
                  Trusted by 10,000+ teams worldwide
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white via-blue-50 to-blue-100 bg-clip-text text-transparent">
                Manage Tasks{" "}
                <span className="bg-gradient-to-r from-blue-200 to-blue-300 bg-clip-text text-transparent">
                  With Simplicity
                </span>
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                Stay organized, focused, and in control of your projects with
                our intuitive task management platform.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                <Link
                  to="/signup"
                  className="group bg-white/95 backdrop-blur-sm text-slate-800 hover:bg-white px-8 py-3.5 rounded-lg font-medium text-lg transition-all duration-200 flex items-center justify-center shadow-lg shadow-white/10 hover:shadow-white/20"
                >
                  <span>Get Started - Free</span>
                  <svg
                    className="ml-2 h-5 w-5 transform transition-transform duration-200 group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  to="/demo"
                  className="group bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 text-white px-8 py-3.5 rounded-lg font-medium text-lg transition-all duration-200 flex items-center justify-center"
                >
                  <svg
                    className="mr-2 h-5 w-5 transform transition-transform duration-200 group-hover:scale-110"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Watch Demo</span>
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-transparent rounded-xl backdrop-blur-sm"></div>
              
              {/* Main image */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img
                  src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Task Management Dashboard"
                  className="w-full h-auto rounded-xl transform transition-transform duration-500 hover:scale-105"
                />
                
                {/* Stats card */}
                <div className="absolute -bottom-6 -right-6">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                      <div className="text-slate-800 font-semibold">
                        Project completion rate: 94%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom border */}
          <div className="mt-20 border-t border-white/10"></div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full">
              Seamless Integrations
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Works With Your Favorite Tools
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Connect TaskManager with the tools you already use to create the
              ultimate productivity workflow.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="h-12 w-auto mb-4"
                />
                <h3 className="font-medium text-gray-900">
                  {integration.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/integrations"
              className="inline-block px-6 py-3 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              View All Integrations →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg py-8 px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl font-bold text-gray-800">
                    {stat.value}
                  </span>
                  <span className="text-sm text-gray-500 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full">
              Simple Process
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              How TaskManager Works
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Get started in minutes with our easy-to-use platform and
              streamline your workflow in four simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 font-bold rounded-md mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/dashboard"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-md transition-colors duration-200"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full">
              All-in-One Solution
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              Powerful Features
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform is designed to help you manage your tasks and
              projects efficiently with these powerful tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className={`${feature.bgColor} h-2`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-5">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Quick Actions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Get Started Quickly
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/tasks/new"
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-blue-500 font-bold text-lg mb-2">
                Create Task
              </div>
              <p className="text-gray-600 text-sm">
                Add a new task with deadline, priority and notes.
              </p>
            </Link>

            <Link
              to="/projects/new"
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-purple-500 font-bold text-lg mb-2">
                Start Project
              </div>
              <p className="text-gray-600 text-sm">
                Initialize a new project and invite team members.
              </p>
            </Link>

            <Link
              to="/calendar"
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-green-500 font-bold text-lg mb-2">
                View Calendar
              </div>
              <p className="text-gray-600 text-sm">
                See your schedule and manage upcoming deadlines.
              </p>
            </Link>

            <Link
              to="/templates"
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-orange-500 font-bold text-lg mb-2">
                Use Templates
              </div>
              <p className="text-gray-600 text-sm">
                Start with pre-built templates for common projects.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/features"
                    className="text-gray-300 hover:text-white"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-gray-300 hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/integrations"
                    className="text-gray-300 hover:text-white"
                  >
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog" className="text-gray-300 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-gray-300 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/guides" className="text-gray-300 hover:text-white">
                    Guides
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-gray-300 hover:text-white"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-300 hover:text-white"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-300 hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    to="/security"
                    className="text-gray-300 hover:text-white"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400">
              © {new Date().getFullYear()} TaskManager. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
