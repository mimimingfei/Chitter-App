import { render, screen } from '@testing-library/react';
import Peep from '../components/Peep';
import '@testing-library/jest-dom/extend-expect';

describe('Peep Test', () => {
  it('renders the peep details correctly', () => {
    const mockPeep = {
      id: 1,
      firstName: 'Kyle',
      lastName: 'McFadden',
      peepContent: 'peep message',
      peepCreatedTime: 'Fri, 02 Dec 2022 10:53:43 GMT',
    };
    render(<Peep {...mockPeep} />);
    expect(screen.getByText(`${mockPeep.firstName + mockPeep.lastName}`)).toBeInTheDocument();
    expect(screen.getByText(mockPeep.peepContent)).toBeInTheDocument();
    expect(screen.getByText(`${mockPeep.peepCreatedTime}`)).toBeInTheDocument();
  });
});