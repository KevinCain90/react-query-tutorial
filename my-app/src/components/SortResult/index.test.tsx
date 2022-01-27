import SortResult from '.';

import { fireEvent, render, screen } from '@testing-library/react';
// used to be able to select test id in the document
import '@testing-library/jest-dom/extend-expect';
import { SortResultProps } from './types';

import { getByTextWithMarkup } from '../utils';

const props1: SortResultProps = {
  currentSelection: 'price',
  options: [
    {
      name: 'Iberostar Grand Salome',
      icon: 'alpha',
    }
  ],
  sortBy: jest.fn(),
};

const props2: SortResultProps = {
  currentSelection: 'price',
  options: [
    {
      name: 'Iberostar Grand Salome',
      icon: 'star',
    }
  ],
  sortBy: jest.fn(),
}

const props3: SortResultProps = {
  currentSelection: 'price',
  options: [
    {
      name: 'Iberostar Grand Salome',
      icon: 'pound',
    }
  ],
  sortBy: jest.fn(),
}

describe('<SortResult />', () => {
  it('Renders the page without error', () => {
    render(<SortResult {...props1} />)
    expect(screen.getByTestId('sort-result')).toBeInTheDocument();
  });
  it('runs the sort by function without error', () => {
    render(<SortResult {...props1} />)
    const sortByClick = screen.getByTestId('sort-by');
    fireEvent.click(sortByClick);
    expect(props1.sortBy).toHaveBeenCalled();
  });
  it('displays alpha icon correctly without error', () => {
    render(<SortResult {...props1} />)
    const buttonIcon = screen.getByTestId('button-icon');
    expect(buttonIcon).toBeInTheDocument();
  });
  it('displays alpha button text', async () => {
    render(<SortResult {...props1} />)
    getByTextWithMarkup('sort by price', screen.queryByText);
  });
  it('displays star icon correctly without error', () => {
    render(<SortResult {...props2} />)
    const buttonIcon = screen.getByTestId('button-icon');
    expect(buttonIcon).toBeInTheDocument();
  });
  it('displays star button text', async () => {
    render(<SortResult {...props2} />)
    getByTextWithMarkup('sort by star rating', screen.queryByText);
  });
  it('displays pound icon correctly without error', () => {
    render(<SortResult {...props3} />)
    const buttonIcon = screen.getByTestId('button-icon');
    expect(buttonIcon).toBeInTheDocument();
  });
  it('displays pound button text', async () => {
    render(<SortResult {...props2} />)
    getByTextWithMarkup('sort by price', screen.queryByText);
  });
});
