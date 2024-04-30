import { beforeEach, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

let dom;
let document;
beforeEach(() => {
  dom = render(<App />);
  document = dom.container;
});

test('Gönderiler componenti render oluyor', () => {
  expect(screen.queryAllByText(/philzcoffee/i)).not.toHaveLength(0);
  expect(screen.queryAllByText(/twitch/i)).not.toHaveLength(0);
});

test('Arama Çubuğuna doğru proplar gönderiliyor ve search yapabiliyor.', async () => {
  const arama = screen.queryByPlaceholderText(/Arama/i);
  fireEvent.input(arama, { target: { value: 'phil' } });
  expect(screen.queryAllByText(/philzcoffee/i)).not.toHaveLength(0);
  expect(screen.queryByText(/Twitch/i)).toBe(null);
});

test('Gönderiler componentine doğru proplar gönderiliyor ve like yapabiliyor.', async () => {
  expect(screen.queryAllByText(/philzcoffee/i)).not.toBe(null);
  expect(screen.queryAllByText(/twitch/i)).not.toBe(null);
  const likes = screen.queryAllByTestId('like-button');
  fireEvent.click(likes[0]);
  expect(screen.queryByText(/401 likes/i)).not.toBe(null);
});
