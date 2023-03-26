import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import AllPeeps from '../components/AllPeeps';
import mockPeeps from './mockPeeps.json';
import axios from 'axios';

jest.mock('axios');

describe('AllPeeps tests', () => {
    // it("renders all peeps correctly", async () => {
    //     axios.get.mockResolvedValue({data: {mockPeeps}});
    //     render(<AllPeeps/>);
    //     await waitFor(() => {
    //       expect(screen.getByText(mockPeeps[0].firstName)).toBeInTheDocument();
    //       expect(screen.getByText(mockPeeps[0].peepContent)).toBeInTheDocument();
    //     });
    //   });

  it('displays a message when there are no peeps', async () => {
    axios.get.mockResolvedValue({ data: [] });
    render(<AllPeeps />);

    await waitFor(() => {
      expect(screen.getByText('No peeps')).toBeInTheDocument();
    });
  });
});