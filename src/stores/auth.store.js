import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  user: {
    id: 'u1',
    name: 'Amina Akhtar',
    role: 'Admin',

    // orgs user CAN access
    allowedTenants: ['orgA', 'orgB'],

    // ACTIVE org (single value)
    tenantId: 'orgA',
  },

  loginAsAdmin() {
    set({
      user: {
        id: 'u1',
        name: 'Amina Akhtar',
        role: 'Admin',
        allowedTenants: ['orgA', 'orgB'],
        tenantId: 'orgA', // default active org
      },
    })
  },

  loginAsAgent() {
    set({
      user: {
        id: 'u2',
        name: 'Sales Agent',
        role: 'Agent',
        allowedTenants: ['orgA'],
        tenantId: 'orgA',
      },
    })
  },

  setTenant(tenantId) {
    set((state) => ({
      user: {
        ...state.user,
        tenantId, // ✅ always ONE value
      },
    }))
  },
}))
