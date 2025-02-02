import { Styles } from '../common';

/**
 * 用于为el节点增加styles ,migrate from tdesign-vue repo
 * @param el HTMLElement
 * @param style Styles
 */
function setStyle(el: HTMLElement, styles: Styles): void {
  const keys = Object.keys(styles);
  keys.forEach((key) => {
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    el.style[key] = styles[key];
  });
  // todo 建议改成如下
  // Object.entries(styles).forEach(([key, value]) => {
  //   el.style.setProperty(key, String(value));
  // });
}

export default setStyle;
