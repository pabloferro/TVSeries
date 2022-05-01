import React, {useEffect, useRef, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthContext} from './AuthContext';

const PIN_KEY = '@pin';

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storedPin = useRef<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(PIN_KEY).then(pin => {
      storedPin.current = pin;
      if (!storedPin.current) {
        setAuthenticated(true);
      }
      setLoading(false);
    });
  }, []);

  const updatePin = async (pin: string) => {
    try {
      AsyncStorage.setItem(PIN_KEY, pin);
    } catch (error) {
      console.warn('AsyncStorage error');
    }
    return true;
  };

  const deletePin = async () => {
    try {
      AsyncStorage.removeItem(PIN_KEY);
    } catch (error) {
      console.warn('AsyncStorage error');
    }
  };

  const handleSignIn = async (pin: string) => {
    try {
      setAuthenticated(storedPin.current === pin);
      return storedPin.current === pin;
    } catch (error) {
      console.warn('AsyncStorage error');
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        authenticated,
        handleSignIn,
        updatePin,
        deletePin,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
