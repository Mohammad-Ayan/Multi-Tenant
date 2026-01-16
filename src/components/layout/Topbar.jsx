import TenantSwitcher from '../common/TenantSwitcher'
import RoleSwitcher from '../common/RoleSwitcher'
import { useAuthStore } from '../../stores/auth.store'
import { UserCircle } from 'lucide-react'


export default function Topbar() {
    const { user } = useAuthStore()
    const isAdmin = user.role === 'Admin'

    return (
        <header className="flex h-16 items-center border-b bg-white px-6">
            {/* LEFT — Tenant Context */}
            <div className="flex items-center gap-3">
                <TenantSwitcher />
            </div>

            {/* CENTER — Spacer (keeps layout balanced & premium) */}
            <div className="flex flex-1 justify-center" />

            {/* RIGHT — User Profile */}
            <div className="flex items-center gap-8">

                <RoleSwitcher />

                {/* User info block */}
                <div className="ml-5 flex items-center gap-3">
                    <div
                        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${isAdmin
                            ? 'bg-blue-500 text-white ring-2 ring-blue-200'
                            : 'bg-blue-100 text-blue-600'
                            }`}
                    >
                        <UserCircle size={22} />
                    </div>

                    {/* Name (fixed width to prevent shift) */}
                    <div className="flex min-w-[120px] flex-col leading-tight">
                        <span className="truncate text-sm font-medium text-gray-800">
                            {user.name}
                        </span>
                        <span className="text-xs text-gray-500">
                            {user.role === 'Admin' ? 'Administrator' : 'Sales Agent'}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}
