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
  complex: Complex | null;
  loading: boolean;
  error: string | null;
  fetchComplexesById: (id: number) => Promise<void>;
}

export const useComplexeStore = create<ComplexeStore>((set) => ({
  complex: null,
  loading: false,
  error: null,
  fetchComplexesById: async (id: number) => {
    set({ loading: true, error: null });
    try {
      const response = await API<Complex>(`/complexes/${id}`);
      set({ complex: response.data, loading: false });
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message, loading: false });
      } else {
        set({ error: "Неизвестная ошибка", loading: false });
      }
    }
  },
}));
