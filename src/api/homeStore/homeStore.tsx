import { create } from "zustand";
import API from "../../helpers/axios";

export interface ISliderImage {
  id: number;
  image_url: string;
  is_clickable: boolean;
  link: string | null;
  order: number;
  title: string;
  description: string;
}

export interface IPerfectionBlock {
  id: number;
  title: string;
  description: string;
  image_url: string;
  icon_url: string;
}

export interface IVideo {
  id: number;
  title: string;
  description: string;
  video_url: string;
  video_file: string;
}

export interface IKeyFigure {
  id: number;
  title: string;
  subtitle: string;
  icon_url: string | null;
  order: number;
}

export interface IAdvantage {
  id: number;
  title: string;
  description: string;
  icon_url: string;
}

export interface IHomeData {
  id: number;
  title: string;
  description: string;
  auto_slide: boolean;
  slide_interval: number;
  slider_images: ISliderImage[];
  perfection_blocks: IPerfectionBlock[];
  key_figures: IKeyFigure[];
  advantages: IAdvantage[];
  videos: IVideo[];
  sitemap_blocks: unknown[];
}

interface IHomeStore {
  data: IHomeData | null;
  loading: boolean;
  error: string | null;
  fetchHomeData: () => Promise<void>;
}

export const useHomeStore = create<IHomeStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchHomeData: async () => {
    set({ loading: true, error: null });
    try {
      const res = await API<IHomeData[]>("/home/pages");
      set({ data: res.data[0], loading: false });
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message, loading: false });
      } else {
        set({ error: "Неизвестная ошибка", loading: false });
      }
    }
  },
}));
