export const negate = x => -x;

export const maccarthy = n => (n > 100 ? n - 10 : maccarthy(maccarthy(n + 11)));
