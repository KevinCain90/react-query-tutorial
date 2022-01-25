import SortResult from '.';

import { render, screen } from '@testing-library/react';
// used to be able to select test id in the document
import '@testing-library/jest-dom/extend-expect';
import { SortResultProps } from './types';

const props: SortResultProps = {
  currentSelection: 'price',
  options: [
    {
      name: 'Iberostar Grand Salome',
      icon: 'hotel-image-2.png',
    }
  ],
  sortBy: jest.fn(),
}

const renderComponent = () => render(<SortResult {...props} />);

describe('<SortResult />', () => {
  it('Renders the page without error', () => {
    renderComponent();
    expect(screen.getByTestId('sort-result')).toBeInTheDocument();
  });
});
