const xQueryPrototype = {
    text: function(value)
    {
        if (argumetns.length === 0)
        {
            return this.length > 0 ? this[0].innerText : undefined;
        }
        else
        {
            this.forEach(node => {
                node.innerText = value;
            });
        }
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
