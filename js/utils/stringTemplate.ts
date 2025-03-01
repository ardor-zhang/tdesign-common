/**
 * 用正则实现模板字符串功能
 * @param str 模板字符串
 * @param vars 取值的对象
 * @returns 替换后的字符串
 */
export function template<T extends Record<string, string>>(str: string, vars: T): string {
  return str.replace(/\${(.*?)}/g, (_, prop: string) => vars[prop.trim()] || '');
}
