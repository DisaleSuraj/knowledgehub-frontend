import { useState, type ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Activity,
  Bell,
  Brain,
  Building2,
  ChevronDown,
  FileText,
  FolderOpen,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Menu,
  Search,
  Settings,
  ShieldAlert,
  ShieldCheck,
  UserCog,
  Users,
  X,
} from "lucide-react";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";


// ===============================================================
// AI USAGE DATA
// ===============================================================

const aiUsageData = [
  { day: "Mon", requests: 420 },
  { day: "Tue", requests: 680 },
  { day: "Wed", requests: 540 },
  { day: "Thu", requests: 850 },
  { day: "Fri", requests: 760 },
  { day: "Sat", requests: 940 },
  { day: "Sun", requests: 820 },
];


// ===============================================================
// ADMIN DASHBOARD
// ===============================================================

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [period, setPeriod] = useState("Last 7 days");

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">

      {/* =========================================================
          MOBILE OVERLAY
      ========================================================= */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}


      {/* =========================================================
          SIDEBAR
      ========================================================= */}

      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-[250px]
          bg-[#0b1f4b] text-white
          transition-transform duration-300
          lg:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* Logo */}

        <div className="flex h-[72px] items-center gap-3 border-b border-white/10 px-5">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-900/30">
            <Brain size={21} />
          </div>

          <div>
            <p className="text-sm font-bold tracking-tight">
              KnowledgeHub <span className="text-blue-300">AI</span>
            </p>

            <p className="text-[10px] text-blue-200">
              Enterprise Knowledge
            </p>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto rounded-lg p-1 hover:bg-white/10 lg:hidden"
          >
            <X size={19} />
          </button>

        </div>


        {/* Profile */}

        <div className="mx-4 mt-5 rounded-xl bg-white/10 p-3">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs font-bold">
              AS
            </div>

            <div className="min-w-0">

              <p className="truncate text-sm font-semibold">
                Amit Shah
              </p>

              <p className="truncate text-[11px] text-blue-200">
                Super Administrator
              </p>

            </div>

          </div>

        </div>


        {/* Navigation */}

        <nav className="mt-6 px-3">

          <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-widest text-blue-300">
            Main
          </p>


          <SidebarItem
            icon={<LayoutDashboard size={17} />}
            label="Dashboard"
            path="/admin/dashboard"
          />

          <SidebarItem
            icon={<UserCog size={17} />}
            label="User Management"
            path="/admin/users"
          />

          <SidebarItem
            icon={<Building2 size={17} />}
            label="Departments"
            path="/admin/departments"
          />

          <SidebarItem
            icon={<FileText size={17} />}
            label="Documents"
            path="/admin/documents"
          />

          <SidebarItem
            icon={<Brain size={17} />}
            label="AI Management"
            path="/admin/ai"
          />


          <p className="mb-2 mt-7 px-3 text-[10px] font-bold uppercase tracking-widest text-blue-300">
            Security & System
          </p>


          <SidebarItem
            icon={<ShieldCheck size={17} />}
            label="Security & Logs"
            path="/admin/security"
          />

          <SidebarItem
            icon={<Activity size={17} />}
            label="Analytics"
            path="/admin/analytics"
          />

          <SidebarItem
            icon={<Settings size={17} />}
            label="System Settings"
            path="/admin/settings"
          />

        </nav>


        {/* Logout */}

        <div className="absolute bottom-5 left-0 w-full px-3">

          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-blue-100 transition hover:bg-white/10">
            <LogOut size={17} />
            Sign out
          </button>

        </div>

      </aside>


      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <main className="lg:ml-[250px]">


        {/* =======================================================
            TOP BAR
        ======================================================= */}

        <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur md:px-7">

          <div className="flex items-center gap-4">

            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
            >
              <Menu size={22} />
            </button>


            {/* Search */}

            <div className="hidden h-10 w-[300px] items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 md:flex">

              <Search
                size={17}
                className="text-slate-400"
              />

              <input
                type="text"
                placeholder="Search anything..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />

            </div>

          </div>


          {/* Right side */}

          <div className="flex items-center gap-4">

            <button className="relative rounded-lg p-2.5 transition hover:bg-slate-100">

              <Bell
                size={19}
                className="text-slate-600"
              />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

            </button>


            <div className="hidden h-8 w-px bg-slate-200 sm:block" />


            <button className="hidden items-center gap-2 sm:flex">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                AS
              </div>

              <div className="text-left">

                <p className="text-xs font-semibold">
                  Amit Shah
                </p>

                <p className="text-[10px] text-slate-500">
                  Super Admin
                </p>

              </div>

              <ChevronDown
                size={15}
                className="text-slate-400"
              />

            </button>

          </div>

        </header>


        {/* =======================================================
            DASHBOARD CONTENT
        ======================================================= */}

        <div className="p-4 md:p-7">


          {/* Page heading */}

          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">

            <div>

              <p className="mb-1 text-sm font-semibold text-blue-600">
                Company Overview
              </p>

              <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-[28px]">
                Super Admin Dashboard
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Monitor and manage your organization's knowledge platform.
              </p>

            </div>


            <button
              onClick={() => navigate("/admin/security")}
              className="flex w-fit items-center gap-2 rounded-lg bg-[#3159e8] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2448ce]"
            >
              <ShieldCheck size={17} />
              System Status
            </button>

          </div>


          {/* =====================================================
              STAT CARDS
          ===================================================== */}

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            <StatCard
              title="Total Users"
              value="248"
              change="+8.4% from last month"
              icon={<Users size={20} />}
              iconBg="bg-blue-50"
              iconColor="text-blue-600"
            />

            <StatCard
              title="Active Users"
              value="196"
              change="+6.2% from last month"
              icon={<Activity size={20} />}
              iconBg="bg-emerald-50"
              iconColor="text-emerald-600"
            />

            <StatCard
              title="Departments"
              value="8"
              change="+1 this month"
              icon={<Building2 size={20} />}
              iconBg="bg-violet-50"
              iconColor="text-violet-600"
            />

            <StatCard
              title="Total Documents"
              value="3,482"
              change="+14.8% from last month"
              icon={<FileText size={20} />}
              iconBg="bg-orange-50"
              iconColor="text-orange-600"
            />

          </div>


          {/* =====================================================
              CHART SECTION
          ===================================================== */}

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.65fr_1fr]">


            {/* AI Usage */}

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="mb-5 flex items-start justify-between">

                <div>

                  <h2 className="text-base font-bold">
                    AI Usage Statistics
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    AI requests across the organization
                  </p>

                </div>


                <select
                  value={period}
                  onChange={(event) =>
                    setPeriod(event.target.value)
                  }
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium outline-none focus:border-blue-500"
                >

                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>

                </select>

              </div>


              <div className="h-[265px]">

                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >

                  <AreaChart data={aiUsageData}>

                    <defs>

                      <linearGradient
                        id="aiUsageGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >

                        <stop
                          offset="0%"
                          stopColor="#3159e8"
                          stopOpacity={0.25}
                        />

                        <stop
                          offset="100%"
                          stopColor="#3159e8"
                          stopOpacity={0}
                        />

                      </linearGradient>

                    </defs>


                    <XAxis
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fontSize: 11,
                        fill: "#64748b",
                      }}
                    />


                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fontSize: 10,
                        fill: "#94a3b8",
                      }}
                    />


                    <Tooltip
                      contentStyle={{
                        borderRadius: "10px",
                        border: "1px solid #e2e8f0",
                        fontSize: "12px",
                      }}
                    />


                    <Area
                      type="monotone"
                      dataKey="requests"
                      stroke="#3159e8"
                      strokeWidth={3}
                      fill="url(#aiUsageGradient)"
                    />

                  </AreaChart>

                </ResponsiveContainer>

              </div>

            </section>


            {/* Storage */}

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div>

                <h2 className="text-base font-bold">
                  Storage Usage
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Organization document storage
                </p>

              </div>


              <div className="flex flex-col items-center py-6">

                {/* Donut */}

                <div className="relative h-44 w-44">

                  <div
                    className="h-full w-full rounded-full"
                    style={{
                      background:
                        "conic-gradient(#3159e8 0deg 245deg, #e8edf5 245deg 360deg)",
                    }}
                  />

                  <div className="absolute inset-[18px] flex flex-col items-center justify-center rounded-full bg-white">

                    <span className="text-3xl font-bold">
                      68%
                    </span>

                    <span className="text-xs text-slate-500">
                      Used
                    </span>

                  </div>

                </div>


                <div className="mt-6 grid w-full grid-cols-2 gap-3">

                  <StorageItem
                    label="Used"
                    value="340 GB"
                  />

                  <StorageItem
                    label="Available"
                    value="160 GB"
                  />

                </div>

              </div>

            </section>

          </div>


          {/* =====================================================
              ACTIVITY + SECURITY
          ===================================================== */}

          <div className="mt-6 grid gap-6 xl:grid-cols-2">


            {/* Recent Activities */}

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="mb-5 flex items-center justify-between">

                <div>

                  <h2 className="text-base font-bold">
                    Recent Activities
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Latest activity on the platform
                  </p>

                </div>


                <button
                  onClick={() => navigate("/admin/security")}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  View all
                </button>

              </div>


              <div className="space-y-4">

                <ActivityItem
                  icon={<FileText size={16} />}
                  title="New document uploaded"
                  description="Engineering Handbook.pdf"
                  time="5 min ago"
                />

                <ActivityItem
                  icon={<Users size={16} />}
                  title="New user registered"
                  description="Priya Sharma joined Engineering"
                  time="28 min ago"
                />

                <ActivityItem
                  icon={<Brain size={16} />}
                  title="AI question answered"
                  description="Employee asked about leave policy"
                  time="1 hour ago"
                />

                <ActivityItem
                  icon={<FolderOpen size={16} />}
                  title="Document archived"
                  description="Old Finance Policy.pdf"
                  time="2 hours ago"
                />

              </div>

            </section>


            {/* Security Alerts */}

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="mb-5 flex items-center justify-between">

                <div>

                  <h2 className="text-base font-bold">
                    Security Alerts
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Recent security events
                  </p>

                </div>


                <div className="rounded-lg bg-orange-50 p-2 text-orange-500">
                  <ShieldAlert size={18} />
                </div>

              </div>


              <div className="space-y-3">

                <SecurityAlert
                  level="High"
                  title="Multiple failed login attempts"
                  time="10 min ago"
                />

                <SecurityAlert
                  level="Medium"
                  title="New device login detected"
                  time="32 min ago"
                />

                <SecurityAlert
                  level="Low"
                  title="Password reset requested"
                  time="1 hour ago"
                />

                <SecurityAlert
                  level="High"
                  title="Suspicious activity detected"
                  time="3 hours ago"
                />

              </div>

            </section>

          </div>


          {/* =====================================================
              QUICK ACTIONS
          ===================================================== */}

          <section className="mt-6">

            <div className="mb-4 flex items-center justify-between">

              <div>

                <h2 className="text-base font-bold">
                  Quick Actions
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Frequently used administration tools
                </p>

              </div>

            </div>


            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

              <QuickAction
                icon={<UserCog size={20} />}
                title="Manage Users"
                description="Add, edit or manage users"
                path="/admin/users"
              />

              <QuickAction
                icon={<Building2 size={20} />}
                title="Departments"
                description="Manage company departments"
                path="/admin/departments"
              />

              <QuickAction
                icon={<Brain size={20} />}
                title="AI Management"
                description="Configure AI services"
                path="/admin/ai"
              />

              <QuickAction
                icon={<LockKeyhole size={20} />}
                title="Security"
                description="Review security controls"
                path="/admin/security"
              />

            </div>

          </section>


          {/* Bottom spacing */}

          <div className="h-8" />

        </div>

      </main>

    </div>
  );
};


