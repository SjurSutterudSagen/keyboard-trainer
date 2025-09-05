import { render, screen } from '@testing-library/react';

import { Footer } from './footer';

test('footer renders correctly', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');

    expect(footer).toBeDefined();
    expect(footer).toHaveTextContent('Footer');
});
