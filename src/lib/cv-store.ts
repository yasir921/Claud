import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  CVData,
  PersonalInfo,
  Experience,
  Education,
  emptyPersonalInfo,
} from '@/types/cv';

interface CVStore extends CVData {
  paymentStatus: 'pending' | 'paid' | null;
  paymentSessionId: string | null;
  setPersonalInfo: (info: PersonalInfo) => void;
  addExperience: (exp: Experience) => void;
  updateExperience: (id: string, exp: Partial<Experience>) => void;
  removeExperience: (id: string) => void;
  addEducation: (edu: Education) => void;
  updateEducation: (id: string, edu: Partial<Education>) => void;
  removeEducation: (id: string) => void;
  setSkills: (skills: string[]) => void;
  setSummary: (summary: string) => void;
  setTemplate: (template: CVData['selectedTemplate']) => void;
  setPayment: (status: 'pending' | 'paid', sessionId: string) => void;
  getCVData: () => CVData;
  reset: () => void;
}

const initialState: CVData & { paymentStatus: 'pending' | 'paid' | null; paymentSessionId: string | null } = {
  personalInfo: emptyPersonalInfo,
  experiences: [],
  education: [],
  skills: [],
  summary: '',
  selectedTemplate: 'modern',
  paymentStatus: null,
  paymentSessionId: null,
};

export const useCVStore = create<CVStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      setPersonalInfo: (info) => set({ personalInfo: info }),
      addExperience: (exp) =>
        set((state) => ({ experiences: [...state.experiences, exp] })),
      updateExperience: (id, updates) =>
        set((state) => ({
          experiences: state.experiences.map((exp) =>
            exp.id === id ? { ...exp, ...updates } : exp
          ),
        })),
      removeExperience: (id) =>
        set((state) => ({
          experiences: state.experiences.filter((exp) => exp.id !== id),
        })),
      addEducation: (edu) =>
        set((state) => ({ education: [...state.education, edu] })),
      updateEducation: (id, updates) =>
        set((state) => ({
          education: state.education.map((edu) =>
            edu.id === id ? { ...edu, ...updates } : edu
          ),
        })),
      removeEducation: (id) =>
        set((state) => ({
          education: state.education.filter((edu) => edu.id !== id),
        })),
      setSkills: (skills) => set({ skills }),
      setSummary: (summary) => set({ summary }),
      setTemplate: (selectedTemplate) => set({ selectedTemplate }),
      setPayment: (status, sessionId) =>
        set({ paymentStatus: status, paymentSessionId: sessionId }),
      getCVData: () => {
        const state = get();
        return {
          personalInfo: state.personalInfo,
          experiences: state.experiences,
          education: state.education,
          skills: state.skills,
          summary: state.summary,
          selectedTemplate: state.selectedTemplate,
        };
      },
      reset: () => set(initialState),
    }),
    {
      name: 'cvdubai-store',
    }
  )
);
