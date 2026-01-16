export function isAdmin(user) {
    return user?.role === 'Admin'
}


export function isAgent(user) {
    return user?.role === 'Agent'
}