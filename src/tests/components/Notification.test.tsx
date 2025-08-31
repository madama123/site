import { render, screen, act } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import { Notification } from '../../components/Notification';

describe('Notification', () => {
  it('renders notification with correct message and type', () => {
    const message = 'Test notification';
    const type = 'success';
    const onClose = vi.fn();

    render(
      <Notification
        message={message}
        type={type}
        onClose={onClose}
        duration={1000}
      />
    );

    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onClose after duration', () => {
    vi.useFakeTimers();
    const onClose = vi.fn();

    render(
      <Notification
        message="Test"
        type="success"
        onClose={onClose}
        duration={1000}
      />
    );

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(onClose).toHaveBeenCalled();
    vi.useRealTimers();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();

    render(
      <Notification
        message="Test"
        type="success"
        onClose={onClose}
        duration={1000}
      />
    );

    screen.getByRole('button').click();
    expect(onClose).toHaveBeenCalled();
  });
}); 