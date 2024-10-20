import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PriorityChanger = ({ task, setBtnPriority }) => {
    const [showPriorityOptions, setShowPriorityOptions] = useState(false);
    const [arrowiconstate, seticonstate] = useState(0);
    const priorities = ['HIGH', 'LOW', 'MEDIUM'];

    const togglePriorityChange = (currentPriority, id) => {
        const rect = document.getElementById(`priority-btn-${id}`);
        if (rect) {
            const { bottom, left, width } = rect.getBoundingClientRect();
            return (
                <div className="priority-changer flex flex-col" style={{ position: 'absolute', top: `${bottom}px`, left: `${left}px` }}>
                    {priorities.map((priority) => {
                        if (priority !== currentPriority) {
                            return (
                                <span
                                    key={priority}
                                    className={`item bg-${setBtnPriority(priority)}-600`}
                                    style={{ height: '40px', width: `${width}px` }} // Example height
                                    onClick={() => {
                                        // Handle priority change
                                        // Update the current priority state or perform other actions
                                        setShowPriorityOptions(false); // Hide options after selection
                                    }}
                                >
                                    {priority}
                                </span>
                            );
                        }
                        return null;
                    })}
                </div>
            );
        }
    };

    return (
        <div className="button-group flex">
            <button
                id={`priority-btn-${task.id}`}
                className={`flex bg-${setBtnPriority(task.priority)}-600 py-0 px-2 text-white rounded-l-sm`}
                onClick={() => setShowPriorityOptions(!showPriorityOptions)} // Toggle priority options
            >
                {task.priority ? task.priority : 'NOT SET'}
            </button>
            <button className={`bg-${setBtnPriority(task.priority)}-700 rounded-r-sm`}>
                <motion.span
                    animate={{ rotate: arrowiconstate }}
                    transition={{ duration: 0.4, ease: 'linear' }}
                    onClick={() => {
                        seticonstate(prev => (prev === 0 ? 180 : 0));
                        togglePriorityChange(task.priority, task.id);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </motion.span>
            </button>
            {showPriorityOptions && togglePriorityChange(task.priority, task.id)} {/* Render priority options conditionally */}
        </div>
    );
};

export default PriorityChanger;
