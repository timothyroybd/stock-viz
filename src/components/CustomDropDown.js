import React, { useState } from 'react';
import '../CustomDropDown.css'; // Create this CSS file to style your dropdown

const CustomDropdown = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Select an option');

    const handleToggle = () => setIsOpen(!isOpen);

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
        onSelect(option); // Notify parent component about the selection
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
