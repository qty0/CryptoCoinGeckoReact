import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GenericCard from './GenericCard';

describe('<GenericCard />', () => {
  test('it should mount', () => {
    render(<GenericCard />);
    
    const genericCard = screen.getByTestId('GenericCard');

    expect(genericCard).toBeInTheDocument();
  });
});