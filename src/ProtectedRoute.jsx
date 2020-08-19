import React from 'react';
import { Redirect } from 'react-router-dom';

export default function ProtectedRoute({ component }) {
    const Component = component;
    const isAuthenticated = localStorage.getItem('jwt');

    return isAuthenticated !== null ? <Component /> : <Redirect to={{ pathname: '/login' }} />
}