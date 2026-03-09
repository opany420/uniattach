import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap, LayoutDashboard, FileText, BookOpen,
  Bell, LogOut, Menu, X, Building2, Clock, CheckCircle,
  AlertCircle, Upload, Star, MapPin, Calendar, ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const sidebarLinks = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: Building2, label: "Find Attachment", id: "find" },
  { icon: FileText, label: "My Applications", id: "applications" },
  { icon: BookOpen, label: "Logbook", id: "logbook" },
  { icon: Bell, label: "Notifications", id: "notifications" },
];

const opportunities = [
  { id: 1, company: "Safaricom PLC", role: "IT Attachment", location: "Nairobi", duration: "3 months", deadline: "Mar 30, 2026", slots: 5, category: "Technology" },
  { id: 2, company: "KCB Bank", role: "Finance Attachment", location: "Kisii", duration: "3 months", deadline: "Apr 5, 2026", slots: 3, category: "Finance" },
  { id: 3, company: "Kenya Power", role: "Electrical Engineering", location: "Kisumu", duration: "2 months", deadline: "Apr 10, 2026", slots: 4, category: "Engineering" },
  { id: 4, company: "Equity Bank", role: "Software Development", location: "Nairobi", duration: "3 months", deadline: "Apr 15, 2026", slots: 2, category: "Technology" },
  { id: 5, company: "KEBS", role: "Quality Assurance", location: "Nairobi", duration: "3 months", deadline: "Apr 20, 2026", slots: 3, category: "Science" },
  { id: 6, company: "Nation Media", role: "Journalism Attachment", location: "Nairobi", duration: "2 months", deadline: "Apr 25, 2026", slots: 2, category: "Media" },
];

const myApplications = [
  { company: "Safaricom PLC", role: "IT Attachment", status: "Pending", date: "Mar 5, 2026" },
  { company: "KCB Bank", role: "Finance Attachment", status: "Accepted", date: "Mar 1, 2026" },
  { company: "Kenya Power", role: "Electrical Engineering", status: "Rejected", date: "Feb 25, 2026" },
];

const logbooks = [
  { week: "Week 1", date: "Feb 24 - Mar 1", status: "Approved", feedback: "Good work keep it up!" },
  { week: "Week 2", date: "Mar 2 - Mar 8", status: "Pending", feedback: "" },
  { week: "Week 3", date: "Mar 9 - Mar 15", status: "Not Submitted", feedback: "" },
];

const statusColors = {
  Pending: "bg-amber-100 text-amber-700",
  Accepted: "bg-emerald-100 text-emerald-700",
  Rejected: "bg-red-100 text-red-700",
  Approved: "bg-emerald-100 text-emerald-700",
  "Not Submitted": "bg-gray-100 text-gray-600",
};

