import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/use-auth';

import InputType from '../../components/InputType';
import Button from '../../components/Button';

import './index.css';

const SignIn = () => {
    const { signIn }: any = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = () => {
        if (!email || !password) {
            setError('* Preencha todos os campos');
            return;
        }

        const res = signIn(email, password);

        if (res) {
            setError(res);
            return;
        }

        navigate('/dashboard');
    };

    return (
        <div className='container'>
            <label className='text-system'>SISTEMA DE LOGIN</label>
            <div className='content'>
                <InputType
                    type='email'
                    data-testid='email'
                    className='input-primary'
                    placeholder='Digite seu E-mail'
                    value={email || ''}
                    onChange={(e: any) => [setEmail(e.target.value), setError('')]}
                />

                <InputType
                    type='password'
                    data-testid='password'
                    className='input-primary'
                    placeholder='Digite sua Senha'
                    value={password || ''}
                    onChange={(e: any) => [setPassword(e.target.value), setError('')]}
                />
                <label className='text-error'>{error}</label>
                <Button text='Entrar' className='btn btn--primary btn--full-width' onClick={handleSignIn} />
                <label className='text-sign-in'>
                    Não tem uma conta?
                    <strong className='text-strong-link'>
                        <Link to='/sign-up'>Registre-se</Link>
                    </strong>
                </label>
            </div>
        </div>
    );
};

export default SignIn;