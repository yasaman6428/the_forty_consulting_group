import React, { useState } from "react";
import {
  LayoutDashboard, BriefcaseBusiness, ChartNoAxesCombined,
  Target, BrainCircuit, Users, Database, Settings,
  Bell, Search, ChevronDown, Plus, ArrowUpRight,
  ArrowDownRight, Menu, X, FileText, CircleHelp,
  Activity, ShieldCheck, Sparkles, LogOut,
  TrendingUp, MoreHorizontal, GraduationCap, PlayCircle
} from "lucide-react";

const navItems = [
  { title: "???????? ??", icon: GraduationCap, group: "?????" },
  { title: "نمای کلی", icon: LayoutDashboard, group: "اصلی" },
  { title: "هوش تجاری", icon: ChartNoAxesCombined },
  { title: "هوش بازاریابی", icon: Target },
  { title: "برنامه‌ریزی کسب‌وکار", icon: BriefcaseBusiness },
  { title: "مدیریت عملکرد", icon: Activity },
  { title: "فضای مشاوره", icon: Users, group: "مدیریت" },
  { title: "پرتال مشتریان", icon: ShieldCheck },
  { title: "مرکز داده", icon: Database },
  { title: "تحلیلگر هوشمند AI", icon: BrainCircuit, group: "هوش مصنوعی" },
];

const projects = [
  { name: "Business Intelligence", client: "گروه صنعتی فیبو", progress: 82, status: "در حال اجرا", color: "#0092FF" },
  { name: "Marketing Strategy", client: "بصرفه‌ها", progress: 65, status: "در حال اجرا", color: "#22C58B" },
  { name: "Business Plan", client: "پروژه گلرنگ", progress: 100, status: "تکمیل شده", color: "#8B7CFF" },
  { name: "Performance Analysis", client: "پروژه جدید", progress: 35, status: "در حال اجرا", color: "#F4B740" },
];

const chartData = [32, 46, 39, 58, 50, 70, 61, 76, 68, 85, 73, 92];

function StatCard({ title, value, change, positive, icon: Icon }) {
  return (
    <div className="stat-card">
      <div className="flex justify-between items-center">
        <span className="stat-icon"><Icon size={19}/></span>
        <span className={`change ${positive ? "up" : "down"}`}>
          {positive ? <ArrowUpRight size={14}/> : <ArrowDownRight size={14}/>}
          {change}
        </span>
      </div>
      <div className="mt-5">
        <p className="muted text-sm">{title}</p>
        <h2 className="stat-number">{value}</h2>
      </div>
      <p className="muted text-xs mt-2">در مقایسه با دوره قبل</p>
    </div>
  );
}

