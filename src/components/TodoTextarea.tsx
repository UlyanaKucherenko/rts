import React, { FC, useEffect, useRef, useState } from 'react';

interface ITodoTextareaProps {
  placeholder?: string;
  onchange: (value: string, typeTask: string) => void;
}

const TodoTextarea: FC<ITodoTextareaProps> = (props) => {
  const { placeholder, onchange } = props;
  const ref = useRef<HTMLTextAreaElement>(null);
  const [fieldValue, setFieldValue] = useState<string>('');
  const [typeTask, setTypeTask] = useState<string>('green');

  const onChangeFieldValue: React.FormEventHandler<HTMLTextAreaElement> = (e) => {
    setFieldValue(e.currentTarget.value);
  };
  const onChangeRadioBtn: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTypeTask(e.target.value);
  };

  const handleChange = () => {
    onchange(fieldValue, typeTask);
    setFieldValue('');
  };

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  return (
    <div className="wrapTextarea">
      <textarea
        placeholder={placeholder}
        ref={ref}
        onChange={onChangeFieldValue}
        value={fieldValue}
        rows={6}
        cols={80}
        style={{ borderLeftColor: `${typeTask}` }}
      >
        {fieldValue}
      </textarea>
      <div className="textareaFooter">
        <div className="textareaFooterRadioBtns">
          <div className="radio-item">
            <input
              type="radio"
              value="green"
              name="typeTask"
              checked={typeTask === 'green'}
              onChange={onChangeRadioBtn}
            />
            <span>green</span>
          </div>
          <div className="radio-item">
            <input
              type="radio"
              value="yellow"
              name="typeTask"
              checked={typeTask === 'yellow'}
              onChange={onChangeRadioBtn}
            />
            <span>yellow</span>
          </div>
          <div className="radio-item">
            <input
              type="radio"
              value="red"
              name="typeTask"
              checked={typeTask === 'red'}
              onChange={onChangeRadioBtn}
            />
            <span>red</span>
          </div>
        </div>
        <button onClick={handleChange} className="buttonAdd textareaFooterBtn">
          add
        </button>
      </div>
    </div>
  );
};

export { TodoTextarea };
