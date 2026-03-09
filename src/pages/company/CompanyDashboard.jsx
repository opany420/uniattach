import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2, LayoutDashboard, Users, FileText,
  Bell, LogOut, Menu, X, CheckCircle, Clock,
  AlertCircle, Plus, MapPin, Calendar, Star, Eye, Trash2
} from "lucide-react";
import { Link } from "react-router-dom";

const sidebarLinks = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: FileText, label: "Post Opportunity", id: "post" },
  { icon: Users, label: "Applications", id: "applications" },
  { icon: Users, label: "Our Students", id: "students" },
  { icon: Bell, label: "Notifications", id: "notifications" },
];

const initialOpportunities = [
  { id: 1, role: "IT Attachment", department: "ICT", slots: 5, filled: 2, deadline: "Mar 30, 2026", duration: "3 months", location: "Nairobi", status: "Open" },
  { id: 2, role: "Finance Attachment", department: "Finance", slots: 3, filled: 3, deadline: "Apr 5, 2026", duration: "3 months", location: "Kisii", status: "Closed" },
];

const applications = [
  { name: "John Kamau", regNo: "KSU/CS/001/2022", course: "Computer Science", role: "IT Attachment", date: "Mar 5, 2026", status: "Accepted" },
  { name: "Faith Njeri", regNo: "KSU/CS/006/2022", course: "Computer Science", role: "IT Attachment", date: "Mar 6, 2026", status: "Pending" },
  { name: "Brian Otieno", regNo: "KSU/CS/007/2022", course: "IT", role: "IT Attachment", date: "Mar 7, 2026", status: "Pending" },
  { name: "Mary Wanjiku", regNo: "KSU/BF/002/2022", course: "Business Finance", role: "Finance Attachment", date: "Mar 1, 2026", status: "Accepted" },
  { name: "Tom Moseti", regNo: "KSU/BF/008/2022", course: "Business Finance", role: "Finance Attachment", date: "Mar 2, 2026", status: "Rejected" },
];

const activeStudents = [
  { name: "John Kamau", regNo: "KSU/CS/001/2022", role: "IT Attachment", started: "Mar 1, 2026", progress: 60, supervisor: "Dr. Otieno" },
  { name: "Mary Wanjiku", regNo: "KSU/BF/002/2022", role: "Finance Attachment", started: "Mar 1, 2026", progress: 40, supervisor: "Dr. Achieng" },
];

const statusColors = {
  Open: "bg-emerald-100 text-emerald-700",
  Closed: "bg-gray-100 text-gray-600",
  Accepted: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Rejected: "bg-red-100 text-red-700",
};

