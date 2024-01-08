import { useState } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { Screen } from './components/Screen';
import { Button } from './components/Button';


function App() {
   const [displayValue, setDisplayValue] = useState('');
   const [appTheme, setAppTheme] = useState('standard');

   const handleThemeChange = (theme) => {
      setAppTheme(theme);
   };

   const handleButtonClick = (value) => {
      if (/[-+*/]$/g.test(displayValue) && value === '0') {
         return;
      }
      if (displayValue === 'Error' || displayValue === 'Infinity') {
         setDisplayValue('');
      }
      setDisplayValue((prevValue) => prevValue + value);
   };

   const handleOperatorClick = (operator) => {
      // Verifica si ya hay un operador y lo reemplaza con el nuevo operador
      const lastChar = displayValue.slice(-1);
      if (['+', '-', '*', '/'].includes(lastChar)) {
         // Si el último carácter es un operador, es reemplazado
         setDisplayValue((prevValue) => prevValue.slice(0, -1) + operator);
      } else {
         // Si no hay operador, agrega el nuevo operador
         setDisplayValue((prevValue) => prevValue + operator);
      }
   };

   const handleResetClick = () => {
      setDisplayValue('');
   };

   const handleDeleteClick = () => {
      if (displayValue === 'Error') {
         handleResetClick()
      } else {
         setDisplayValue(prevContent => prevContent.slice(0, -1));
      }
   };

   const handleResultClick = () => {
      try {
         const result = eval(displayValue);
         if (result === 0) {
            setDisplayValue('');
         } else {
            setDisplayValue(result.toString());
         }
      } catch (error) {
         setDisplayValue('Error');
      }
   };


   return (
      <>
         <div className={`App ${appTheme}`}>
            <div className='calculator_container'>
               <div className='header_calculator'>
                  <div className='text_calc'>
                     Calc
                  </div>
                  <div className='toggle_container'>
                     <p>THEME</p>
                     <div className='toggle_button'>
                        <div className='toggle_button_numbers'>
                           <p>1</p>
                           <p>2</p>
                           <p>3</p>
                        </div>
                        <ThemeToggle onThemeChange={handleThemeChange} />
                     </div>
                  </div>
               </div>
               <Screen displayValue={displayValue} />
               <div className='button_container'>
                  <div className='calculator_row'>
                     <Button onClick={handleButtonClick}>7</Button>
                     <Button onClick={handleButtonClick}>8</Button>
                     <Button onClick={handleButtonClick}>9</Button>
                     <Button onClick={handleDeleteClick} isDelete={true}>DEL</Button>
                  </div>
                  <div className='calculator_row'>
                     <Button onClick={handleButtonClick}>4</Button>
                     <Button onClick={handleButtonClick}>5</Button>
                     <Button onClick={handleButtonClick}>6</Button>
                     <Button onClick={handleOperatorClick}>+</Button>
                  </div>
                  <div className='calculator_row'>
                     <Button onClick={handleButtonClick}>1</Button>
                     <Button onClick={handleButtonClick}>2</Button>
                     <Button onClick={handleButtonClick}>3</Button>
                     <Button onClick={handleOperatorClick}>-</Button>
                  </div>
                  <div className='calculator_row'>
                     <Button onClick={handleButtonClick}>.</Button>
                     <Button onClick={handleButtonClick}>0</Button>
                     <Button onClick={handleOperatorClick}>/</Button>
                     <Button onClick={handleOperatorClick} className="mult">*</Button>
                  </div>
                  <div className='calculator_row'>
                     <Button onClick={handleResetClick} isReset={true}>RESET</Button>
                     <Button onClick={handleResultClick} isResult={true}>=</Button>
                  </div>
               </div>
            </div>
         </div>
         {/* <footer>
            Coded by <a href="www.linkedin.com/in/nicolas-esc10">Nicolas escobar</a>.
         </footer> */}
      </>
   )
}

export default App
