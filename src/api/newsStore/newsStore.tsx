import { create } from "zustand";
import API from "../../helpers/axios";

interface INews {
  id: number;
  title: string;
  short_description: string;
  full_text: string;
  created_date: string;
  views_count: number;
  preview_image_url: string;
}

interface INewsStore {
  news: INews[];
  loading: boolean;
  err: string | null;
  fetchNews: () => Promise<void>;
}

export const useNewsStore = create<INewsStore>((set) => ({
  news: [],
  loading: false,
  err: null,
  fetchNews: async () => {
    set({ loading: true, err: null });
    try {
      const res = await API("/news");
      set({ news: res.data, loading: false });
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ err: err.message, loading: false });
      } else {
        set({ err: "Неизвестная ошибка", loading: false });
      }
    }
  },
}));
