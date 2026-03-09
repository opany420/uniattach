import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, LayoutDashboard, Users, Building2, GraduationCap, Bell, LogOut, Menu, X, CheckCircle, BarChart2, Download, Search } from "lucide-react";
import { Link } from "react-router-dom";
const sidebarLinks = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: Users, label: "All Students", id: "students" },
  { icon: Building2, label: "Companies", id: "companies" },
  { icon: GraduationCap, label: "Supervisors", id: "supervisors" },
  { icon: BarChart2, label: "Reports", id: "reports" },
  { icon: Bell, label: "Notifications", id: "notifications" },
];
const students = [
  { name: "John Kamau", regNo: "KSU/CS/001/2022", university: "Kisii University", course: "Computer Science", company: "KCB Bank", status: "Active" },
  { name: "Mary Wanjiku", regNo: "KSU/CS/002/2022", university: "Kisii University", course: "Computer Science", company: "Safaricom PLC", status: "Active" },
  { name: "Peter Odhiambo", regNo: "KSU/EE/003/2022", university: "Kisii University", course: "Electrical Eng", company: "Kenya Power", status: "Active" },
  { name: "Grace Achieng", regNo: "KSU/BF/004/2022", university: "Kisii University", course: "Business Finance", company: "Equity Bank", status: "Completed" },
  { name: "James Mwangi", regNo: "KSU/CS/005/2022", university: "Kisii University", course: "Computer Science", company: "-", status: "Pending" },
  { name: "Alice Moraa", regNo: "EG/BA/010/2022", university: "Egerton University", course: "Business Admin", company: "Nation Media", status: "Active" },
  { name: "Brian Kipchoge", regNo: "UON/CE/020/2022", university: "University of Nairobi", course: "Civil Engineering", company: "-", status: "Pending" },
];
const companies = [
  { name: "Safaricom PLC", sector: "Technology", location: "Nairobi", slots: 2, interns: 1, status: "Approved" },
  { name: "KCB Bank", sector: "Finance", location: "Kisii", slots: 3, interns: 1, status: "Approved" },
  { name: "Kenya Power", sector: "Engineering", location: "Kisumu", slots: 1, interns: 1, status: "Approved" },
  { name: "Equity Bank", sector: "Finance", location: "Nairobi", slots: 2, interns: 0, status: "Approved" },
  { name: "Nation Media", sector: "Media", location: "Nairobi", slots: 2, interns: 1, status: "Pending" },
  { name: "KPLC Contractor", sector: "Engineering", location: "Eldoret", slots: 3, interns: 0, status: "Pending" },
];
const supervisors = [
  { name: "Dr. David Otieno", department: "Computer Science", university: "Kisii University", students: 3 },
  { name: "Prof. Jane Muthoni", department: "Business Finance", university: "Kisii University", students: 1 },
  { name: "Dr. Samuel Barasa", department: "Electrical Eng", university: "Kisii University", students: 1 },
];
const statusColors = { Active: "bg-emerald-100 text-emerald-700", Completed: "bg-blue-100 text-blue-700", Pending: "bg-amber-100 text-amber-700", Approved: "bg-emerald-100 text-emerald-700", Rejected: "bg-red-100 text-red-700" };
export default function AdminDashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [companyStatuses, setCompanyStatuses] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const handleApprove = (idx) => setCompanyStatuses({ ...companyStatuses, [idx]: "Approved" });
  const handleReject = (idx) => setCompanyStatuses({ ...companyStatuses, [idx]: "Rejected" });
  const filtered = students.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.regNo.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className={`${sidebarOpen ? "w-64" : "w-20"} bg-gray-900 min-h-screen flex flex-col transition-all duration-300 fixed z-40`}>
        <div className="flex items-center gap-3 p-6 border-b border-gray-700">
          <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center"><Shield className="w-6 h-6 text-white" /></div>
          {sidebarOpen && <div><h1 className="text-white font-bold text-sm">UniAttach</h1><p className="text-gray-400 text-xs">Admin Portal</p></div>}
        </div>
        {sidebarOpen && <div className="px-6 py-4 border-b border-gray-700"><div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-2">A</div><p className="text-white font-semibold text-sm">System Admin</p><p className="text-gray-400 text-xs">Kisii University</p></div>}
        <nav className="flex-1 p-4 space-y-1">
          {sidebarLinks.map(link => (
            <button key={link.id} onClick={() => setActivePage(link.id)} className={"w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all " + (activePage === link.id ? "bg-purple-600 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white")}>
              <link.icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="font-medium text-sm">{link.label}</span>}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-700">
          <Link to="/login"><button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-400 hover:bg-gray-800 hover:text-white"><LogOut className="w-5 h-5" />{sidebarOpen && <span className="text-sm font-medium">Sign Out</span>}</button></Link>
        </div>
      </aside>
      <div className={`flex-1 ${sidebarOpen ? "ml-64" : "ml-20"} transition-all duration-300`}>
        <header className="bg-white border-b px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100">{sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
            <h2 className="text-xl font-bold text-gray-900 capitalize">{activePage}</h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-gray-100 relative"><Bell className="w-5 h-5 text-gray-600" /><span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span></button>
            <div className="w-9 h-9 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">A</div>
          </div>
        </header>
        <main className="p-6">
          {activePage === "dashboard" && (
            <div>
              <div className="mb-6"><h3 className="text-2xl font-bold text-gray-900">Admin Overview</h3><p className="text-gray-500">Kisii University Attachment Management System</p></div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[{label:"Total Students",value:students.length,icon:Users,color:"bg-blue-500"},{label:"Companies",value:companies.length,icon:Building2,color:"bg-teal-500"},{label:"Supervisors",value:supervisors.length,icon:GraduationCap,color:"bg-indigo-500"},{label:"Placements",value:students.filter(s=>s.status==="Active"||s.status==="Completed").length,icon:CheckCircle,color:"bg-emerald-500"}].map((stat,idx)=>(
                  <motion.div key={stat.label} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:idx*0.1}} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className={"w-12 h-12 "+stat.color+" rounded-xl flex items-center justify-center mb-3"}><stat.icon className="w-6 h-6 text-white"/></div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-6 border-b flex items-center justify-between"><h4 className="text-lg font-bold text-gray-900">Pending Company Approvals</h4><button onClick={()=>setActivePage("companies")} className="text-purple-600 text-sm font-medium hover:underline">View All</button></div>
                <div className="p-6 space-y-3">
                  {companies.filter(c=>c.status==="Pending").map((co,idx)=>(
                    <div key={idx} className="flex items-center justify-between p-4 bg-amber-50 rounded-xl border border-amber-100">
                      <div><p className="font-semibold text-gray-900">{co.name}</p><p className="text-gray-500 text-sm">{co.sector} - {co.location} - {co.slots} slots</p></div>
                      <div className="flex gap-2">
                        <button onClick={()=>handleApprove(companies.indexOf(co))} className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold">Approve</button>
                        <button onClick={()=>handleReject(companies.indexOf(co))} className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold">Reject</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activePage === "students" && (
            <div>
              <div className="relative mb-6"><Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"/><input value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm" placeholder="Search students..."/></div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b"><tr>{["Name","Reg No","University","Course","Company","Status"].map(h=>(<th key={h} className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">{h}</th>))}</tr></thead>
                    <tbody className="divide-y divide-gray-100">{filtered.map((s,idx)=>(<tr key={idx} className="hover:bg-gray-50"><td className="px-6 py-4 text-sm font-medium text-gray-900">{s.name}</td><td className="px-6 py-4 text-sm text-gray-500">{s.regNo}</td><td className="px-6 py-4 text-sm text-gray-500">{s.university}</td><td className="px-6 py-4 text-sm text-gray-500">{s.course}</td><td className="px-6 py-4 text-sm text-gray-500">{s.company}</td><td className="px-6 py-4"><span className={"px-3 py-1 rounded-full text-xs font-semibold "+statusColors[s.status]}>{s.status}</span></td></tr>))}</tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {activePage === "companies" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((co,idx)=>(
                <motion.div key={idx} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:idx*0.05}} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4"><div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 font-bold text-lg">{co.name[0]}</div><span className={"px-3 py-1 rounded-full text-xs font-semibold "+statusColors[companyStatuses[idx]||co.status]}>{companyStatuses[idx]||co.status}</span></div>
                  <h3 className="font-bold text-gray-900 mb-1">{co.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{co.sector} - {co.location}</p>
                  {(companyStatuses[idx]||co.status)==="Pending"&&(<div className="flex gap-2"><button onClick={()=>handleApprove(idx)} className="flex-1 bg-emerald-600 text-white py-2 rounded-xl text-xs font-semibold">Approve</button><button onClick={()=>handleReject(idx)} className="flex-1 bg-red-500 text-white py-2 rounded-xl text-xs font-semibold">Reject</button></div>)}
                </motion.div>
              ))}
            </div>
          )}
          {activePage === "supervisors" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supervisors.map((sup,idx)=>(
                <motion.div key={idx} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:idx*0.1}} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl mb-4">{sup.name[0]}</div>
                  <h3 className="font-bold text-gray-900">{sup.name}</h3>
                  <p className="text-gray-500 text-sm mb-1">{sup.department}</p>
                  <p className="text-gray-400 text-sm mb-4">{sup.university}</p>
                  <div className="bg-indigo-50 rounded-xl p-3 text-center"><p className="text-2xl font-bold text-indigo-600">{sup.students}</p><p className="text-indigo-500 text-xs">Students Supervised</p></div>
                </motion.div>
              ))}
            </div>
          )}
          {activePage === "reports" && (
            <div className="grid md:grid-cols-2 gap-6">
              {[{title:"Student Placement Report",desc:"Full list of all students and placement status",icon:Users,color:"bg-blue-500"},{title:"Company Performance Report",desc:"Overview of companies and intern evaluations",icon:Building2,color:"bg-teal-500"},{title:"Supervisor Activity Report",desc:"Logbook review activities summary",icon:GraduationCap,color:"bg-indigo-500"},{title:"Completion Report",desc:"Students who completed attachment",icon:CheckCircle,color:"bg-emerald-500"}].map((r,idx)=>(
                <motion.div key={idx} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:idx*0.1}} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className={"w-12 h-12 "+r.color+" rounded-xl flex items-center justify-center mb-4"}><r.icon className="w-6 h-6 text-white"/></div>
                  <h3 className="font-bold text-gray-900 mb-2">{r.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{r.desc}</p>
                  <button className="w-full border border-purple-200 text-purple-600 py-2 rounded-xl text-sm font-semibold hover:bg-purple-50 flex items-center justify-center gap-2"><Download className="w-4 h-4"/>Download PDF</button>
                </motion.div>
              ))}
            </div>
          )}
          {activePage === "notifications" && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="p-6 border-b"><h4 className="text-lg font-bold text-gray-900">System Notifications</h4></div>
              <div className="p-6 space-y-4">
                {[{icon:Building2,color:"text-amber-600 bg-amber-100",msg:"Nation Media is awaiting company approval",time:"1 hour ago"},{icon:Building2,color:"text-amber-600 bg-amber-100",msg:"KPLC Contractor is awaiting company approval",time:"3 hours ago"},{icon:CheckCircle,color:"text-emerald-600 bg-emerald-100",msg:"Grace Achieng has completed her attachment",time:"3 days ago"},{icon:Users,color:"text-blue-600 bg-blue-100",msg:"2 new students registered",time:"1 week ago"}].map((n,idx)=>(
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className={"w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 "+n.color}><n.icon className="w-5 h-5"/></div>
                    <div><p className="text-gray-900 text-sm font-medium">{n.msg}</p><p className="text-gray-400 text-xs mt-1">{n.time}</p></div>
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
