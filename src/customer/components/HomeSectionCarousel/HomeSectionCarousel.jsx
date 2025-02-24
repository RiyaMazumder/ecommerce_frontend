import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarousel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null); // Ref to control the AliceCarousel instance
    const responsive = {
        0: {
            items: 1,
        },
        720: {
            items: 3,
        },
        1024: {
            items: 5.5,
        },
    };

    const items = data.slice(0, 10).map((item) => (
        <HomeSectionCard key={item.id} product={item} />
    ));

    const maxIndex = items.length - 1; // Maximum index

    const slidePrev = () => {
        if (activeIndex > 0) {
            const newIndex = activeIndex - 1;
            setActiveIndex(newIndex);
            carouselRef.current.slideTo(newIndex); // Use AliceCarousel's slideTo method
        }
    };

    const slideNext = () => {
        if (activeIndex < maxIndex) {
            const newIndex = activeIndex + 1;
            setActiveIndex(newIndex);
            carouselRef.current.slideTo(newIndex); // Use AliceCarousel's slideTo method
        }
    };

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    return (
        <div className="border">
            <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    ref={carouselRef} // Attach the ref to AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />

                {activeIndex < maxIndex && (
                    <Button
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slideNext}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            right: '0rem',
                            transform: 'translateX(50%) rotate(90deg)',
                            bgcolor: 'white',
                            '&:hover': { bgcolor: 'darkblue' },
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon
                            sx={{ transform: 'rotate(90deg)', color: 'black' }}
                        />
                    </Button>
                )}

                {activeIndex > 0 && (
                    <Button
                        onClick={slidePrev}
                        variant="contained"
                        className="z-50 bg-white"
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            left: '0rem',
                            transform: 'translateX(-50%) rotate(-90deg)',
                            bgcolor: 'white',
                            '&:hover': { bgcolor: 'darkblue' },
                        }}
                        aria-label="previous"
                    >
                        <KeyboardArrowLeftIcon
                            sx={{ transform: 'rotate(90deg)', color: 'black' }}
                        />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
