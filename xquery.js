const xQueryPrototype = {
    text: function(value)
    {
        this.forEach(node => {
            node.innerText = value;
        });
    }
};

function xQuery(selector)
{
    const nodes = document.querySelectorAll(selector);
    const result = Object.create(xQueryPrototype);
    result.splice = Array.prototype.splice;
    result.length = Array.prototype.length;
    result.forEach = Array.prototype.forEach;
    Array.prototype.push.apply(result, Array.prototype.slice.call(nodes));
    return result;
}

window.$ = xQuery;
