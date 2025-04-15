import React from 'react';
import { 
  Users, 
  Code, 
  Server, 
  Layers, 
  Mail, 
  Linkedin, 
  Github, 
  Globe, 
  Award
} from 'lucide-react';

function About() {
  const teamMembers = [
    {
      id: "2215000238",
      name: "Animesh Rajpoot",
      role: "Backend Developer",
      expertise: "API Development",
      email: "animesh@example.com",
      github: "animesh-r"
    },
    {
      id: "2215001729",
      name: "Shubham Maurya",
      role: "Backend Developer",
      expertise: "Database Architecture",
      email: "shubham@example.com",
      github: "shubham-m"
    },
    {
      id: "2215001521",
      name: "Sagar Gupta",
      role: "Frontend Developer",
      expertise: "UI/UX Design",
      email: "sagar@example.com",
      github: "sagar-g"
    },
    {
      id: "2215002026",
      name: "Yash Mangla",
      role: "Frontend Developer",
      expertise: "React Development",
      email: "yash@example.com",
      github: "yash-m"
    },
    {
      id: "2215004534",
      name: "Shivanshu Shrivastav",
      role: "Backend Developer",
      expertise: "System Architecture",
      email: "shivanshu@example.com",
      github: "shivanshu-s"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Meet Our Talented Team</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              Bringing innovation and excellence to every project we undertake
            </p>
          </div>
        </div>
      </div>

      {/* Team Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Strengths</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We combine technical expertise with creative thinking to deliver exceptional solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-indigo-100 rounded-full">
                  <Server className="h-10 w-10 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Backend Excellence</h3>
              <p className="text-gray-600">Building robust, scalable, and secure server-side solutions using cutting-edge technologies</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Code className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Frontend Craftsmanship</h3>
              <p className="text-gray-600">Creating beautiful, intuitive, and responsive user interfaces with modern frameworks</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-purple-100 rounded-full">
                  <Layers className="h-10 w-10 text-purple-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Full Stack Integration</h3>
              <p className="text-gray-600">Seamlessly connecting all layers of application architecture for optimal performance</p>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-16">
            <div className="h-1 w-16 bg-blue-600 mr-3"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Our Team Members</h2>
            <div className="h-1 w-16 bg-blue-600 ml-3"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 group-hover:h-3 transition-all duration-300"></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                    <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-800 text-xs px-3 py-2 rounded-full font-medium">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-gray-500 mb-2"><span className="font-medium">ID:</span> {member.id}</p>
                  <p className="text-gray-500 mb-6"><span className="font-medium">Expertise:</span> {member.expertise}</p>
                  
                  <div className="flex items-center text-gray-600 mb-6">
                    <Mail className="h-4 w-4 mr-2 text-blue-600" />
                    <span>{member.email}</span>
                  </div>
                  
                  <div className="flex space-x-4 pt-4 border-t border-gray-100">
                    <a 
                      href={`https://github.com/${member.github}`} 
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      aria-label={`${member.name}'s GitHub profile`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      aria-label={`${member.name}'s portfolio`}
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* University Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 mr-3 text-blue-400" />
                  <h2 className="text-3xl font-bold">Our University</h2>
                </div>
                <p className="text-gray-300 text-lg max-w-lg">
                  Proudly representing our institution with excellence and innovation.
                  Our education has empowered us to pursue technological breakthroughs.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-8 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Contact Our Team
                </button>
                <p className="text-gray-400 mt-3">Let's collaborate on your next project</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Team Project</h3>
              <p>© 2025 All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Globe className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;