export default function CompanyDashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [opportunities, setOpportunities] = useState(initialOpportunities);
  const [appStatuses, setAppStatuses] = useState({});
  const [showPostForm, setShowPostForm] = useState(false);
  const [newOpp, setNewOpp] = useState({ role: "", department: "", slots: "", deadline: "", duration: "", location: "" });
  const [postSuccess, setPostSuccess] = useState(false);

  const handleAccept = (idx) => setAppStatuses({ ...appStatuses, [idx]: "Accepted" });
  const handleReject = (idx) => setAppStatuses({ ...appStatuses, [idx]: "Rejected" });

  const handlePostOpp = (e) => {
    e.preventDefault();
    const opp = { ...newOpp, id: opportunities.length + 1, filled: 0, slots: parseInt(newOpp.slots), status: "Open" };
    setOpportunities([...opportunities, opp]);
    setShowPostForm(false);
    setPostSuccess(true);
    setNewOpp({ role: "", department: "", slots: "", deadline: "", duration: "", location: "" });
    setTimeout(() => setPostSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">

      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-purple-900 min-h-screen flex flex-col transition-all duration-300 fixed z-40`}>
        <div className="flex items-center gap-3 p-6 border-b border-purple-800">
          <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          {sidebarOpen && (
            <div>
              <h1 className="text-white font-bold text-sm">UniAttach</h1>
              <p className="text-purple-300 text-xs">Company Portal</p>
            </div>
          )}
        </div>

        {sidebarOpen && (
          <div className="px-6 py-4 border-b border-purple-800">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-2">S</div>
            <p className="text-white font-semibold text-sm">Safaricom PLC</p>
            <p className="text-purple-300 text-xs">HR Department</p>
            <p className="text-purple-300 text-xs">Nairobi, Kenya</p>
          </div>
        )}

        <nav className="flex-1 p-4 space-y-1">
          {sidebarLinks.map(link => (
            <button key={link.id} onClick={() => setActivePage(link.id)}
              className={"w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all " + (
                activePage === link.id ? 'bg-purple-600 text-white' : 'text-purple-300 hover:bg-purple-800 hover:text-white'
              )}>
              <link.icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="font-medium text-sm">{link.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-purple-800">
          <Link to="/login">
            <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-purple-300 hover:bg-purple-800 hover:text-white transition-all">
              <LogOut className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="font-medium text-sm">Sign Out</span>}
            </button>
          </Link>
        </div>
      </aside>

      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        <header className="bg-white border-b px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h2 className="text-xl font-bold text-gray-900 capitalize">
              {activePage === "post" ? "Post Opportunity" : activePage === "applications" ? "Applications" : activePage === "students" ? "Our Students" : activePage}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-gray-100 relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">S</div>
          </div>
        </header>

        <main className="p-6">

          {/* Dashboard */}
          {activePage === "dashboard" && (
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Welcome, Safaricom! 👋</h3>
                <p className="text-gray-500">Manage your attachment opportunities and students</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "Open Opportunities", value: opportunities.filter(o => o.status === "Open").length, icon: FileText, color: "bg-purple-500" },
                  { label: "Total Applications", value: applications.length, icon: Users, color: "bg-blue-500" },
                  { label: "Active Students", value: activeStudents.length, icon: CheckCircle, color: "bg-emerald-500" },
                  { label: "Pending Review", value: applications.filter(a => (appStatuses[applications.indexOf(a)] || a.status) === "Pending").length, icon: Clock, color: "bg-amber-500" },
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

              {/* Opportunities */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-8">
                <div className="p-6 border-b flex items-center justify-between">
                  <h4 className="text-lg font-bold text-gray-900">Posted Opportunities</h4>
                  <button onClick={() => setActivePage("post")}
                    className="bg-purple-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Post New
                  </button>
                </div>
                <div className="p-6 space-y-4">
                  {opportunities.map((opp, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <p className="font-semibold text-gray-900">{opp.role}</p>
                        <p className="text-gray-500 text-sm">{opp.department} • {opp.location} • {opp.duration}</p>
                        <p className="text-gray-400 text-xs">Deadline: {opp.deadline} • {opp.filled}/{opp.slots} slots filled</p>
                      </div>
                      <span className={"px-3 py-1 rounded-full text-xs font-semibold " + statusColors[opp.status]}>{opp.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Applications */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-6 border-b flex items-center justify-between">
                  <h4 className="text-lg font-bold text-gray-900">Recent Applications</h4>
                  <button onClick={() => setActivePage("applications")} className="text-purple-600 text-sm font-medium hover:underline">View All</button>
                </div>
                <div className="p-6 space-y-3">
                  {applications.slice(0, 3).map((app, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{app.name}</p>
                        <p className="text-gray-500 text-xs">{app.role} • {app.date}</p>
                      </div>
                      <span className={"px-3 py-1 rounded-full text-xs font-semibold " + statusColors[appStatuses[idx] || app.status]}>
                        {appStatuses[idx] || app.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Post Opportunity */}
          {activePage === "post" && (
            <div>
              {postSuccess && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl mb-6 font-medium">
                  ✅ Opportunity posted successfully!
                </div>
              )}

              {/* Existing Opportunities */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6">
                <div className="p-6 border-b flex items-center justify-between">
                  <h4 className="text-lg font-bold text-gray-900">Your Opportunities ({opportunities.length})</h4>
                  <button onClick={() => setShowPostForm(!showPostForm)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Post New Opportunity
                  </button>
                </div>
                <div className="p-6 space-y-4">
                  {opportunities.map((opp, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <p className="font-semibold text-gray-900">{opp.role} — {opp.department}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-gray-500 text-xs flex items-center gap-1"><MapPin className="w-3 h-3" />{opp.location}</span>
                          <span className="text-gray-500 text-xs flex items-center gap-1"><Calendar className="w-3 h-3" />Deadline: {opp.deadline}</span>
                          <span className="text-gray-500 text-xs flex items-center gap-1"><Star className="w-3 h-3" />{opp.filled}/{opp.slots} slots</span>
                        </div>
                      </div>
                      <span className={"px-3 py-1 rounded-full text-xs font-semibold " + statusColors[opp.status]}>{opp.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {showPostForm && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Post New Opportunity</h3>
                  <form onSubmit={handlePostOpp} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Role/Position</label>
                        <input required value={newOpp.role} onChange={e => setNewOpp({...newOpp, role: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="e.g. IT Attachment" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                        <input required value={newOpp.department} onChange={e => setNewOpp({...newOpp, department: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="e.g. ICT Department" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Number of Slots</label>
                        <input type="number" required value={newOpp.slots} onChange={e => setNewOpp({...newOpp, slots: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="e.g. 5" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                        <input required value={newOpp.duration} onChange={e => setNewOpp({...newOpp, duration: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="e.g. 3 months" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <input required value={newOpp.location} onChange={e => setNewOpp({...newOpp, location: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="e.g. Nairobi" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Application Deadline</label>
                        <input type="date" required value={newOpp.deadline} onChange={e => setNewOpp({...newOpp, deadline: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500" />
                      </div>
                    </div>
                    <div className="flex gap-4 pt-2">
                      <button type="submit" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-colors">Post Opportunity</button>
                      <button type="button" onClick={() => setShowPostForm(false)} className="px-6 py-3 border border-gray-200 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition-colors">Cancel</button>
                    </div>
                  </form>
                </motion.div>
              )}
            </div>
          )}

          {/* Applications */}
          {activePage === "applications" && (
            <div className="space-y-4">
              {applications.map((app, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                        {app.name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{app.name}</p>
                        <p className="text-gray-500 text-sm">{app.regNo} • {app.course}</p>
                        <p className="text-gray-400 text-xs">Applied for: {app.role} • {app.date}</p>
                      </div>
                    </div>
                    <span className={"px-4 py-2 rounded-full text-sm font-semibold " + statusColors[appStatuses[idx] || app.status]}>
                      {appStatuses[idx] || app.status}
                    </span>
                  </div>
                  {(appStatuses[idx] || app.status) === "Pending" && (
                    <div className="flex gap-3 mt-4">
                      <button onClick={() => handleAccept(idx)}
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4" /> Accept
                      </button>
                      <button onClick={() => handleReject(idx)}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                        <AlertCircle className="w-4 h-4" /> Reject
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* Our Students */}
          {activePage === "students" && (
            <div className="grid md:grid-cols-2 gap-6">
              {activeStudents.map((student, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">
                      {student.name[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{student.name}</h3>
                      <p className="text-gray-500 text-sm">{student.regNo}</p>
                      <p className="text-gray-500 text-sm">{student.role}</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Started:</span>
                      <span className="font-medium text-gray-900">{student.started}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Supervisor:</span>
                      <span className="font-medium text-gray-900">{student.supervisor}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Progress</span>
                      <span className="font-bold text-purple-600">{student.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: student.progress + "%" }} />
                    </div>
                  </div>
                </motion.div>
              ))}
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
                  { icon: Users, color: "text-blue-600 bg-blue-100", msg: "Brian Otieno applied for IT Attachment position", time: "1 hour ago" },
                  { icon: Users, color: "text-blue-600 bg-blue-100", msg: "Faith Njeri applied for IT Attachment position", time: "3 hours ago" },
                  { icon: CheckCircle, color: "text-emerald-600 bg-emerald-100", msg: "John Kamau accepted your IT Attachment offer", time: "1 day ago" },
                  { icon: AlertCircle, color: "text-amber-600 bg-amber-100", msg: "IT Attachment deadline is in 3 weeks", time: "2 days ago" },
                ].map((n, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className={"w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 " + n.color}>
                      <n.icon className="w-5 h-5" />
                    </div>
                    <div>
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
