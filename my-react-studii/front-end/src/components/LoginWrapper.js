import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './LogIn';

export default function LoginWrapper() {
     const navigate = useNavigate();
     return <Login navigate = {navigate}/>;
}