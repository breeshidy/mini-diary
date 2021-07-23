import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //this stats to get a text '//' indicates the text is case sensitive
  const linkElement = screen.getByText(/My Mini Diary!/i);
  expect(linkElement).toBeInTheDocument();
});
