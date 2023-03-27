import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Signup from '../components/Signup';
import { render, screen } from "@testing-library/react";

describe('Sign up Test', () => {
    test('should render form', () => {
        render(<BrowserRouter><Signup /></BrowserRouter>);
        const firstName = screen.getByLabelText('First Name');
        const lastName = screen.getByLabelText('Last Name');
        const email = screen.getByLabelText('Email Address');
        const password = screen.getByLabelText('Password');

        expect(firstName).toBeInTheDocument();
        expect(lastName).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();

    });

});