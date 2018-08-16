const Win = {
  setRem(win, doc, dWid) {
    const docEl = doc.documentElement;
    const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    const recalc = function () {
        let clientWidth = docEl.clientWidth;
        if (!clientWidth) {
          return false;
        } else if (clientWidth > dWid) {
          clientWidth = dWid;
        }
        docEl.style.fontSize = 100 * (clientWidth / dWid) + 'px';
      };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  }
}

module.exports = Win;