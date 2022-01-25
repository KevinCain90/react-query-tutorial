import SortResult from '.';

import { render, screen } from '@testing-library/react';
// used to be able to select test id in the document
import '@testing-library/jest-dom/extend-expect';

const renderComponent = () => render(<SortResult />);

describe('<SortResult />', () => {
  it('Renders the page without error', () => {
    renderComponent();
    expect(screen.getByTestId('sort-result')).toBeInTheDocument();
  });
});
