import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/use-auth';

import './styles.css';

import Button from './../../components/Button';

const Header = () => {
    const { signOut }: any = useAuth();
    const navigate = useNavigate();

    return (
        <div className='header'>
            <div className='header-content'>
                <header>
                    <h1 className='header-title '>Controle Financeiro</h1>
                </header>
                <div className='header-sign-out'>
                    <Button text='Sair' className='btn btn--primary btn--full-width' onClick={() => [signOut(), navigate('/app-finance')]} />
                </div>
            </div>
        </div>
    );
};

export default Header;