import '@testing-library/jest-dom';
const { renderHook, act } = require("@testing-library/react-hooks");
const { useCounter } = require("../../hooks/useCounter");


describe('<useCounter /> testing', () => {
  
  test('should return default values', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  })
  
  test('should have the counter with 100', () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);
  })

  test('should increment the counter by 1', () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    act(() => increment())
    const { counter } = result.current;
    expect(counter).toBe(11);
  })
  
  test('should decrement the counter by 1', () => {
    const { result } = renderHook(() => useCounter())
    const { decrement } = result.current
    
    act(() => decrement())

    const { counter } = result.current
    expect(counter).toBe(9);
  })

  test('should return to default', () => {
    const { result } = renderHook(() => useCounter())
    const { increment, reset } = result.current

    act(() => {
      increment();
      reset();
    })

    const { counter } = result.current
    expect(counter).toBe(10)
  })
  
  
})
