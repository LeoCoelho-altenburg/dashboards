function mudarPaginaPowerBI(pagina) {
    var iframe = document.getElementById('powerbi-iframe');
    iframe.src = 'https://app.powerbi.com/view?r=eyJrIjoiZjM2ZDg0ODYtN2RlZi00NjBhLTgwOTEtZWVkYzZmNzE3MmJhIiwidCI6ImVmMjE1YTExLTk2ZTUtNDIwMy04YjRlLWE4YWUxYmJmY2M0MyJ9&pagemode=embed&navContentPaneEnabled=false&pageName=' + pagina;
}
