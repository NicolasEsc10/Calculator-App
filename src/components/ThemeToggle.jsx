import { useState } from 'react';
import PropTypes from 'prop-types';


export const ThemeToggle = ({ onThemeChange }) => {
    const [themeMode, setThemeMode] = useState('standard');


    const handleModeChange = (mode) => {
        setThemeMode(mode);
        onThemeChange(mode);
    };

    return (
        <div className={`theme-toggle ${themeMode}`}>
            <label className="custom-radio-btn">
                <input
                    id="first"
                    name="toggle-state"
                    type="radio"
                    checked={themeMode === 'standard'}
                    onChange={() => handleModeChange('standard')} />
                <span className="checkmark"></span>
            </label>
            <label className="custom-radio-btn">
                <input
                    id="second"
                    name="toggle-state"
                    type="radio"
                    checked={themeMode === 'light'}
                    onChange={() => handleModeChange('light')} />
                <span className="checkmark"></span>
            </label>
            <label className="custom-radio-btn">
                <input
                    id="third"
                    name="toggle-state"
                    type="radio"
                    checked={themeMode === 'alternative'}
                    onChange={() => handleModeChange('alternative')} />
                <span className="checkmark"></span>
            </label>
        </div>
    )
};

ThemeToggle.propTypes = {
    onThemeChange: PropTypes.func.isRequired,
};


export default ThemeToggle;