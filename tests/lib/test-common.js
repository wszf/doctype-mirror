var encyclopedia = {
    getComputedStyle: function(elem) {
	return document.defaultView.getComputedStyle(elem, null);
    },

    getComputedStyleById: function(id) {
	return this.getComputedStyle(document.getElementById(id));
    }
};

/* include_once function from http://www.phpied.com/javascript-include/ */
var included_files = new Array();

function include_dom(script_filename) {
    var html_doc = document.getElementsByTagName('head').item(0);
    var js = document.createElement('script');
    js.setAttribute('language', 'javascript');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', script_filename);
    html_doc.appendChild(js);
    return false;
}

function include_once(script_filename) {
    if (!in_array(script_filename, included_files)) {
        included_files[included_files.length] = script_filename;
        include_dom(script_filename);
    }
}

function in_array(needle, haystack) {
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle) {
            return true;
        }
    }
    return false;
}
