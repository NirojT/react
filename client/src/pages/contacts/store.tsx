import { create } from "zustand";
import { axios_auth } from "../../global/config";
import { IContactDetails } from "./interface";

export const useContactsStore = create((set, get) => ({
  contacts: [],

  getContacts: async () => {
    try {
      let res = await axios_auth.get("contact/get-all");
      if (res.data.status === 200) {
        set((state: any) => ({
          contacts: res.data.contacts,
        }));
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
      return null;
    }
  },

  deleteContact: async (id: number | string | undefined) => {
    try {
      let res = await axios_auth.delete(`contact/delete/${id}`);
      console.log(res);
      if (res.data.status === 200) return true;
      return false;
    } catch (error) {
      return false;
    }
  },
}));
