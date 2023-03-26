import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import AddPeep from '../components/AddPeep';

describe('AddPeep tests', () => {
  it('should render the form', () => {
    render(<AddPeep />);
    expect(screen.getByText('Add a new peep:')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter peep content')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Post' })).toBeInTheDocument();
  });

  it('should call onAddPeep and reset form on submit', async () => {
    
  });
});
