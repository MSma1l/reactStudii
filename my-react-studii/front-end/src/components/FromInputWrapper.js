import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';

export default function FromInputWrapper() {
     const navigate = useNavigate();
     return <FormInput navigate = {navigate}/>;
}