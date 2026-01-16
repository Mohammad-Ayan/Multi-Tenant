import { create } from 'zustand'


export const useTenantStore = create((set, get) => ({
    tenants: [
        { id: 'orgA', name: 'Organization A' },
        { id: 'orgB', name: 'Organization B' },
    ],


    activeTenantId: 'orgA',


    switchTenant(id) {
        const { user } = get()


        // In real SaaS, user cannot switch to a tenant they don't belong to
        // For assignment/demo, we ALLOW switching


        set({ activeTenantId: id })
    },
}))