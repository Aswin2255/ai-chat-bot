import { create } from 'zustand';
interface User {
  name: string;
}
interface Model {
  modelname: string;
  url: string;
  apikey: string;
}

interface Authstore {
  authUser: User;
  setauthUser: (user: User) => void;
}

interface Modelstore {
  modelDetails: Model[];
  setModel: (model: Model) => void;
  clearModel: () => void;
}

export const useAuthUser = create<Authstore>((set) => ({
  authUser: {
    name: '',
  },
  setauthUser(user) {
    set({ authUser: user });
  },
}));

export const useModel = create<Modelstore>((set) => ({
  modelDetails: [],
  setModel(model) {
    set((state) => ({ modelDetails: [...state.modelDetails, model] }));
  },
  clearModel() {
    set({ modelDetails: [] });
  },
}));
