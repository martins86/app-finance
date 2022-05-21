import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/use-auth';

import InputType from '../../components/InputType';
import Button from '../../components/Button';

import './styles.css';

const SignUp = () => {
  const { signUp }: any = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailConf, setEmailConf] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSingUp = () => {
    if (!email || !emailConf || !password) {
      setError('* Preencha todos os campos');
      return;
    } else if (email !== emailConf) {
      setError('* Os e-mails não são iguais');
      return;
    }

    const res = signUp(email, password);

    if (res) {
      setError(res);
      return;
    }

    alert('Usuário cadastrado com sucesso!');
    navigate('/');
  };

  return (
    <div className="sign-up">
      <label className="label-system">SISTEMA DE REGISTRO</label>
      <div className="sign-up-content">
        <InputType
          type="email"
          data-testid="email"
          className="input-primary"
          placeholder="Digite seu E-mail"
          value={email || ''}
          onChange={(e: any) => [setEmail(e.target.value), setError('')]}
        />

        <InputType
          type="email"
          data-testid="email"
          className="input-primary"
          placeholder="Confirme seu E-mail"
          value={emailConf || ''}
          onChange={(e: any) => [setEmailConf(e.target.value), setError('')]}
        />

        <InputType
          type="password"
          data-testid="password"
          className="input-primary"
          placeholder="Digite sua Senha"
          value={password || ''}
          onChange={(e: any) => [setPassword(e.target.value), setError('')]}
        />
        <label className="label-error">{error}</label>
        <Button
          text="Inscrever-se"
          className="btn btn--primary btn--full-width"
          onClick={handleSingUp}
        />
        <label className="label-sign">
          Já tem uma conta?
          <strong className="text-strong-link">
            <Link to="/app-finance">Entrar</Link>
          </strong>
        </label>
      </div>
    </div>
  );
};

export default SignUp;
