import { render, screen } from '@testing-library/react';

import { Header } from './header';

test('header renders correctly', () => {
    render(<Header />);

    const header = screen.getByText('Header');

    expect(header).toBeDefined();
    expect(header).toBeInTheDocument();
});

test('header has correct content', () => {
    render(<Header />);

    expect(screen.getByText('Header')).toBeInTheDocument();
});
