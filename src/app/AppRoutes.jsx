import { Routes, Route, Navigate } from 'react-router-dom'


import LeadsPage from '../features/leads/LeadsPage'
import CallsPage from '../features/calls/CallsPage'
import SettingsPage from '../features/settings/SettingsPage'
import { useAuthStore } from '../stores/auth.store'


function RequireAdmin({ children }) {
const { user } = useAuthStore()


if (user.role !== 'Admin') {
return <Navigate to="/leads" replace />
}


return children
}


export default function AppRoutes() {
return (
<Routes>
<Route path="/" element={<Navigate to="/leads" replace />} />
<Route path="/leads" element={<LeadsPage />} />
<Route path="/calls" element={<CallsPage />} />
<Route
path="/settings"
element={
<RequireAdmin>
<SettingsPage />
</RequireAdmin>
}
/>
</Routes>
)
}



<Route
path="/settings"
element={
<RequireAdmin>
<SettingsPage />
</RequireAdmin>
}
/>