import { render, screen } from '@testing-library/react';
import Peep from '../components/Peep';
import '@testing-library/jest-dom/extend-expect';

describe('Peep tests', () => {
  it('renders the peep details correctly', () => {
    const mockPeep = {
      firstName: 'Kyle',
      lastName: 'McFadden',
      peepContent: 'peep message',
      peepCreatedTime: 'Fri, 02 Dec 2022 10:53:43 GMT',
    };
    render(<Peep {...mockPeep} />);
    expect(screen.getByText(`Posted by: ${mockPeep.firstName + mockPeep.lastName}`)).toBeInTheDocument();
    expect(screen.getByText(mockPeep.peepContent)).toBeInTheDocument();
    expect(screen.getByText(`Posted on: ${mockPeep.peepCreatedTime}`)).toBeInTheDocument();
  });
});