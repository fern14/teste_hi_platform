import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AccordionItemComponent from '../components/AccordionItemComponent';
import { Child, ChildState } from '../@types/types';

const mockChild: Child = {
  id: '1',
  name: 'Root',
  level: 0,
  children: {
    '2': { id: '2', name: 'Child 1', level: 1, children: {} },
    '3': { id: '3', name: 'Child 2', level: 1, children: {} },
  },
};

const mockChildStates: Record<string, ChildState> = {
  '1': { checked: false, indeterminate: false, expanded: false },
  '2': { checked: false, indeterminate: false, expanded: false },
  '3': { checked: false, indeterminate: false, expanded: false },
};

describe('AccordionItemComponent', () => {
  it('deve alternar o estado de expansão ao clicar no botão', () => {
    const setChildStates = jest.fn();
    render(
      <AccordionItemComponent
        child={mockChild}
        childStates={mockChildStates}
        setChildStates={setChildStates}
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(setChildStates).toHaveBeenCalledWith({
      ...mockChildStates,
      '1': { ...mockChildStates['1'], expanded: true },
    });
  });

  it('deve marcar o checkbox e atualizar os estados filhos', () => {
    const setChildStates = jest.fn();
    render(
      <AccordionItemComponent
        child={mockChild}
        childStates={mockChildStates}
        setChildStates={setChildStates}
      />
    );

    const checkbox = screen.getByRole('checkbox', { name: 'checkbox-1' });
    fireEvent.click(checkbox);

    expect(setChildStates).toHaveBeenCalledWith({
      ...mockChildStates,
      '1': { ...mockChildStates['1'], checked: true, indeterminate: false },
      '2': { ...mockChildStates['2'], checked: true, indeterminate: false },
      '3': { ...mockChildStates['3'], checked: true, indeterminate: false },
    });
  });
});
