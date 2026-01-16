import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  PhoneCall,
  Settings,
  TrendingUp,
} from 'lucide-react'
import { useAuthStore } from '../../stores/auth.store'

const linkClass = ({ isActive }) =>
  `flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium transition ${
    isActive
      ? 'bg-blue-600 text-white'
      : 'text-gray-700 hover:bg-gray-100'
  }`

export default function Sidebar() {
  const { user } = useAuthStore()

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">
      {/* Brand */}
      <div className="px-4 pt-5 pb-3">
        <div className="flex items-center gap-3">
          {/* Logo Icon */}
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
            <TrendingUp size={18} />
          </div>

          {/* Brand Text */}
          <div className="leading-tight">
            <h1 className="text-lg font-semibold text-gray-900">
              SalesDesk
            </h1>
            <p className="text-xs text-gray-500">
              Sales workspace
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-4 space-y-1 px-4">
        <NavLink to="/leads" className={linkClass}>
          <LayoutDashboard size={18} />
          Leads
        </NavLink>

        <NavLink to="/calls" className={linkClass}>
          <PhoneCall size={18} />
          Calls
        </NavLink>
      </nav>

      {/* Settings (Bottom) */}
      {user.role === 'Admin' && (
        <div className="mt-auto px-4 pb-5">
          <NavLink to="/settings" className={linkClass}>
            <Settings size={18} />
            Settings
          </NavLink>
        </div>
      )}
    </aside>
  )
}
