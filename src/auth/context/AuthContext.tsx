import React from 'react';

type AuthContextValue =
  | {
      loading: boolean;
      authenticated: boolean;
      handleSignIn: (pin: string) => Promise<boolean>;
      updatePin: (pin: string) => Promise<boolean>;
      deletePin: () => Promise<void>;
    }
  | undefined;

export const AuthContext = React.createContext<AuthContextValue>(undefined);
