import { create } from "zustand";
import API from "../../helpers/axios";

interface IVacanPage {
  id: number;
  title: string;
  description: string;
  banner_image_url: string;
}

interface IVacanPageStore {
  vacanPage: IVacanPage[];
  loading: boolean;
  err: string | null;
  fetchVacanPage: () => Promise<void>;
}

export const useVacanPageStore = create<IVacanPageStore>((set) => ({
  vacanPage: [],
  loading: false,
  err: null,
  fetchVacanPage: async () => {
    set({ loading: true, err: null });
    try {
      const res = await API("/vacancies/pages");
      set({ vacanPage: res.data, loading: false });
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ err: err.message, loading: false });
      } else {
        set({ err: "Неизвестная ошибка", loading: false });
      }
    }
  },
}));