export default function StudentDashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [appliedIds, setAppliedIds] = useState([2]);
  const [showLogbookForm, setShowLogbookForm] = useState(false);
  const [logbookEntry, setLogbookEntry] = useState({ week: "", activities: "", challenges: "", plans: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (id) => {
    if (!appliedIds.includes(id)) setAppliedIds([...appliedIds, id]);
  };

  const handleLogbookSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setShowLogbookForm(false);
    setTimeout(() => setSubmitted(false), 3000);
    setLogbookEntry({ week: "", activities: "", challenges: "", plans: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-blue-900 min-h-screen flex flex-col transition-all duration-300 fixed z-40`}>
        <div className="flex items-center gap-3 p-6 border-b border-blue-800">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          {sidebarOpen && (
            <div>
              <h1 className="text-white font-bold text-sm">UniAttach</h1>
              <p className="text-blue-300 text-xs">Student Portal</p>
            </div>
          )}
        </div>

        {/* Student Info */}
        {sidebarOpen && (
          <div className="px-6 py-4 border-b border-blue-800">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">J</div>
            <p className="text-white font-semibold text-sm">John Kamau</p>
            <p className="text-blue-300 text-xs">KSU/CS/001/2022</p>
            <p className="text-blue-300 text-xs">Computer Science</p>
          </div>
        )}

        <nav className="flex-1 p-4 space-y-1">
          {sidebarLinks.map(link => (
            <button key={link.id} onClick={() => setActivePage(link.id)}
              className={"w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all " + (
                activePage === link.id ? 'bg-blue-600 text-white' : 'text-blue-300 hover:bg-blue-800 hover:text-white'
              )}>
              <link.icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="font-medium text-sm">{link.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-blue-800">
          <Link to="/">
            <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-blue-300 hover:bg-blue-800 hover:text-white transition-all">
              <LogOut className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="font-medium text-sm">Sign Out</span>}
            </button>
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>

        {/* Header */}
        <header className="bg-white border-b px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h2 className="text-xl font-bold text-gray-900 capitalize">{activePage === "find" ? "Find Attachment" : activePage === "applications" ? "My Applications" : activePage}</h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-gray-100 relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">J</div>
          </div>
        </header>

        <main className="p-6">

          {/* Dashboard Home */}
          {activePage === "dashboard" && (
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Welcome back, John! 👋</h3>
                <p className="text-gray-500">Here is your attachment progress overview</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "Applications Sent", value: "3", icon: FileText, color: "bg-blue-500" },
                  { label: "Accepted", value: "1", icon: CheckCircle, color: "bg-emerald-500" },
                  { label: "Pending", value: "1", icon: Clock, color: "bg-amber-500" },
                  { label: "Logbooks Submitted", value: "1", icon: BookOpen, color: "bg-purple-500" },
                ].map((stat, idx) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className={"w-12 h-12 " + stat.color + " rounded-xl flex items-center justify-center mb-3"}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Placement Status */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">You are Placed! 🎉</h4>
                    <p className="text-gray-600">KCB Bank — Finance Attachment — Started Mar 1, 2026</p>
                  </div>
                  <button onClick={() => setActivePage("logbook")}
                    className="ml-auto bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-2">
                    Submit Logbook <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Recent Applications */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-6 border-b flex items-center justify-between">
                  <h4 className="text-lg font-bold text-gray-900">Recent Applications</h4>
                  <button onClick={() => setActivePage("applications")} className="text-blue-600 text-sm font-medium hover:underline">View All</button>
                </div>
                <div className="p-6 space-y-4">
                  {myApplications.map((app, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <p className="font-semibold text-gray-900">{app.company}</p>
                        <p className="text-gray-500 text-sm">{app.role} • {app.date}</p>
                      </div>
                      <span className={"px-3 py-1 rounded-full text-xs font-semibold " + statusColors[app.status]}>{app.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Find Attachment */}
          {activePage === "find" && (
            <div>
              <div className="mb-6">
                <p className="text-gray-500">Browse available attachment opportunities</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {opportunities.map((opp, idx) => (
                  <motion.div key={opp.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{opp.category}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{opp.company}</h3>
                    <p className="text-gray-600 text-sm mb-3">{opp.role}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <MapPin className="w-3 h-3" /> {opp.location}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Clock className="w-3 h-3" /> {opp.duration}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Calendar className="w-3 h-3" /> Deadline: {opp.deadline}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Star className="w-3 h-3" /> {opp.slots} slots available
                      </div>
                    </div>
                    <button onClick={() => handleApply(opp.id)}
                      className={"w-full py-2 rounded-xl text-sm font-semibold transition-colors " + (
                        appliedIds.includes(opp.id)
                          ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      )}>
                      {appliedIds.includes(opp.id) ? "Applied ✓" : "Apply Now"}
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* My Applications */}
          {activePage === "applications" && (
            <div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-6 border-b">
                  <p className="text-gray-500 text-sm">Track all your attachment applications</p>
                </div>
                <div className="p-6 space-y-4">
                  {myApplications.map((app, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{app.company}</p>
                          <p className="text-gray-500 text-sm">{app.role}</p>
                          <p className="text-gray-400 text-xs">Applied: {app.date}</p>
                        </div>
                      </div>
                      <span className={"px-4 py-2 rounded-full text-sm font-semibold " + statusColors[app.status]}>{app.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Logbook */}
          {activePage === "logbook" && (
            <div>
              {submitted && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl mb-6 font-medium">
                  ✅ Logbook submitted successfully! Your supervisor will review it shortly.
                </div>
              )}

              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-500">Submit and track your weekly logbooks</p>
                <button onClick={() => setShowLogbookForm(!showLogbookForm)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors">
                  <Upload className="w-4 h-4" /> Submit Logbook
                </button>
              </div>

              {showLogbookForm && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">New Logbook Entry</h3>
                  <form onSubmit={handleLogbookSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Week</label>
                      <input value={logbookEntry.week} onChange={e => setLogbookEntry({...logbookEntry, week: e.target.value})} required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. Week 3 (Mar 9 - Mar 15)" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Activities Done</label>
                      <textarea value={logbookEntry.activities} onChange={e => setLogbookEntry({...logbookEntry, activities: e.target.value})} required rows={3}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="Describe what you did this week..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Challenges Faced</label>
                      <textarea value={logbookEntry.challenges} onChange={e => setLogbookEntry({...logbookEntry, challenges: e.target.value})} rows={2}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="Any challenges this week?" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Plans for Next Week</label>
                      <textarea value={logbookEntry.plans} onChange={e => setLogbookEntry({...logbookEntry, plans: e.target.value})} rows={2}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="What do you plan to do next week?" />
                    </div>
                    <div className="flex gap-4">
                      <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors">Submit Logbook</button>
                      <button type="button" onClick={() => setShowLogbookForm(false)} className="px-6 py-3 border border-gray-200 rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition-colors">Cancel</button>
                    </div>
                  </form>
                </motion.div>
              )}

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-6 border-b">
                  <h4 className="text-lg font-bold text-gray-900">Logbook History</h4>
                </div>
                <div className="p-6 space-y-4">
                  {logbooks.map((log, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{log.week}</p>
                          <p className="text-gray-500 text-sm">{log.date}</p>
                          {log.feedback && <p className="text-emerald-600 text-xs mt-1">💬 "{log.feedback}"</p>}
                        </div>
                      </div>
                      <span className={"px-3 py-1 rounded-full text-xs font-semibold " + statusColors[log.status]}>{log.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activePage === "notifications" && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="p-6 border-b">
                <h4 className="text-lg font-bold text-gray-900">Notifications</h4>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { icon: CheckCircle, color: "text-emerald-600 bg-emerald-100", msg: "Your application to KCB Bank has been accepted!", time: "2 hours ago" },
                  { icon: AlertCircle, color: "text-amber-600 bg-amber-100", msg: "Your Week 2 logbook is pending supervisor review", time: "1 day ago" },
                  { icon: Bell, color: "text-blue-600 bg-blue-100", msg: "New attachment opportunity posted by Safaricom PLC", time: "2 days ago" },
                  { icon: AlertCircle, color: "text-red-600 bg-red-100", msg: "Your application to Kenya Power was not successful", time: "5 days ago" },
                ].map((n, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className={"w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 " + n.color}>
                      <n.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 text-sm font-medium">{n.msg}</p>
                      <p className="text-gray-400 text-xs mt-1">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
