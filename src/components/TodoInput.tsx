import React, { FC, useEffect, useRef, useState } from 'react';

interface ITodoInputProps {
  placeholder?: string;
  onchange: (value: string) => void;
}

const TodoInput: FC<ITodoInputProps> = (props) => {
  const { placeholder, onchange } = props;
  const ref = useRef<HTMLInputElement>(null);
  const [fieldValue, setFieldValue] = useState<string>('');

  const onChangeFieldValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFieldValue(e.target.value);
  };

  const handleChange = () => {
    onchange(fieldValue);
    setFieldValue('');
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      handleChange();
    }
  };

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  return (
    <div className="wrapInput">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChangeFieldValue}
        onKeyDown={handleKeyDown}
        value={fieldValue}
        ref={ref}
      />
      <button onClick={handleChange} className="buttonAdd">
        add
      </button>
    </div>
  );
};

export { TodoInput };
