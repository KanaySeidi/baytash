import { create } from "zustand";
import API from "../../helpers/axios";

export interface Advantage {
  id: number;
  title: string;
  description: string;
  icon_url: string | null;
}

export interface GalleryItem {
  id: number;
  image_url: string;
  caption: string | null;
}

export interface FloorPlan {
  id: number;
  image_url: string;
  description: string;
}

export interface Video {
  id: number;
  title: string;
  video_url: string;
  video_file: string | null;
}

export interface Complex {
  id: number;
  name: string;
  main_image_url: string;
  apartments_count: number;
  floors_count: number;
  entrances_count: number;
  parking_count: number;
  short_description: string;
  full_description: string | null;
  advantages: Advantage[];
  gallery: GalleryItem[];
  floor_plans: FloorPlan[];
  videos: Video[];
}

interface ComplexeStore {
  data: Complex | null;
  loading: boolean;
  error: string | null;
  fetchComplexes: () => Promise<void>;
}

export const useComplexeStore = create<ComplexeStore>((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchComplexes: async () => {
    set({ loading: true, error: null });
    try {
      const response = await API<Complex[]>("/complexes");
      set({ data: response.data[0], loading: false });
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message, loading: false });
      } else {
        set({ error: "Неизвестная ошибка", loading: false });
      }
    }
  },
}));
