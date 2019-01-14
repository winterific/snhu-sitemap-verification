(() => {
    const parent = $0;
    if (!parent) return;
    const links = Array.prototype.slice.call(parent.querySelectorAll('a'));
    const output = links.reduce((acc, link) => acc += `${link.href}\r\n`, '');
    console.log(output);
})();
