import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Login from '../components/Login.jsx';
import { render, screen } from "@testing-library/react"

describe('Login Test', () => {

    test('should render form', () => {

        render(<BrowserRouter><Login /></BrowserRouter>);
        const email = screen.getByLabelText('Email Address');
        const password = screen.getByLabelText('Password');

        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
    });

});