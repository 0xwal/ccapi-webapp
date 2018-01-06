function getElements(selector, inChild) {
    var dom = inChild || document;
    return dom.querySelectorAll(selector);
}
function getFirstElement(selector, inChild) {
    return getElements(selector, inChild)[0];
}

Object.prototype.getElements = function(selector) {
    return getElements(selector, this);
};
Object.prototype.getFirstElement = function(selector) {
    return getFirstElement(selector, this);
};

function isArray(input){
    return Array.isArray(input) || input instanceof (NodeList);
}

function applyDisplay(elements, displayValue){
    const isPrimitive = !isArray(elements);
    let elementsLength = isPrimitive ? 1 : elements.length;

    if (isPrimitive){
        elements = [elements];
    }

    for (let i = 0; i < elementsLength; i++) {
        const element = elements[i];
        element.style.display = displayValue;
    }
}
function hideElements(elements){
    applyDisplay(elements, 'none');
}

function showElements(elements) {
    applyDisplay(elements, 'block');
}
function applyClassToElement(elements, cls, action){
    const isPrimitive = !isArray(elements);
    let elementsLength = isPrimitive ? 1 : elements.length;

    if (isPrimitive) {
        elements = [elements];
    }
    for (let i = 0; i < elementsLength; i++) {
        const element = elements[i];
        if (action === 'add')
            element.classList.add(cls);
        else
            element.classList.remove(cls);
    }
}

function addClass(elements, cls){
    applyClassToElement(elements, cls, 'add');
}
function removeClass(elements, cls) {
    applyClassToElement(elements, cls, 'remove');
}