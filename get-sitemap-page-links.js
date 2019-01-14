(function () {    
    const sitemap = document.getElementById("sitemap");
    const links = Array.prototype.slice.call(sitemap.querySelectorAll('a'));
    const output = links.reduce((acc, link) => acc += `${link.href || ""}\r\n`, '');
    return output;
})();
