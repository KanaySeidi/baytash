import { create } from "zustand";
import API from "../../helpers/axios";

interface Vacancy {
  id: number;
  position: string;
  description: string;
}

interface VacancyStore {
  vacancies: Vacancy[];
  loading: boolean;
  error: string | null;
  fetchVacancies: () => Promise<void>;
}

export const useVacancyStore = create<VacancyStore>((set) => ({
  vacancies: [],
  loading: false,
  error: null,
  fetchVacancies: async () => {
    set({ loading: true, error: null });

    try {
      const response = await API("/vacancies");
      set({ vacancies: response.data, loading: false });
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message, loading: false });
      } else {
        set({ error: "Неизвестная ошибка", loading: false });
      }
    }
  },
}));
