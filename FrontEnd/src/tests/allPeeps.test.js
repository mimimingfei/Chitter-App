import '@testing-library/jest-dom/extend-expect';
import { render, screen} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import AllPeeps from '../components/AllPeeps';
import mockPeepsData from '../../../BackEnd/mockPeepsData.json'
const mockPeeps = mockPeepsData.peep
import axios from 'axios';

jest.mock('axios');

describe('AllPeeps Tests', () => {
  it("renders all peeps correctly", async () => {
    axios.get.mockResolvedValue({ data: mockPeeps });
    await act(async () => {
      render(<AllPeeps />);
    });
    const peeps = await screen.findAllByText('peep');
    expect(peeps).toHaveLength(4);
  })

  it('should displays a message when there are no peeps', async () => {
    axios.get.mockResolvedValue({ data: [] });
    await act(async () => {
      render(<AllPeeps />);
    });
    const noPeep = await screen.findByText(/No Peeps/i)
    expect(noPeep).toBeInTheDocument();
  });
});