import toast from "react-hot-toast";
import { create } from "zustand";
import { api } from "../config/config";

type Contact = {
  name: string;
  email: string;
  message: string;
};

type ContactState = {
  contacts: Contact[];
  postContact: (contact: Contact) => Promise<void>;
};

export const useContactStore = create<ContactState>((set) => ({
  contacts: [],

  postContact: async (contact) => {
    try {
      const { data } = await api.post("/f/mkoavwqk", contact);

      set((state) => ({
        contacts: [...state.contacts, data],
      }));

      toast.success("Message sent successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message. Please try again.");
    }
  },
}));
