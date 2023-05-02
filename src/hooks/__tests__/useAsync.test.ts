import { renderHook, act } from '@testing-library/react-hooks';
import { useAsync } from '../useAsync';

describe('useAsync hook', () => {
  it('should execute async function and set status to success', async () => {
    const asyncFunction = jest.fn(() => Promise.resolve('success'));
    const { result, waitForNextUpdate } = renderHook(() =>
      useAsync(asyncFunction),
    );

    expect(result.current.status).toBe('pending');

    await waitForNextUpdate();

    expect(result.current.status).toBe('success');
    expect(result.current.response).toBe('success');
    expect(result.current.error).toBeNull();
  });

  it('should set status to error when async function throws error', async () => {
    const asyncFunction = jest.fn(() => Promise.reject(new Error('Error!')));
    const { result, waitForNextUpdate } = renderHook(() =>
      useAsync(asyncFunction),
    );
    expect(result.current.status).toBe('pending');

    await waitForNextUpdate();

    expect(result.current.status).toBe('error');
    expect(result.current.response).toBeNull();
    expect(result.current.error).not.toBeNull();
  });

  it('should not execute async function immediately if immediate is set to false', async () => {
    const asyncFunction = jest.fn(() => Promise.resolve('success'));
    const { result } = renderHook(() => useAsync(asyncFunction, false));

    expect(result.current.status).toBe('idle');
  });

  it('should update response state when async function is called again', async () => {
    const asyncFunction = jest
      .fn()
      .mockResolvedValueOnce('first response')
      .mockResolvedValueOnce('second response');
    const { result, waitForNextUpdate } = renderHook(() =>
      useAsync(asyncFunction, false),
    );

    expect(result.current.status).toBe('idle');

    act(() => {
      result.current.execute();
    });

    expect(result.current.status).toBe('pending');

    await waitForNextUpdate();

    expect(result.current.status).toBe('success');
    expect(result.current.response).toBe('first response');

    act(() => {
      result.current.execute();
    });

    expect(result.current.status).toBe('pending');

    await waitForNextUpdate();

    expect(result.current.status).toBe('success');
    expect(result.current.response).toBe('second response');
  });
});
