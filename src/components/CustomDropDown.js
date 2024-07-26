import React, { useState } from 'react';
import '../CustomDropDown.css'; 

const CustomDropdown = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Select a stock');

    const handleToggle = () => setIsOpen(!isOpen);

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
        onSelect(option); 
    };

    return (
        <div className="custom-dropdown">
            <div className="dropdown-selected" onClick={handleToggle}>
                {selected}
            </div>
            {isOpen && (
                <div className="dropdown-menu">
                    {options.map(option => (
                        <div 
                            key={option} 
                            className="dropdown-item" 
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
