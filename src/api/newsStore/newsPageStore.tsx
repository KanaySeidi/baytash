import { create } from "zustand";
import API from "../../helpers/axios";

interface INewsPage {
  id: number;
  title: string;
  description: string;
  banner_image_url: string;
}

interface INewsPageStore {
  newsPage: INewsPage[];
  loading: boolean;
  err: string | null;
  fetchNewsPage: () => Promise<void>;
}

export const useNewsPageStore = create<INewsPageStore>((set) => ({
  newsPage: [],
  loading: false,
  err: null,
  fetchNewsPage: async () => {
    set({ loading: true, err: null });
    try {
      const res = await API("/news/pages");
      set({ newsPage: res.data, loading: false });
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ err: err.message, loading: false });
      } else {
        set({ err: "Неизвестная ошибка", loading: false });
      }
    }
  },
}));
