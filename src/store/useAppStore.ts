import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Project, User } from '@/types';

interface AppState {
  user: User | null;
  projects: Project[];
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  addProject: (project: Project) => void;
  updateProject: (id: string, updates: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  getProject: (id: string) => Project | undefined;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      user: null,
      projects: [],
      isAuthenticated: false,
      
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      
      login: async (email, password) => {
        // Simulate login - in production, this would call an API
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (email && password) {
          const user: User = {
            id: crypto.randomUUID(),
            email,
            name: email.split('@')[0],
          };
          set({ user, isAuthenticated: true });
          return true;
        }
        return false;
      },
      
      signup: async (name, email, password) => {
        // Simulate signup - in production, this would call an API
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (name && email && password) {
          const user: User = {
            id: crypto.randomUUID(),
            email,
            name,
          };
          set({ user, isAuthenticated: true });
          return true;
        }
        return false;
      },
      
      logout: () => set({ user: null, isAuthenticated: false }),
      
      addProject: (project) => set((state) => ({ 
        projects: [...state.projects, project] 
      })),
      
      updateProject: (id, updates) => set((state) => ({
        projects: state.projects.map(p => 
          p.id === id ? { ...p, ...updates, updatedAt: new Date() } : p
        ),
      })),
      
      deleteProject: (id) => set((state) => ({
        projects: state.projects.filter(p => p.id !== id),
      })),
      
      getProject: (id) => get().projects.find(p => p.id === id),
    }),
    {
      name: 'devestimate-storage',
    }
  )
);
