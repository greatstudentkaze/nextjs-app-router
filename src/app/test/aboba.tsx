'use client';

export const Aboba = () => {
  if (typeof window !== 'undefined') {
    throw new Error('CLIENT ERROR');
  }

  const handleClick = () => {
    throw new Error('aboba eeeeeeror');
  };

  return (
    <div className='p-2' onClick={handleClick}>
      aboba
    </div>
  );
};
