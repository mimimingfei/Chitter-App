import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import AllPeeps from '../components/AllPeeps';
import mockPeepsData from '../../../BackEnd/mockPeepsData.json'
const mockPeeps = mockPeepsData.peep
import axios from 'axios';

jest.mock('axios');

describe.skip('AllPeeps Tests', () => {
  it("renders all peeps correctly", async () => {
    axios.get.mockResolvedValue({ data: mockPeeps });
    const { findAllByTestId } = render(<AllPeeps />);
    const peeps = await findAllByTestId("peep");
    expect(peeps).toHaveLength(mockPeeps.length)
  })

  it('should displays a message when there are no peeps', async () => {
    axios.get.mockResolvedValue({ data: [] });
    render(<AllPeeps />);
    const noPeep = await screen.findByText(/No Peeps/i)
    expect(noPeep).toBeInTheDocument();
  });
});