import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap, Building2, Users, BookOpen,
  CheckCircle, ArrowRight, Star, Menu, X,
  FileText, Bell, Award, Globe
} from "lucide-react";

const features = [
  { icon: FileText, title: "Easy Applications", desc: "Students browse and apply for attachment positions with one click" },
  { icon: Bell, title: "Real-time Updates", desc: "Get instant notifications on application status and supervisor feedback" },
  { icon: BookOpen, title: "Digital Logbook", desc: "Submit weekly reports and logbooks online — no more paper files" },
  { icon: Award, title: "Completion Certificate", desc: "Download your attachment certificate directly from the portal" },
  { icon: Building2, title: "Company Listings", desc: "Companies post opportunities and manage student applications easily" },
  { icon: Globe, title: "University-wide", desc: "Supervisors monitor all students across departments in one place" },
];

const roles = [
  { icon: GraduationCap, title: "Students", color: "bg-blue-500", desc: "Browse opportunities, apply, submit logbooks and track your attachment progress all in one place.", points: ["Apply for attachments", "Submit weekly reports", "Get supervisor feedback", "Download certificate"] },
  { icon: Users, title: "Supervisors", color: "bg-emerald-500", desc: "Monitor your assigned students, review reports and provide feedback efficiently.", points: ["View assigned students", "Review logbooks", "Approve completions", "Generate reports"] },
  { icon: Building2, title: "Companies", color: "bg-purple-500", desc: "Post attachment opportunities and find the best students for your organization.", points: ["Post opportunities", "Review applications", "Accept students", "Submit evaluations"] },
  { icon: Star, title: "Admin", color: "bg-amber-500", desc: "Full control over the portal — manage users, departments and generate university reports.", points: ["Manage all users", "Approve companies", "View analytics", "Generate reports"] },
];

const stats = [
  { value: "2,400+", label: "Students Placed" },
  { value: "350+", label: "Partner Companies" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "12+", label: "Universities" },
];

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">UniAttach</h1>
              <p className="text-xs text-gray-500 -mt-1">Portal</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">Features</a>
            <a href="#how" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">How it Works</a>
            <a href="#roles" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">Who it's For</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <button className="px-5 py-2 text-blue-600 font-semibold text-sm border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors">
                Sign In
              </button>
            </Link>
            <Link to="/register">
              <button className="px-5 py-2 bg-blue-600 text-white font-semibold text-sm rounded-xl hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </Link>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t bg-white px-6 py-4 space-y-3">
            <a href="#features" className="block text-gray-600 font-medium">Features</a>
            <a href="#how" className="block text-gray-600 font-medium">How it Works</a>
            <a href="#roles" className="block text-gray-600 font-medium">Who it's For</a>
            <Link to="/login"><button className="w-full border border-blue-200 text-blue-600 py-2 rounded-xl font-semibold">Sign In</button></Link>
            <Link to="/register"><button className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold">Get Started</button></Link>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-6">
              🎓 Built for Kenyan Universities
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Connecting Students<br />to <span className="text-yellow-300">Opportunities</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              UniAttach Portal streamlines the entire student attachment process — from application to completion certificate — all in one place.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/register">
                <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/login">
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
                  Sign In
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-1">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase text-sm tracking-wide">Features</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A complete solution for managing student industrial attachments</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, idx) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase text-sm tracking-wide">Process</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple 4-step process for students</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Register", desc: "Create your account with your student number and university email" },
              { step: "2", title: "Browse & Apply", desc: "Search attachment opportunities and apply to your preferred companies" },
              { step: "3", title: "Get Placed", desc: "Receive placement confirmation and begin your attachment" },
              { step: "4", title: "Report & Complete", desc: "Submit weekly logbooks and get your completion certificate" },
            ].map((s, idx) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase text-sm tracking-wide">Who It's For</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Built For Everyone</h2>
            <p className="text-xl text-gray-600">One portal, four powerful dashboards</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, idx) => (
              <motion.div key={role.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className={"w-12 h-12 " + role.color + " rounded-xl flex items-center justify-center mb-4"}>
                  <role.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{role.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{role.desc}</p>
                <ul className="space-y-2">
                  {role.points.map(p => (
                    <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-10">Join thousands of students and companies already using UniAttach Portal</p>
          <Link to="/register">
            <button className="bg-white text-blue-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
              Create Free Account
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold">UniAttach Portal</h1>
                <p className="text-xs text-gray-400">Connecting Students to Opportunities</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">© 2026 UniAttach Portal. Built for Kenyan Universities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
