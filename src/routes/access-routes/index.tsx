import useAuth from '../../hooks/use-auth';

const PrivateRoutes = ({ Item, SignIn }: any) => {
    const { signed }: any = useAuth();

    return signed > 0 ? <Item /> : <SignIn />;
};

export { PrivateRoutes };