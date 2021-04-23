import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  TextareaHTMLAttributes,
} from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  containerStyle?: object;
  iconPassword?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  name,
  containerStyle = {},
  ...rest
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null); // HTMLTextAreaElement - vai dar ao textareaRef as propriedades de um input

  const [isFocused, setIsFocused] = useState(false); // Se esta com foco
  const [isFilled, setIsFilled] = useState(false); // Se esta preenchido

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    // Verifica se o textareaRef tem um valor/value. Se tiver preenchido = true. Se tiver vazio = false. !! Tranforma o value em booleano.
    setIsFilled(!!textareaRef.current?.value); // textareaRef pega o valor direto do Input. document.querySelector('input') e etc.
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container
        style={containerStyle}
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
        onFocus={handleInputFocus} // Receber o foco
        onBlur={handleInputBlur} // Perder o foco
        defaultValue={defaultValue}
        ref={textareaRef}
        {...rest}
      />
    </>
  );
};

export default Textarea;