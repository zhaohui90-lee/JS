function start(
  arg: string | string[] | (() => string) | { s: string }
): string {
  if (typeof arg === 'string') {
    return commonCase(arg)
  } else if (Array.isArray(arg)) {
    return arg.map(commonCase).join(',');
  } else if (typeof arg === 'function') {
    return commonCase(arg())
  } else {
    return commonCase(arg.s)
  }
}

function commonCase(s: string): string {
  return s;
}

type Shape = 
  { kind: 'circle', radius: number } 
  | { kind: 'square', x: number } 
  | { kind: 'triangle', x: number, y: number }

function area(s: Shape): number {
  if(s.kind === 'circle') {
    return Math.PI * s.radius * s.radius
  } else if(s.kind === 'square') {
    return s.x * s.x
  } else {
    return 0.5 * s.x * s.y 
  }
}