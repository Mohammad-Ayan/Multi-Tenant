import { useAuthStore } from '../../stores/auth.store'

export default function RoleSwitcher() {
  const { user, loginAsAdmin, loginAsAgent } = useAuthStore()

  return (
    <div className="flex items-center rounded-full bg-gray-100 p-1 text-xs">
      <button
        onClick={loginAsAdmin}
        className={`rounded-full px-3 py-1 transition ${user.role === 'Admin'
            ? 'bg-white font-semibold text-blue-600 shadow'
            : 'text-gray-500 hover:text-gray-700'
          }`}
      >
        Admin
      </button>
      <button
        onClick={loginAsAgent}
        className={`rounded-full px-3 py-1 transition ${user.role === 'Agent'
            ? 'bg-white font-semibold text-blue-600 shadow'
            : 'text-gray-500 hover:text-gray-700'
          }`}
      >
        Agent
      </button>
    </div>
  )
}
