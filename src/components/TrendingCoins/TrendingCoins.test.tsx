import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TrendingCoins from './TrendingCoins';

describe('<TrendingCoins />', () => {
  test('it should mount', () => {
    render(<TrendingCoins />);
    
    const trendingCoins = screen.getByTestId('TrendingCoins');

    expect(trendingCoins).toBeInTheDocument();
  });
});