function Sidebar({ active, setActive, open, setOpen }) {
  return (
    <>
      {open && <div className="mobile-overlay" onClick={() => setOpen(false)} />}
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark">40</div>
          <div>
            <div className="brand-name">THE FORTY</div>
            <div className="brand-sub">INTELLIGENCE PLATFORM</div>
          </div>
          <button className="mobile-close" onClick={() => setOpen(false)} aria-label="بستن منو">
            <X size={20}/>
          </button>
        </div>

        <div className="workspace">
          <div className="workspace-avatar">TF</div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white">The Forty Workspace</p>
            <p className="muted text-xs">Enterprise Account</p>
          </div>
          <ChevronDown size={16} className="muted mr-auto"/>
        </div>

        <nav className="nav-list">
          {navItems.map((item) => (
            <React.Fragment key={item.title}>
              {item.group && <p className="nav-group">{item.group}</p>}
              <button
                onClick={() => { setActive(item.title); setOpen(false); }}
                className={`nav-item ${active === item.title ? "active" : ""}`}
              >
                <item.icon size={18}/>
                <span>{item.title}</span>
                {item.title === "تحلیلگر هوشمند AI" && <span className="ai-tag">AI</span>}
              </button>
            </React.Fragment>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <button className="nav-item" onClick={() => { setActive("تنظیمات"); setOpen(false); }}>
            <Settings size={18}/> تنظیمات
          </button>
          <button className="nav-item" onClick={() => { setActive("راهنما"); setOpen(false); }}>
            <CircleHelp size={18}/> راهنما و پشتیبانی
          </button>
          <div className="user-profile">
            <div className="user-avatar">TF</div>
            <div className="min-w-0">
              <p className="text-sm text-white font-semibold">Administrator</p>
              <p className="muted text-xs">Super Admin</p>
            </div>
            <LogOut size={17} className="muted mr-auto"/>
          </div>
        </div>
      </aside>
    </>
  );
}

function PerformanceChart() {
  const points = chartData.map((v, i) => `${i * 65},${150 - v * 1.35}`).join(" ");
  return (
    <div className="chart-area">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h3 className="section-title">روند عملکرد کسب‌وکار</h3>
          <p className="muted text-xs mt-1">شاخص ترکیبی عملکرد در طول سال</p>
        </div>
        <select className="dark-select" defaultValue="year" aria-label="بازه زمانی">
          <option value="year">۱۲ ماه گذشته</option>
          <option value="month">این ماه</option>
          <option value="week">این هفته</option>
        </select>
      </div>
      <div className="flex gap-2 items-center mb-4">
        <span className="legend-dot"/>
        <span className="muted text-xs">Business Performance Index</span>
      </div>
      <svg viewBox="0 0 720 190" className="chart-svg" preserveAspectRatio="none" role="img" aria-label="نمودار روند عملکرد">
        {[30, 75, 120, 165].map(y => <line key={y} x1="0" y1={y} x2="720" y2={y} stroke="#253B57" strokeDasharray="4 5"/>)}
        <defs>
          <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#0092FF" stopOpacity=".3"/>
            <stop offset="100%" stopColor="#0092FF" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <polygon points={`0,180 ${points} 715,180`} fill="url(#chartFill)"/>
        <polyline points={points} fill="none" stroke="#0092FF" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"/>
      </svg>
      <div className="chart-months">
        {["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"].map(m => <span key={m}>{m}</span>)}
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <>
      <div className="welcome-row">
        <div>
          <p className="muted text-sm">داشبورد مدیریتی</p>
          <h1 className="page-title">نمای کلی کسب‌وکار</h1>
          <p className="muted text-sm mt-1">نمایی از وضعیت عملکرد و پروژه‌های شما</p>
        </div>
        <button className="primary-btn"><Plus size={17}/> ایجاد پروژه جدید</button>
      </div>

      <div className="stats-grid">
        <StatCard title="پروژه‌های فعال" value="۱۲" change="۱۸٪" positive icon={BriefcaseBusiness}/>
        <StatCard title="مشتریان سازمانی" value="۲۸" change="۱۲٪" positive icon={Users}/>
        <StatCard title="میانگین تحقق KPI" value="۸۶٪" change="۸٪" positive icon={Target}/>
        <StatCard title="شاخص عملکرد" value="۹۲.۴" change="۴٪" positive icon={TrendingUp}/>
      </div>

      <div className="main-grid">
        <section className="panel performance-panel"><PerformanceChart/></section>
        <section className="panel insight-panel">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center"><Sparkles size={18} color="#0092FF"/><h3 className="section-title">هوش تجاری AI</h3></div>
            <span className="ai-tag">BETA</span>
          </div>
          <p className="muted text-xs mt-2">Business Intelligence Insights</p>
          <div className="insight-highlight">
            <p className="text-sm font-semibold text-white">فرصت بهبود عملکرد</p>
            <p className="text-xs muted mt-2 leading-7">بر اساس داده‌های نمونه، دو پروژه نیازمند بازبینی منابع و زمان‌بندی هستند.</p>
          </div>
          <div className="insight-item"><span className="insight-bullet"/><span className="text-sm">بررسی شاخص‌های فروش</span></div>
          <div className="insight-item"><span className="insight-bullet"/><span className="text-sm">بازبینی بودجه کمپین‌ها</span></div>
          <button className="outline-btn w-full mt-4">مشاهده تحلیل‌ها <ArrowUpRight size={15}/></button>
        </section>
      </div>

      <section className="panel mt-5">
        <div className="flex items-center justify-between mb-5">
          <div><h3 className="section-title">پروژه‌های اخیر</h3><p className="muted text-xs mt-1">وضعیت پروژه‌های در حال اجرا</p></div>
          <button className="text-blue text-sm">مشاهده همه</button>
        </div>
        <div className="table-wrap">
          <table className="project-table">
            <thead><tr><th>نام پروژه</th><th>مشتری</th><th>پیشرفت</th><th>وضعیت</th><th></th></tr></thead>
            <tbody>
              {projects.map(p => (
                <tr key={p.name}>
                  <td className="font-semibold text-white">{p.name}</td>
                  <td>{p.client}</td>
                  <td><div className="flex items-center gap-3 min-w-32"><div className="progress-track"><div className="progress-value" style={{width: `${p.progress}%`, background: p.color}}/></div><span className="text-xs">{p.progress}%</span></div></td>
                  <td><span className={`status ${p.progress === 100 ? "complete" : ""}`}>{p.status}</span></td>
                  <td><MoreHorizontal size={18}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="bottom-grid">
        <section className="panel">
          <h3 className="section-title mb-4">فعالیت‌های اخیر</h3>
          {[
            ["گزارش عملکرد آماده شد","Business Intelligence","امروز، ۱۰:۳۰"],
            ["پروژه جدید ایجاد شد","Marketing Strategy","دیروز، ۱۴:۲۰"],
            ["KPI به‌روزرسانی شد","Performance Management","دیروز، ۰۹:۱۵"]
          ].map((a,i) => (
            <div className="activity-row" key={i}>
              <div className="activity-icon"><FileText size={17}/></div>
              <div className="flex-1"><p className="text-sm text-white">{a[0]}</p><p className="muted text-xs mt-1">{a[1]}</p></div>
              <span className="muted text-xs">{a[2]}</span>
            </div>
          ))}
        </section>
        <section className="panel">
          <h3 className="section-title mb-4">میانبرها</h3>
          <div className="shortcut-grid">
            {[[Plus,"پروژه جدید"],[ChartNoAxesCombined,"ساخت گزارش"],[Users,"افزودن مشتری"],[BrainCircuit,"تحلیل با AI"]].map(([Icon,label]) => (
              <button className="shortcut" key={label}><Icon size={20}/><span>{label}</span></button>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

function MyCourses() {
  return (
    <>
      <div className="welcome-row">
        <div>
          <p className="muted text-sm">???? ?????</p>
          <h1 className="page-title">???????? ??</h1>
          <p className="muted text-sm mt-1">??????? ? ??????? ??? ?? ?? ????? ????? ????.</p>
        </div>
      </div>
      <section className="panel courses-empty">
        <div className="courses-icon"><PlayCircle size={32}/></div>
        <h2 className="section-title">???? ??????? ????? ???? ???</h2>
        <p className="muted text-sm mt-3">?? ?? ????? ??? ???????? ????????? ?????? ? ???????? ??? ?? ????? ??????.</p>
      </section>
    </>
  );
}

export default function App() {
  const [active, setActive] = useState("نمای کلی");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="app-shell" dir="rtl">
      <Sidebar active={active} setActive={setActive} open={mobileOpen} setOpen={setMobileOpen}/>
      <main className="main-content">
        <header className="topbar">
          <div className="flex items-center gap-3">
            <button className="mobile-menu" onClick={() => setMobileOpen(true)} aria-label="باز کردن منو"><Menu size={21}/></button>
            <div className="breadcrumb">THE FORTY <span>/</span> {active}</div>
          </div>
          <div className="topbar-actions">
            <div className="search-box"><Search size={17}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="جستجو در پلتفرم..."/></div>
            <button className="icon-btn" aria-label="اعلان‌ها"><Bell size={19}/><i/></button>
            <div className="top-user"><div className="user-avatar">TF</div><ChevronDown size={15}/></div>
          </div>
        </header>
        <div className="content-area">
          {active === "نمای کلی" ? <Dashboard/> : (
            <div className="panel module-placeholder">
              <div className="module-icon"><LayoutDashboard size={28}/></div>
              <h1 className="page-title">{active}</h1>
              <p className="muted mt-3">این ماژول در ساختار محصول تعریف شده است و در مرحله بعد می‌توانیم صفحات اختصاصی و قابلیت‌های آن را پیاده‌سازی کنیم.</p>
              <button className="primary-btn mt-6" onClick={() => setActive("نمای کلی")}>بازگشت به داشبورد</button>
            </div>
          )}
          <footer className="footer"><span>© 2026 THE FORTY. All rights reserved.</span><span>Intelligence meets strategy.</span></footer>
        </div>
      </main>
    </div>
  );
}