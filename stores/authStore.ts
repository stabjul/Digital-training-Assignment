import create from "zustand";

export interface AuthDetails {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  id_token: string;
  "not-before-policy": number;
  session_state: string;
  scope: string;
}
interface AuthStore {
  authDetails: AuthDetails | null;
  setAuthDetails: (details: AuthDetails) => void;
  clearAuthDetails: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  authDetails: null,
  setAuthDetails: (details) => set({ authDetails: details }),
  clearAuthDetails: () => set({ authDetails: null }),
}));

export default useAuthStore;
