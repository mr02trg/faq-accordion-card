# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

1. Background Image
- Gradient is `background-iamge`, not `background-color`
- Percentage values for `background-position` doesn't go well with `background-size`

2. Accordion implementation
- Utilise `opacity` and `height` property to implement smooth accordion toggle with `trasition` instead of `display: none`

```css
.accordion .content {
  color: hsl(240, 6%, 50%);
  font-size: 14px;
  opacity: 0;
  height: 0;
  transition: all .2s;
}
.accordion.active .content {
  opacity: 1;
  height: unset;
  margin-top: 20px;
  transition: all .2s;
}
```
```js
const accordionEl = document.querySelectorAll(".accordion");

const toggle = function() {
  this.classList.toggle("active");
}

accordionEl.forEach(el => el.addEventListener('click', toggle))
```

3. Responsive image
- new attribute for `img` tag, which allow you to switch which image is being display for different view port
- the below example means, when view port `max-width` is `765px`, we want to display the `mobile.svg`
```html
<img 
  class="woman"
  srcset="images/illustration-woman-online-desktop.svg 472w, 
          images/illustration-woman-online-mobile.svg 266w" 
  sizes="(max-width: 765px) 266px,
        472px" >
```
### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Gradient background image](https://css-tricks.com/css3-gradients/)
- [Background image position](https://css-tricks.com/almanac/properties/b/background-position/)
- [Responsive image](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

## Author

- Frontend Mentor - [@mr02trg](https://www.frontendmentor.io/profile/mr02trg)


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

