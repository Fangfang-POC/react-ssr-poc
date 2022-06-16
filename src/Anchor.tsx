import React, { useEffect, useCallback, useRef, useLayoutEffect } from 'react';

// Anchor can prevent default behavior of a tag.
const Anchor = ({ }) => {
    const element = useRef<HTMLAnchorElement>(null);

    useLayoutEffect(() => {
        // if (element.current) {
        //     element.current.addEventListener('click', onNativeClick);
        // }
        return () => {
            // console.log(element.current);
            const elementA = document.querySelector('.test-anchor');
            console.log(document.querySelector('.test-anchor'));
        }
    }, []);

    return (
        <a
            className='test-anchor'
            ref={element}
        >
            hello
        </a>
    );
};

export default Anchor;