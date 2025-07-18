import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppHome from './AppHome';

export default function AppHomeWrapper() {
     const navigate = useNavigate();
     return <AppHome navigate = {navigate}/>;
}