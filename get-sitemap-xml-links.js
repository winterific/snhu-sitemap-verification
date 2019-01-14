(function () {
    const localSitemapXmlUrl = "/sitemap.xml";
    fetch(localSitemapXmlUrl)
    .then(res => res.text())
    .then(text => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "application/xml");
        const links = Array.prototype.slice.call(doc.querySelectorAll("loc"));
        const output = links.reduce((acc, link) => acc += `${link.innerHTML}\r\n`, "");
        console.log(output);
    });
})();
