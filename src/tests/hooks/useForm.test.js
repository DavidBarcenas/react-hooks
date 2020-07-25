import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('<useForm /> testing', () => {
  
  const initialData = {
    name: 'Davee',
    email: 'daveepro@outlook.com'
  }

  test('should return a form', () => {
    const { result } = renderHook(() => useForm(initialData));
    const [ values, handleInputChange, reset ] = result.current;

    expect(values).toEqual(initialData);
    expect(typeof handleInputChange).toBe('function')
    expect(typeof reset).toBe('function')
  })
  
  test('should change form value', () => {
    const { result } = renderHook(() => useForm(initialData));
    const [ , handleInputChange ] = result.current;


    act(() => {
      handleInputChange({target:{
        name: 'name',
        value: 'Daveepro'
      }})
    })

    const [ values ] = result.current;
    expect(values).toEqual({ ...initialData, name: 'Daveepro' })
  })
  
  test('should reset values form', () => {
    const { result } = renderHook(() => useForm(initialData));
    const [ v, handleInputChange, reset ] = result.current;


    act(() => {
      handleInputChange({target:{
        name: 'name',
        value: 'Daveepro'
      }})

      reset();
    })


    const [ values, h, rst ] = result.current;
    expect(values).toEqual(initialData);
  })
  
})
