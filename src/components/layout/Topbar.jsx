import TenantSwitcher from '../common/TenantSwitcher'
import RoleSwitcher from '../common/RoleSwitcher'
import { useAuthStore } from '../../stores/auth.store'

export default function Topbar() {
    const { user } = useAuthStore()

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
                <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                        {user.name.charAt(0)}
                    </div>


                    {/* Name */}
                    <div className="flex flex-col leading-tight">
                        <span className="text-sm font-medium text-gray-800">
                            {user.name}
                        </span>
                        <span className="text-xs text-gray-500">
                            {user.role === 'Admin' ? 'Administrator' : 'Sales Agent'}
                        </span>
                    </div>
                </div>

                {/* Role switch (demo-only but clean) */}

            </div>
        </header>
    )
}
