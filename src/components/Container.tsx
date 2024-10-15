import React, { PropsWithChildren } from 'react';

const Container = ({children}: PropsWithChildren) => {
    return (
        <div className='max-w-7xl mx-auto px-4'>
            {children}
        </div>
    );
};

export default Container;