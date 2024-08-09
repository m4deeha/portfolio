import React from 'react';
import './SkillItem.css'; 

const SkillItem = ({ logo }) => {
    return (
        <div className="skill-item">
            <img src={logo} alt="Skill Logo" className="skill-logo" />
        </div>
    );
};

export default SkillItem;
