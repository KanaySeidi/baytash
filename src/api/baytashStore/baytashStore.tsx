import { create } from "zustand";
import API from "../../helpers/axios";

export interface IGalleryImage {
  id: number;
  image_url: string | null;
  caption: string | null;
}

export interface IAboutBlock {
  id: number;
  block_type: string;
  title: string;
  description: string;
  image1_url: string | null;
  image2_url: string | null;
  gallery_images: IGalleryImage[];
}

export interface IAboutPage {
  id: number;
  title: string;
  description: string;
  main_image_url: string;
  blocks: IAboutBlock[];
}

// Состояние стора
interface BaytashStore {
  data: IAboutPage | null;
  loading: boolean;
  error: string | null;
  fetchBaytash: () => Promise<void>;
}

export const useBaytashStore = create<BaytashStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchBaytash: async () => {
    set({ loading: true, error: null });

    try {
      const res = await API<IAboutPage[]>("/about/pages/");
      set({ data: res.data[0], loading: false });
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message, loading: false });
      } else {
        set({ error: "Неизвестная ошибка", loading: false });
      }
    }
  },
}));
