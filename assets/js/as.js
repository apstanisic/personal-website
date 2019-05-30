export default class As {
    // selector: all elements that should be hidden
    // className: class to toggle
    // field that was clicked on
    static accordion(selector, className, field) {
        // If passed class with dot i removes dot
        if (className.charAt(0) === '.') {
            className = className.substring(1);
        }
        // All elements that contains selector
        const elements = document.querySelectorAll(selector);

        // For every element it ask is it same as click element
        elements.forEach((element) => {
            if (element == field) {
                // if it is, toggle class
                element.classList.toggle(className);
            } else {
                // else remove class
                element.classList.remove(className);
            }
        });

    }
}