import App from './App';

import { render, screen } from '@testing-library/react';
// used to be able to select test id in the document
import '@testing-library/jest-dom/extend-expect';

const renderComponent = () => render(<App />);

describe('<App />', () => {
  it('Renders the main app without error', () => {
    renderComponent();
    expect(screen.getByTestId('main-app')).toBeInTheDocument();
  });
});
