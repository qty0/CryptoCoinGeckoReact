import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation/NavigationItem from './Navigation/NavigationItem';

describe('<Navigation/NavigationItem />', () => {
  test('it should mount', () => {
    render(<Navigation/NavigationItem />);
    
    const navigationNavigationItem = screen.getByTestId('Navigation/NavigationItem');

    expect(navigationNavigationItem).toBeInTheDocument();
  });
});