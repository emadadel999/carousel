# carousel
a Vue3 carousel component with auto-slide and stop-on-hover.

## main component props:
    slidesArray: /**
     * an array of slides to be shown.
     * you can define how its value is shown inside the component's tags.
     *  * @example
     * // [
     *  {
     *      src: 1
     *  },
     *  {
     *      src: 2
     *  },
     *  {
     *      src: 3
     *  }
     * ]
     */,

    itemsToShow:  /**
     * how many slides to show.
     */

    transitionSpeed:     /**
     * how fast your slides move.
     */,
    
    timingFunction: /**
     * the way your slides move.
     */,
    
    stopOnHover: /**
     * if it's true, and autoSlide is true, the slides will stop when you hover over them.
     */,
    
    stopOnHoverType: /**
     * the way the slides should stop after hovering
     * * @values "immediate", "wait"
     */
    
    autoSlide: /**
     * whether to automatically slide infinitely or no.
     */
    
    nextBtnClass: /**
     * when autoSlide is false, define next arrow button class
     */
    
    prevBtnClass: {/**
     * when autoSlide is false, define prev arrow button class
     */
    
    nextBtnStyle: {/**
     * when autoSlide is false, define next arrow button inline style object
     */
    
    prevBtnStyle: /**
     * when autoSlide is false, define prev arrow button inline style object
     */
    
    breakpoints: /**
     * breakpoints to change itemsToShow based on the screensize
     * @example
     * [
     *     {
     *         size: 800,
     *         itemsToShow: 3,
     *     },
     *     {
     *         size: 740,
     *         itemsToShow: 2,
     *     },
     *     {
     *         size: 0,
     *         itemsToShow: 1,
     *     },
     * ];
     */