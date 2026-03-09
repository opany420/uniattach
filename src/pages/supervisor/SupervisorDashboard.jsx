import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap, LayoutDashboard, Users, BookOpen,
  Bell, LogOut, Menu, X, CheckCircle, Clock,
  AlertCircle, Star, MessageSquare, Download, Eye
} from "lucide-react";
import { Link } from "react-router-dom";

const sidebarLinks = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: Users, label: "My Students", id: "students" },
  { icon: BookOpen, label: "Logbooks", id: "logbooks" },
  { icon: Bell, label: "Notifications", id: "notifications" },
];

const students = [
  { id: 1, name: "John Kamau", regNo: "KSU/CS/001/2022", course: "Computer Science", company: "KCB Bank", status: "Active", progress: 60, phone: "0712 345 678", email: "john@student.ac.ke" },
  { id: 2, name: "Mary Wanjiku", regNo: "KSU/CS/002/2022", course: "Computer Science", company: "Safaricom PLC", status: "Active", progress: 40, phone: "0723 456 789", email: "mary@student.ac.ke" },
  { id: 3, name: "Peter Odhiambo", regNo: "KSU/EE/003/2022", course: "Electrical Eng", company: "Kenya Power", status: "Active", progress: 80, phone: "0734 567 890", email: "peter@student.ac.ke" },
  { id: 4, name: "Grace Achieng", regNo: "KSU/BF/004/2022", course: "Business Finance", company: "Equity Bank", status: "Completed", progress: 100, phone: "0745 678 901", email: "grace@student.ac.ke" },
  { id: 5, name: "James Mwangi", regNo: "KSU/CS/005/2022", course: "Computer Science", company: "Nation Media", status: "Pending", progress: 0, phone: "0756 789 012", email: "james@student.ac.ke" },
];

const logbooks = [
  { student: "John Kamau", week: "Week 2", submitted: "Mar 8, 2026", status: "Pending", activities: "Worked on database design and SQL queries. Attended team meetings and learned about agile methodology." },
  { student: "Mary Wanjiku", week: "Week 1", submitted: "Mar 1, 2026", status: "Pending", activities: "Orientation week. Met the team, set up workstation and attended company induction program." },
  { student: "Peter Odhiambo", week: "Week 3", submitted: "Mar 14, 2026", status: "Approved", activities: "Assisted in maintenance of power distribution lines. Learned about transformer operation." },
  { student: "John Kamau", week: "Week 1", submitted: "Mar 1, 2026", status: "Approved", activities: "Started work on frontend development using React. Attended daily standups." },
];

const statusColors = {
  Active: "bg-emerald-100 text-emerald-700",
  Completed: "bg-blue-100 text-blue-700",
  Pending: "bg-amber-100 text-amber-700",
  Approved: "bg-emerald-100 text-emerald-700",
  Rejected: "bg-red-100 text-red-700",
};

