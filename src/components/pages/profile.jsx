import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function ProfilePage() {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: '01/15/2025',
    profileImage: 'https://via.placeholder.com/150',
    role: 'Senior Developer',
    level: 'Pro Member',
  });

  const [userStats, setUserStats] = useState({
    totalTasks: 25,
    completedTasks: 18,
    pendingTasks: 5,
    overdueTasks: 2,
  });

  const completedPercentage = (userStats.completedTasks / userStats.totalTasks) * 100;
  const pendingPercentage = (userStats.pendingTasks / userStats.totalTasks) * 100;
  const overduePercentage = (userStats.overdueTasks / userStats.totalTasks) * 100;

  const taskCompletionRate = [
    { name: 'Completed', value: userStats.completedTasks },
    { name: 'Remaining', value: userStats.totalTasks - userStats.completedTasks },
  ];

  // Data for Monthly Task Distribution (Bar Chart)
  const monthlyTaskDistribution = [
    { month: 'Jan', tasks: 10 },
    { month: 'Feb', tasks: 15 },
    { month: 'Mar', tasks: 20 },
    { month: 'Apr', tasks: 25 },
    { month: 'May', tasks: 30 },
    { month: 'Jun', tasks: 35 },
  ];

const {profile}   = useSelector((state) => state.auth)
console.log("p",profile)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 to-purple-900 p-6">
      <div className="container mx-auto">
        {/* Enhanced User Profile Card */}
        <div className="bg-gradient-to-r from-violet-900/60 to-indigo-900/60 backdrop-blur-lg rounded-3xl mb-8 shadow-2xl overflow-hidden relative">
          {/* Abstract Background Elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-16 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image with Ring Animation */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-spin-slow blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur-sm"></div>
                <div className="relative w-36 h-36 flex justify-center items-center text-4xl text-white rounded-full border-4 border-purple-300/30 overflow-hidden">
                   kk
                </div>
              </div>
              
              {/* User Details with Enhanced Typography */}
              <div className="md:flex-1">
                <div className="text-center md:text-left mb-6">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">{profile.name}</h1>
                  
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-3">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-600/30 border border-purple-400/30 text-purple-200">
                      <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
                      {profile.email}
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-600/30 border border-indigo-400/30 text-indigo-200">
                      <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2"></span>
                      Member since {userData.joinDate}
                    </div>
             
                  </div>
                </div>
                
                {/* Task Completion Summary */}
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="flex justify-between mb-2">
                    <h3 className="text-white font-medium">Task Completion</h3>
                    <span className="text-purple-200">{completedPercentage.toFixed(0)}%</span>
                  </div>
                  <div className="h-3 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      style={{ width: `${completedPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Task Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Completed Tasks Card */}
          <div className="group">
            <div className="bg-gradient-to-br from-emerald-900/80 to-teal-800/80 backdrop-blur-lg rounded-3xl p-6 border border-emerald-400/20 shadow-xl relative overflow-hidden h-full transform transition-all duration-300 hover:translate-y-1 hover:shadow-emerald-500/20 hover:shadow-2xl">
              {/* Abstract Shapes */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-emerald-500/20 p-3 rounded-2xl">
                    <svg className="w-6 h-6 text-emerald-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-4xl font-bold bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">{userStats.completedTasks}</span>
                    <span className="text-emerald-200 text-sm">of {userStats.totalTasks}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">Completed Tasks</h3>
                <p className="text-emerald-200 text-sm mb-4">Excellent progress!</p>
                
                <div className="mt-2">
                  <div className="bg-white/10 h-3 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full"
                      style={{ width: `${completedPercentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-emerald-200">
                    <span>Progress</span>
                    <span>{completedPercentage.toFixed(0)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pending Tasks Card */}
          <div className="group">
            <div className="bg-gradient-to-br from-amber-900/80 to-orange-800/80 backdrop-blur-lg rounded-3xl p-6 border border-amber-400/20 shadow-xl relative overflow-hidden h-full transform transition-all duration-300 hover:translate-y-1 hover:shadow-amber-500/20 hover:shadow-2xl">
              {/* Abstract Shapes */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-amber-500/20 p-3 rounded-2xl">
                    <svg className="w-6 h-6 text-amber-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-4xl font-bold bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">{userStats.pendingTasks}</span>
                    <span className="text-amber-200 text-sm">of {userStats.totalTasks}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">Pending Tasks</h3>
                <p className="text-amber-200 text-sm mb-4">In progress</p>
                
                <div className="mt-2">
                  <div className="bg-white/10 h-3 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-400 to-orange-300 rounded-full"
                      style={{ width: `${pendingPercentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-amber-200">
                    <span>Progress</span>
                    <span>{pendingPercentage.toFixed(0)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overdue Tasks Card */}
          <div className="group">
            <div className="bg-gradient-to-br from-rose-900/80 to-red-800/80 backdrop-blur-lg rounded-3xl p-6 border border-rose-400/20 shadow-xl relative overflow-hidden h-full transform transition-all duration-300 hover:translate-y-1 hover:shadow-rose-500/20 hover:shadow-2xl">
              {/* Abstract Shapes */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-red-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-rose-500/20 p-3 rounded-2xl">
                    <svg className="w-6 h-6 text-rose-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-4xl font-bold bg-gradient-to-r from-rose-200 to-red-200 bg-clip-text text-transparent">{userStats.overdueTasks}</span>
                    <span className="text-rose-200 text-sm">of {userStats.totalTasks}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">Overdue Tasks</h3>
                <p className="text-rose-200 text-sm mb-4">Needs attention</p>
                
                <div className="mt-2">
                  <div className="bg-white/10 h-3 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-rose-400 to-red-300 rounded-full"
                      style={{ width: `${overduePercentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-rose-200">
                    <span>Progress</span>
                    <span>{overduePercentage.toFixed(0)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Task Completion Rate Chart */}
          <div className="bg-gradient-to-br from-indigo-900/60 to-purple-900/60 backdrop-blur-lg rounded-3xl p-6 border border-purple-400/20 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Task Completion Rate</h2>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={taskCompletionRate}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={60}
                    fill="#8b5cf6"
                    dataKey="value"
                    paddingAngle={5}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {taskCompletionRate.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === 0 ? '#10b981' : '#6366f1'}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e1b4b', border: '1px solid #4f46e5', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}
                    labelStyle={{ color: '#fff', fontWeight: 'bold' }}
                    itemStyle={{ color: '#c7d2fe' }}
                  />
                  <Legend wrapperStyle={{ color: '#c7d2fe' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Monthly Task Distribution Chart */}
          <div className="bg-gradient-to-br from-indigo-900/60 to-purple-900/60 backdrop-blur-lg rounded-3xl p-6 border border-purple-400/20 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Monthly Task Distribution</h2>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyTaskDistribution}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4338ca30" />
                  <XAxis dataKey="month" stroke="#a5b4fc" />
                  <YAxis stroke="#a5b4fc" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e1b4b', border: '1px solid #4f46e5', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}
                    labelStyle={{ color: '#fff', fontWeight: 'bold' }}
                    itemStyle={{ color: '#c7d2fe' }}
                  />
                  <Legend wrapperStyle={{ color: '#c7d2fe' }} />
                  <Bar 
                    dataKey="tasks" 
                    fill="#8b5cf6" 
                    name="Tasks Assigned" 
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Task Completion Timeline Box */}
        <div className="bg-gradient-to-br from-indigo-900/60 to-purple-900/60 backdrop-blur-lg rounded-3xl p-6 border border-purple-400/20 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-6">Task Completion Timeline</h2>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-emerald-500 mr-2"></div>
              <span className="text-purple-200">Completed</span>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-amber-500 mr-2"></div>
              <span className="text-purple-200">Pending</span>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-rose-500 mr-2"></div>
              <span className="text-purple-200">Overdue</span>
            </div>
          </div>
          <div className="space-y-4">
            {/* Timeline dots with enhanced styling */}
            <div className="flex items-center">
              <div className="flex-none w-24 text-right text-purple-300 text-sm pr-4">Today</div>
              <div className="h-4 w-4 rounded-full bg-emerald-500 z-10 shadow-lg shadow-emerald-500/50"></div>
              <div className="flex-grow h-1 bg-gradient-to-r from-emerald-500 to-emerald-400/70 ml-0"></div>
            </div>
            <div className="flex items-center">
              <div className="flex-none w-24 text-right text-purple-300 text-sm pr-4">Yesterday</div>
              <div className="h-4 w-4 rounded-full bg-emerald-500 z-10 shadow-lg shadow-emerald-500/50"></div>
              <div className="flex-grow h-1 bg-gradient-to-r from-emerald-500 to-emerald-400/70 ml-0"></div>
            </div>
            <div className="flex items-center">
              <div className="flex-none w-24 text-right text-purple-300 text-sm pr-4">Apr 2</div>
              <div className="h-4 w-4 rounded-full bg-amber-500 z-10 shadow-lg shadow-amber-500/50"></div>
              <div className="flex-grow h-1 bg-gradient-to-r from-amber-500 to-amber-400/70 ml-0"></div>
            </div>
            <div className="flex items-center">
              <div className="flex-none w-24 text-right text-purple-300 text-sm pr-4">Apr 1</div>
              <div className="h-4 w-4 rounded-full bg-rose-500 z-10 shadow-lg shadow-rose-500/50"></div>
              <div className="flex-grow h-1 bg-gradient-to-r from-rose-500 to-rose-400/70 ml-0"></div>
            </div>
            <div className="flex items-center">
              <div className="flex-none w-24 text-right text-purple-300 text-sm pr-4">Mar 30</div>
              <div className="h-4 w-4 rounded-full bg-emerald-500 z-10 shadow-lg shadow-emerald-500/50"></div>
              <div className="flex-grow h-1 bg-gradient-to-r from-emerald-500 to-emerald-400/70 ml-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;