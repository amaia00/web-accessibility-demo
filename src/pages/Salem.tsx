import React from "react";
import Gallery from "../components/Gallery";

const Salem = () => {

    React.useEffect(() => {
        document.title = 'Web Accessibility - Salem';
    }, [])

    const altMap = new Map([
        [1, 'Salem looking closely to the camera.'],
        [2, 'Salem looking guilty.'],
        [3, 'Salem at night behind the window cloth. Only his eyes are visible.'],
        [4, 'Salem at daylight behind the window cloth.'],
        [5, 'Salem looking visibly annoyed.'],
        [6, 'Salem resting next to the grass.'],
        [7, 'Salem looking upset.'],
        [8, 'Salem eating cat food.'],
    ])

    return (
        <section className="mt-8 md:mt-16 lg:max-w-screen-lg mx-auto">
            <h1 className="sr-only">Salem</h1>
            <Gallery prefix="salem-" altMap={altMap} />
        </section>
    );
};

export default Salem;
