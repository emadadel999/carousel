# carousel
a Vue3 carousel component with auto-slide and stop-on-hover.

## component props:
#### `slidesArray`: 
the array of slides to be shown. you can define how its value is shown inside the component's tags.<br>
> *example*:  `[{src: "1.png"},{src: "2.png"},{src: "3.png"}]`.
#### `itemsToShow`: 
how many slides to show.
#### `transitionSpeed`: 
how fast your slides move.
#### `timingFunction`: 
the way your slides move.
#### `stopOnHover`: 
if it's true, and autoSlide is true, the slides will stop when you hover over them.
#### `stopOnHoverType`: 
the way the slides should stop after hovering.<br>
> *values* `"immediate", "wait"`
#### `autoSlide`: 
whether to automatically slide infinitely or no.
#### `nextBtnClass`, `prevBtnClass`, `nextBtnStyle`, `prevBtnStyle`: 
when `autoSlide` is false, define respective button class/inline style.
#### `breakpoints:` 
breakpoints to change `itemsToShow` based on the screensize
> example `[
>  {size: 800,itemsToShow: 3},
>  {size: 740,itemsToShow: 2},
>  {size: 0,itemsToShow: 1}
> ]`
