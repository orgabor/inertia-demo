import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import php from 'highlight.js/lib/languages/php';
import yaml from 'highlight.js/lib/languages/yaml';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';

import 'highlight.js/styles/base16/ocean.css';

hljs.registerLanguage("php", php);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);
hljs.registerLanguage("yaml", yaml);
hljs.registerLanguage("css", css);

export function highlight(selector) {

    if (!selector) {
        hljs.highlightAll();
    }

    document.querySelectorAll(selector + ' pre code ').forEach(highlightElement)
}

export function highlightElement(element) {
    hljs.highlightElement(element)
}
