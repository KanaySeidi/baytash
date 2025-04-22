import { create } from "zustand";
import API from "../../helpers/axios";

export interface ContactInfo {
  id: number;
  address: string;
  email: string;
  phone_number: string;
}

export interface SocialLink {
  id: number;
  name: string;
  icon_url: string;
  url: string | null;
}

export interface ContactData {
  id: number;
  banner_image_url: string;
  title: string;
  description: string;
  contact_info: ContactInfo[];
  social_links: SocialLink[];
  map: string | null;
}

interface ContactStore {
  data: ContactData | null;
  loading: boolean;
  error: string | null;
  fetchContacts: () => Promise<void>;
}

export const useContactStore = create<ContactStore>((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchContacts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await API<ContactData[]>("/contacts/pages");
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
