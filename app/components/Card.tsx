"use client";

import React from 'react';
import Link from 'next/link';

interface CardProps {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  link?: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  imageAlt = 'card-image',
  title,
  description,
  buttonText = 'Read more',
  onButtonClick,
  link
}) => {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="object-cover rounded-md"
        />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-text text-xl font-semibold">
          {title}
        </h6>
        <p className="text-muted leading-normal font-light">
          {description}
        </p>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2">
        {link ? (
          <Link
            href={link}
            className="inline-block rounded-md btn-primary py-2 px-4 border border-transparent text-center text-sm text-on-primary transition-all shadow-md hover:shadow-lg disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            aria-label={`Learn more about ${title}`}
          >
            {buttonText}
          </Link>
        ) : (
          <button
            className="rounded-md btn-primary py-2 px-4 border border-transparent text-center text-sm text-on-primary transition-all shadow-md hover:shadow-lg disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;