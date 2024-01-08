/* eslint-disable react/prop-types */
export const Screen = ({ displayValue }) => {

    const cleanedValue = displayValue.replace(/^0+(?=\d)/, '');

    return (
        <div className='calculator_screen'>
            {cleanedValue || '0'}
        </div>
    );
};
