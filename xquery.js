const xQueryPrototype = {
    text: function(value)
    {
        this.forEach(node => {
            node.innerText = value;
        });
    },
    forEach: Array.prototype.forEach,
    length: Array.prototype.length,
    splice: Array.prototype.splice
};

function xQuery(selector)
{
    const nodes = document.querySelectorAll(selector);
    const result = Object.create(xQueryPrototype);
    Array.prototype.push.apply(result, Array.prototype.slice.call(nodes));
    return result;
}

window.$ = xQuery;
