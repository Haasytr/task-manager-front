"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

interface AuthContextType {
  userToken: string | null;
  setUserToken: Dispatch<SetStateAction<null>>;
}

export const AuthContext = createContext<AuthContextType>({
  userToken: null,
  setUserToken: () => {},
});

export function Auth({ children }: { children: React.ReactNode }) {
  const [userToken, setUserToken] = useState(null);

  return (
    <AuthContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </AuthContext.Provider>
  );
}
