import { Styles } from '../common';

/**
 * 用于为节点增加styles
 * @param el HTMLElement
 * @param style Styles
 */
function setStyle(el: HTMLElement, styles: Styles): void {
  Object.entries(styles).forEach(([key, value]) => {
    el.style.setProperty(key, String(value));
  });
}

export default setStyle;
