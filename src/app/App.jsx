import { useAuthStore } from '../stores/auth.store'
import Login from '../components/pages/Login'
import Layout from '../components/layout/Layout'
import AppRoutes from './AppRoutes'


export default function App() {
const user = useAuthStore((s) => s.user)


if (!user) {
return <Login />
}


return (
<Layout>
<AppRoutes />
</Layout>
)
}