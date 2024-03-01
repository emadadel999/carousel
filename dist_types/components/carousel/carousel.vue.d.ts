interface iBreakpoint {
    size: number;
    itemsToShow: number;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /**
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
     */
    slidesArray: {
        type: ArrayConstructor;
        required: true;
    };
    /**
     * how many slides to show.
     */
    itemsToShow: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * how fast your slides move.
     */
    transitionSpeed: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * the way your slides move.
     */
    timingFunction: {
        type: StringConstructor;
        default: string;
    };
    /**
     * if it's true, and autoSlide is true, the slides will stop when you hover over them.
     */
    stopOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * the way the slides should stop after hovering
     * * @values "immediate", "wait"
     */
    stopOnHoverType: {
        type: StringConstructor;
        default: string;
        validator(value: string): boolean;
    };
    /**
     * whether to automatically slide infinitely or no.
     */
    autoSlide: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * when autoSlide is false, define next arrow button class
     */
    nextBtnClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * when autoSlide is false, define prev arrow button class
     */
    prevBtnClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * when autoSlide is false, define next arrow button inline style object
     */
    nextBtnStyle: {
        type: ObjectConstructor;
    };
    /**
     * when autoSlide is false, define prev arrow button inline style object
     */
    prevBtnStyle: {
        type: ObjectConstructor;
    };
    slideContainerClass: {
        type: StringConstructor;
    };
    /**
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
    breakpoints: {
        type: {
            (arrayLength: number): iBreakpoint[];
            (...items: iBreakpoint[]): iBreakpoint[];
            new (arrayLength: number): iBreakpoint[];
            new (...items: iBreakpoint[]): iBreakpoint[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: null;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
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
     */
    slidesArray: {
        type: ArrayConstructor;
        required: true;
    };
    /**
     * how many slides to show.
     */
    itemsToShow: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * how fast your slides move.
     */
    transitionSpeed: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * the way your slides move.
     */
    timingFunction: {
        type: StringConstructor;
        default: string;
    };
    /**
     * if it's true, and autoSlide is true, the slides will stop when you hover over them.
     */
    stopOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * the way the slides should stop after hovering
     * * @values "immediate", "wait"
     */
    stopOnHoverType: {
        type: StringConstructor;
        default: string;
        validator(value: string): boolean;
    };
    /**
     * whether to automatically slide infinitely or no.
     */
    autoSlide: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * when autoSlide is false, define next arrow button class
     */
    nextBtnClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * when autoSlide is false, define prev arrow button class
     */
    prevBtnClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * when autoSlide is false, define next arrow button inline style object
     */
    nextBtnStyle: {
        type: ObjectConstructor;
    };
    /**
     * when autoSlide is false, define prev arrow button inline style object
     */
    prevBtnStyle: {
        type: ObjectConstructor;
    };
    slideContainerClass: {
        type: StringConstructor;
    };
    /**
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
    breakpoints: {
        type: {
            (arrayLength: number): iBreakpoint[];
            (...items: iBreakpoint[]): iBreakpoint[];
            new (arrayLength: number): iBreakpoint[];
            new (...items: iBreakpoint[]): iBreakpoint[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: null;
    };
}>>, {
    itemsToShow: number;
    transitionSpeed: number;
    timingFunction: string;
    stopOnHover: boolean;
    stopOnHoverType: string;
    autoSlide: boolean;
    nextBtnClass: string;
    prevBtnClass: string;
    breakpoints: iBreakpoint[];
}, {}>, {
    prev?(_: {}): any;
    slide?(_: any): any;
    next?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
