/* eslint-disable no-unused-vars */
export function obs(scrollableDiv, contentToCheck){
    const observerOptions = {
        root: null,
        rootMargin: '20px',
        threshold: [0] // 1.0 means the contentToCheck should be fully visible
    };

    console.log(1);

    function handleIntersection(entries, observer) {
        console.log('Checking visibility');
        entries.forEach(entry => {
        const isPartiallyVisible = entry.isIntersecting && entry.intersectionRect.height >= 100;

        if (isPartiallyVisible) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    observer.observe(contentToCheck);
}