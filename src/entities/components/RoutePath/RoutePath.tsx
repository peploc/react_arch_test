import React from 'react';
import { Route } from 'react-router-dom';

export const RoutePath = (route: any) => {
    return (
        <Route 
            path={route.path}
            render={(props: any) => 
                <route.component {...props} />}
        />
    );
}
