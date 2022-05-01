import {useContext} from 'react';
import {AuthContext} from './AuthContext';

export default function useAuth() {
  const authContext = useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error('useAuth must be used within a AuthContextProvider');
  }

  return authContext;
}
