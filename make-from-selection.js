javascript: (function () {
  var w = window,
  d = document,
  pageSelectedTxt = w.getSelection ? w.getSelection()  : (d.getSelection) ? d.getSelection()  : (d.selection ? d.selection.createRange().text : 0),
  pageTitle = d.title,
  pageUri = w.location.href,
  tmplt = '';
  tmplt = '\n\n[' + pageUri + '](' + pageUri + ') (Last access ' + (new Date().toISOString()) + ')';
  if (pageSelectedTxt != '') {
    pageSelectedTxt = '> ' + pageSelectedTxt;
    pageSelectedTxt = pageSelectedTxt.replace(/(\r\n|\n+|\r)/gm, '\n');
    pageSelectedTxt = pageSelectedTxt.replace(/\n/g, '\n> \n>');
    w.location.href = 'nvalt://make/?txt=' + encodeURIComponent(pageSelectedTxt + tmplt);
  }
}) ();
