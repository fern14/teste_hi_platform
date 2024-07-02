import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import App from '../App';
import { api } from '../lib/axios';
import { Child } from '../@types/types';

jest.mock('../lib/axios');
const mockedApi = api as jest.Mocked<typeof api>;

const mockChild: Child = {
  id: '1',
  name: 'Root',
  level: 0,
  children: {
    '2': { id: '2', name: 'Child 1', level: 1, children: {} },
    '3': { id: '3', name: 'Child 2', level: 1, children: {} },
  },
};

describe('App Component', () => {
  beforeEach(() => {
    mockedApi.get.mockResolvedValue({ data: mockChild });
  });

  it('deve renderizar os botões corretamente', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(27);
  });

  it('deve chamar fetchData quando um botão é clicado', async () => {
    render(<App />);
    const button = screen.getByText('0');
    await act(async () => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(mockedApi.get).toHaveBeenCalledWith('0');
    });
  });
});
