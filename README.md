# Web Accessibility

## What is Web Accessibility?

> Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them. More specifically, people can:
> * perceive, understand, navigate, and interact with the Web 
> * contribute to the Web

https://www.w3.org/WAI/fundamentals/accessibility-intro/#what

The WC3 introduced the WCAG standard to make web content more accessible.
The latest version is [WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/). WCAG 3 is still in draft.


## The Principles of Accessibility

* **Perceivable** - Information and user interface components must be presentable to users in ways they can perceive.
* **Operable** - The interface cannot require interaction that a user cannot perform. 
* **Understandable** - Information and the operation of user interface must be understandable.
* **Robust** - Content must be accessible by users as technologies advance (the content should remain accessible)

![](https://miro.medium.com/max/786/1*Phcs6p0lIwUwgdbp4WuWKA.png)

**Figure 1:** The 4 Principles and 13 Guidelines For Web Accessibility

## Demo

### Alternative Text

> ℹ️ Alternative text serves several functions:
> * Screen readers announce alternative text in place of images, helping users with visual or certain cognitive disabilities perceive the content and function of the images. 
> * If an image fails to load or the user has blocked images, the browser will present the alternative text visually in place of the image. 
> * Search engines use alternative text and factor it into their assessment of the page purpose and content.
>
> https://webaim.org/techniques/alttext/

#### How to improve it?
- `alt` attribute on images
    - Decorative images should be set as `alt=""`
    - Images that have content or are also used as links should have a description on the `alt` attribute.
- `title` attribute on SVG

### Contrast
- Manual testing is required. We cannot rely only on the tooling to detect if the web page is accessible.
- [High Contrast](https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph/related?hl=en)
- [Tota11y](https://chrome.google.com/webstore/detail/tota11y-for-chrome/nkghaekndgmonifcpfgjmpfjlhnmflhp?hl=en)

### Readable
- Be mindful on the use of labels, we need to indicate to which element is referring to.
- Define the sequential keyboard navigation using the `tabIndex` attribute and seting the focus on the right element.

### Navigable
- Use of HTML Semantic Elements (e.g. `nav`, `header`, `footer`, `section`, `article`)
- Sometimes the use of server side rendering along with frameworks can deteriorate the correct use of the semantic elements.
- Use of `aria-live` to communicate messages that are going to be announced by the screen reader.
- Keep the hierarchy on the use of `h1`, `h2`, `h3`.

Additional information in [Good Semantics](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#good_semantics).

![](https://miro.medium.com/max/640/1*zHJFnu7QF-PgUb8108aLcA.png)

**Figure 2:** How to use the semantic HTML to structure a web-page


## Conformance of WCAG
<img src="https://www.levelaccess.com/wp-content/uploads/2019/12/wcag-a-aa-aaa.jpeg" width="600"/>

**Figure 3:** The three levels of conformance of WCAG

* A - Minimum level: without addressing these items, barriers exist that cannot be overcome by assistive technology.
* AA -More accessible: At this level of accessibility most assistive technology on desktop and mobile devices should work.
* AAA – Even more accessible: Even meeting level AAA does not make web pages accessible to everyone.

## Links
* [WAI- ARIA](https://www.w3.org/WAI/standards-guidelines/aria/)
* [Course "An Introduction to Accessibility and Inclusive Design" from University of Illiniois](https://www.coursera.org/learn/accessibility)
* [Course "Introduction to Web Accessibility" from W3C](https://www.edx.org/course/web-accessibility-introduction)
