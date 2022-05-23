import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

interface User {
  email?: string;
  password?: string;
}

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const userToken = localStorage.getItem('user-token');
    const usersStorage = localStorage.getItem('users-db');

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage).filter(
        (beUser: any) => beUser.email === JSON.parse(userToken).email
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  /**
   * Valida o e-mail e password se é válido e registrado.
   */
  const signIn = (email: string, password: string) => {
    const usersStorage = JSON.parse(localStorage.getItem('users-db') as string);

    const hasUser = usersStorage?.filter(
      (beUser: any) => beUser.email === email
    );

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const enCrypt = require('crypto');
        const token = enCrypt.randomBytes(18).toString('hex');
        localStorage.setItem('user-token', JSON.stringify({ email, token }));
        setUser({ email, password });
        return;
      } else {
        return 'E-mail ou senha incorretos';
      }
    } else {
      return 'Usuário não cadastrado';
    }
  };

  /**
   * Registra um novo usuário, com um e-mail e password válido e não registrado.
   */
  const signUp = (email: string, password: string) => {
    const usersStorage = JSON.parse(localStorage.getItem('users-db') as string);

    const hasUser = usersStorage?.filter(
      (beUser: any) => beUser.email === email
    );

    if (hasUser?.length) {
      return '* Já tem uma conta com esse E-mail';
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { email, password }];
    } else {
      newUser = [{ email, password }];
    }

    localStorage.setItem('users-db', JSON.stringify(newUser));
  };

  /**
   * Remove a sessão do usuário
   */
  const signOut = () => {
    setUser(undefined);
    localStorage.removeItem('user-token');
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
