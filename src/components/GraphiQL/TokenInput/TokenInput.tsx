import React, { useState } from 'react';
import styles from './TokenInput.module.css';

type PropsType = {
  savedTokenValue: string;
  setTokenValue: (newValue: string) => void;
};

const TokenInput = ({ savedTokenValue, setTokenValue }: PropsType) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleButtonClick = () => {
    setTokenValue(inputValue);
  };

  return (
    <div className={styles.main}>
      <label className={styles.label}>
        <span className={styles.labelText}>GraphQL API Key:</span>
        <input
          className={styles.input}
          type="text"
          onChange={handleInputChange}
          value={inputValue}
        />
      </label>
      <button
        className={styles.button}
        onClick={handleButtonClick}
        disabled={inputValue === '' || inputValue === savedTokenValue}
      >
        {Boolean(savedTokenValue) ? 'Update Token' : 'Set Token'}
      </button>
    </div>
  );
};

export default TokenInput;