// ===============================================================
// SIDEBAR ITEM
// ===============================================================

const SidebarItem = ({
  icon,
  label,
  path,
}: {
  icon: ReactNode;
  label: string;
  path: string;
}) => {

  const navigate = useNavigate();
  const location = useLocation();

  const active = location.pathname === path;

  return (
    <button
      onClick={() => navigate(path)}
      className={`
        mb-1 flex w-full items-center gap-3 rounded-lg
        px-4 py-3 text-sm transition
        ${
          active
            ? "bg-[#3159e8] text-white shadow-lg shadow-blue-950/20"
            : "text-blue-100 hover:bg-white/10"
        }
      `}
    >

      {icon}

      <span>
        {label}
      </span>

    </button>
  );
};


// ===============================================================
// STAT CARD
// ===============================================================

const StatCard = ({
  title,
  value,
  change,
  icon,
  iconBg,
  iconColor,
}: {
  title: string;
  value: string;
  change: string;
  icon: ReactNode;
  iconBg: string;
  iconColor: string;
}) => {

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-xs font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-2xl font-bold tracking-tight">
            {value}
          </p>

        </div>


        <div className={`rounded-xl p-2.5 ${iconBg} ${iconColor}`}>
          {icon}
        </div>

      </div>


      <p className="mt-4 text-[11px] font-medium text-emerald-600">
        ↑ {change}
      </p>

    </div>
  );
};


