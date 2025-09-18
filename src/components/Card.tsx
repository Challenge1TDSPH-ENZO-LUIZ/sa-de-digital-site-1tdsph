import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  onClick
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-md p-6';
  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow duration-300 cursor-pointer' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  
  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
