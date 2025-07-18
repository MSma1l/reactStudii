import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';

export default function FormInputWrapper() {
     const navigate = useNavigate();
     return <FormInput navigate = {navigate}/>;
}