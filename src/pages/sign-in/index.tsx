import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/use-auth';

import InputType from '../../components/InputType';
import Button from '../../components/Button';

import './styles.css';

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

        navigate('/app-finance/dashboard');
    };

    return (
        <div className='sign-in'>
            <label className='label-system'>SISTEMA DE LOGIN</label>
            <div className='sign-in-content'>
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
                <label className='label-error'>{error}</label>
                <Button text='Entrar' className='btn btn--primary btn--full-width' onClick={handleSignIn} />
                <label className='label-sign'>
                    Não tem uma conta?
                    <strong className='text-strong-link'>
                        <Link to='/app-finance/sign-up'>Registre-se</Link>
                    </strong>
                </label>
            </div>
        </div>
    );
};

export default SignIn;