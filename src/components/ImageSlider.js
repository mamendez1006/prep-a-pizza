import { useState } from "react";

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const sliderStyles = {
        height: '100%',
        position: 'relative'
    };

    const slideStyles ={
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: "url("+slides[currentIndex].url+")"
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#000',
        zIndex: 0,
        cursor: 'pointer'
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#000',
        zIndex: 0,
        cursor: 'pointer'
    };

    const goToPrevious = () => {
        slides[currentIndex].isActive = false;
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length-1 : currentIndex - 1;
        slides[newIndex].isActive = true;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        slides[currentIndex].isActive = false;
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        slides[newIndex].isActive = true;
        setCurrentIndex(newIndex);
    }

    return (
        <div style={sliderStyles}>
            <div onClick={goToPrevious} style={leftArrowStyles}>❰</div>
            <div onClick={goToNext} style={rightArrowStyles}>❱</div>
            <div style={slideStyles}>

            </div>
        </div>
    ) 
};

export default ImageSlider