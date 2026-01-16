import Sidebar from './Sidebar.jsx';
import Topbar from './Topbar.jsx';


export default function Layout({ children }) {
return (
<div className="flex h-screen bg-gray-50">
<Sidebar />
<div className="flex flex-col flex-1">
<Topbar />
<main className="flex-1 overflow-auto p-6">
{children}
</main>
</div>
</div>
)
}