import React from 'react';

import useAuth from '../../hooks/use-auth';

const PrivateRoutes = ({ Item, SignIn }: any) => {
    return useAuth() > 0 ? <Item /> : <SignIn />;
};

export { PrivateRoutes };