// ===============================================================
// STORAGE ITEM
// ===============================================================

const StorageItem = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {

  return (
    <div className="rounded-xl bg-slate-50 p-3">

      <p className="text-[11px] text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold">
        {value}
      </p>

    </div>
  );
};


// ===============================================================
// ACTIVITY ITEM
// ===============================================================

const ActivityItem = ({
  icon,
  title,
  description,
  time,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  time: string;
}) => {

  return (
    <div className="flex items-center gap-3">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-sm font-medium">
          {title}
        </p>

        <p className="truncate text-xs text-slate-500">
          {description}
        </p>

      </div>

      <span className="whitespace-nowrap text-[10px] text-slate-400">
        {time}
      </span>

    </div>
  );
};


// ===============================================================
// SECURITY ALERT
// ===============================================================

const SecurityAlert = ({
  level,
  title,
  time,
}: {
  level: "High" | "Medium" | "Low";
  title: string;
  time: string;
}) => {

  const badgeStyles = {
    High: "bg-red-50 text-red-600",
    Medium: "bg-orange-50 text-orange-600",
    Low: "bg-blue-50 text-blue-600",
  };

  const iconStyles = {
    High: "text-red-500",
    Medium: "text-orange-500",
    Low: "text-blue-500",
  };

  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">

      <span
        className={`rounded-md px-2 py-1 text-[9px] font-bold uppercase ${badgeStyles[level]}`}
      >
        {level}
      </span>

      <div className="min-w-0 flex-1">

        <p className="text-sm font-medium">
          {title}
        </p>

        <p className="mt-0.5 text-[10px] text-slate-400">
          {time}
        </p>

      </div>

      <ShieldAlert
        size={16}
        className={iconStyles[level]}
      />

    </div>
  );
};


// ===============================================================
// QUICK ACTION
// ===============================================================

const QuickAction = ({
  icon,
  title,
  description,
  path,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  path: string;
}) => {

  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
    >

      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>

      <p className="text-sm font-semibold">
        {title}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        {description}
      </p>

    </button>
  );
};


export default AdminDashboard;