function rafraichir() {
    var code_html = document.getElementById('code-HTML').value;
    var code_css =  "<style>" +document.getElementById('code-css').value + "</style>";
    var code_js = "<scri"+"pt>" +document.getElementById('code-js').value + "</scri"+"pt>";
    var page = document.getElementById('res').contentWindow.document;
    page.open();
    page.write(code_html + code_css + code_js);
    page.close
}

const iframe = document.getElementById('res');
function refreshIframe() {
    iframe.contentWindow.location.reload();
}

function copy(textareaId, buttonId) {
    const copyButton = document.getElementById(buttonId);
    const textarea = document.getElementById(textareaId);

    textarea.select();
    textarea.setSelectionRange(0, 99999);;
    navigator.clipboard.writeText(textarea.value);

    const icon = copyButton.querySelector('i');
    icon.classList.remove('fa-clipboard');
    icon.classList.add('fa-check');

    setTimeout(function () {
        icon.classList.remove('fa-check');
        icon.classList.add('fa-clipboard');
    }, 2000);
}
