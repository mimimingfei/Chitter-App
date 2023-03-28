import '@testing-library/jest-dom/extend-expect';
import AddPeep from '../components/AddPeep';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from "@testing-library/react";

describe('AddPeep Test', () => {
  test('should render form', () => {
    render(<BrowserRouter><AddPeep /></BrowserRouter>)
    const placeholder = screen.getByPlaceholderText('Enter peep content'); 
    expect(placeholder).toBeInTheDocument();
    });
});