export default function SupervisorDashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [logbookStatuses, setLogbookStatuses] = useState({});
  const [feedback, setFeedback] = useState({});
  const [showFeedbackFor, setShowFeedbackFor] = useState(null);
  const [feedbackText, setFeedbackText] = useState("");

  const handleApprove = (idx) => {
    setLogbookStatuses({ ...logbookStatuses, [idx]: "Approved" });
  };

  const handleReject = (idx) => {
    setLogbookStatuses({ ...logbookStatuses, [idx]: "Rejected" });
  };

  const handleFeedbackSubmit = (idx) => {
    setFeedback({ ...feedback, [idx]: feedbackText });
    setShowFeedbackFor(null);
    setFeedbackText("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">

      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-indigo-900 min-h-screen flex flex-col transition-all duration-300 fixed z-40`}>
        <div className="flex items-center gap-3 p-6 border-b border-indigo-800">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          {sidebarOpen && (
            <div>
              <h1 className="text-white font-bold text-sm">UniAttach</h1>
              <p className="text-indigo-300 text-xs">Supervisor Portal</p>
            </div>
          )}
        </div>

        {sidebarOpen && (
          <div className="px-6 py-4 border-b border-indigo-800">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">D</div>
            <p className="text-white font-semibold text-sm">Dr. David Otieno</p>
            <p className="text-indigo-300 text-xs">Computer Science Dept</p>
            <p className="text-indigo-300 text-xs">Kisii University</p>
          </div>
        )}

        <nav className="flex-1 p-4 space-y-1">
          {sidebarLinks.map(link => (
            <button key={link.id} onClick={() => setActivePage(link.id)}
              className={"w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all " + (
                activePage === link.id ? 'bg-indigo-600 text-white' : 'text-indigo-300 hover:bg-indigo-800 hover:text-white'
              )}>
              <link.icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="font-medium text-sm">{link.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-indigo-800">
          <Link to="/login">
            <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-indigo-300 hover:bg-indigo-800 hover:text-white transition-all">
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
              {activePage === "students" ? "My Students" : activePage === "logbooks" ? "Logbook Reviews" : activePage}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-gray-100 relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">D</div>
          </div>
        </header>

        <main className="p-6">

          {/* Dashboard */}
          {activePage === "dashboard" && (
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Welcome, Dr. Otieno! 👋</h3>
                <p className="text-gray-500">You have {logbooks.filter(l => (logbookStatuses[logbooks.indexOf(l)] || l.status) === "Pending").length} logbooks pending review</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "Total Students", value: students.length, icon: Users, color: "bg-indigo-500" },
                  { label: "Active", value: students.filter(s => s.status === "Active").length, icon: CheckCircle, color: "bg-emerald-500" },
                  { label: "Completed", value: students.filter(s => s.status === "Completed").length, icon: Star, color: "bg-blue-500" },
                  { label: "Pending Logbooks", value: logbooks.filter(l => l.status === "Pending").length, icon: Clock, color: "bg-amber-500" },
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

              {/* Pending Logbooks */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-8">
                <div className="p-6 border-b flex items-center justify-between">
                  <h4 className="text-lg font-bold text-gray-900">Pending Logbook Reviews</h4>
                  <button onClick={() => setActivePage("logbooks")} className="text-indigo-600 text-sm font-medium hover:underline">View All</button>
                </div>
                <div className="p-6 space-y-4">
                  {logbooks.filter(l => l.status === "Pending").map((log, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-amber-50 rounded-xl border border-amber-100">
                      <div>
                        <p className="font-semibold text-gray-900">{log.student} — {log.week}</p>
                        <p className="text-gray-500 text-sm">Submitted: {log.submitted}</p>
                      </div>
                      <button onClick={() => setActivePage("logbooks")}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors">
                        Review
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Students Progress */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-6 border-b">
                  <h4 className="text-lg font-bold text-gray-900">Student Progress</h4>
                </div>
                <div className="p-6 space-y-4">
                  {students.filter(s => s.status === "Active").map((student, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold flex-shrink-0">
                        {student.name[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-900">{student.name}</span>
                          <span className="text-sm font-bold text-indigo-600">{student.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div className="bg-indigo-500 h-2 rounded-full transition-all" style={{ width: student.progress + "%" }} />
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{student.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* My Students */}
          {activePage === "students" && (
            <div>
              {selectedStudent ? (
                <div>
                  <button onClick={() => setSelectedStudent(null)} className="flex items-center gap-2 text-indigo-600 hover:underline mb-6 text-sm">
                    ← Back to Students
                  </button>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-2xl">
                        {selectedStudent.name[0]}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{selectedStudent.name}</h3>
                        <p className="text-gray-500">{selectedStudent.regNo} • {selectedStudent.course}</p>
                        <p className="text-gray-500 text-sm">{selectedStudent.email} • {selectedStudent.phone}</p>
                      </div>
                      <span className={"ml-auto px-4 py-2 rounded-full text-sm font-semibold " + statusColors[selectedStudent.status]}>
                        {selectedStudent.status}
                      </span>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-1">Attachment Progress</p>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-indigo-500 h-3 rounded-full" style={{ width: selectedStudent.progress + "%" }} />
                      </div>
                      <p className="text-sm text-indigo-600 font-bold mt-1">{selectedStudent.progress}% Complete</p>
                    </div>
                    <p className="text-sm text-gray-600"><span className="font-medium">Company:</span> {selectedStudent.company}</p>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {students.map((student, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-lg">
                          {student.name[0]}
                        </div>
                        <span className={"px-3 py-1 rounded-full text-xs font-semibold " + statusColors[student.status]}>{student.status}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1">{student.name}</h3>
                      <p className="text-gray-500 text-sm mb-1">{student.regNo}</p>
                      <p className="text-gray-500 text-sm mb-3">{student.course}</p>
                      <p className="text-gray-600 text-sm mb-3">📍 {student.company}</p>
                      <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
                        <div className="bg-indigo-500 h-2 rounded-full" style={{ width: student.progress + "%" }} />
                      </div>
                      <button onClick={() => setSelectedStudent(student)}
                        className="w-full border border-indigo-200 text-indigo-600 py-2 rounded-xl text-sm font-semibold hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
                        <Eye className="w-4 h-4" /> View Details
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Logbooks */}
          {activePage === "logbooks" && (
            <div className="space-y-4">
              {logbooks.map((log, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900">{log.student} — {log.week}</h3>
                      <p className="text-gray-500 text-sm">Submitted: {log.submitted}</p>
                    </div>
                    <span className={"px-3 py-1 rounded-full text-xs font-semibold " + statusColors[logbookStatuses[idx] || log.status]}>
                      {logbookStatuses[idx] || log.status}
                    </span>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-1">Activities:</p>
                    <p className="text-gray-600 text-sm">{log.activities}</p>
                  </div>
                  {feedback[idx] && (
                    <div className="bg-indigo-50 rounded-xl p-3 mb-4 border border-indigo-100">
                      <p className="text-sm font-medium text-indigo-700">Your Feedback:</p>
                      <p className="text-indigo-600 text-sm">{feedback[idx]}</p>
                    </div>
                  )}
                  {showFeedbackFor === idx && (
                    <div className="mb-4">
                      <textarea value={feedbackText} onChange={e => setFeedbackText(e.target.value)} rows={2}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm resize-none"
                        placeholder="Write feedback for student..." />
                      <div className="flex gap-2 mt-2">
                        <button onClick={() => handleFeedbackSubmit(idx)}
                          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">
                          Send Feedback
                        </button>
                        <button onClick={() => setShowFeedbackFor(null)}
                          className="border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                  {(logbookStatuses[idx] || log.status) === "Pending" && (
                    <div className="flex gap-3">
                      <button onClick={() => handleApprove(idx)}
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4" /> Approve
                      </button>
                      <button onClick={() => handleReject(idx)}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                        <AlertCircle className="w-4 h-4" /> Reject
                      </button>
                      <button onClick={() => setShowFeedbackFor(idx)}
                        className="flex-1 border border-indigo-200 text-indigo-600 py-2 rounded-xl text-sm font-semibold hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
                        <MessageSquare className="w-4 h-4" /> Feedback
                      </button>
                    </div>
                  )}
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
                  { icon: BookOpen, color: "text-amber-600 bg-amber-100", msg: "John Kamau submitted Week 2 logbook for review", time: "2 hours ago" },
                  { icon: BookOpen, color: "text-amber-600 bg-amber-100", msg: "Mary Wanjiku submitted Week 1 logbook for review", time: "1 day ago" },
                  { icon: CheckCircle, color: "text-emerald-600 bg-emerald-100", msg: "Grace Achieng has completed her attachment!", time: "3 days ago" },
                  { icon: AlertCircle, color: "text-red-600 bg-red-100", msg: "James Mwangi has not submitted any logbook yet", time: "1 week ago" },
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
