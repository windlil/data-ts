function cloneDeep(target: any, map = new Map()) {
  if (typeof target !== 'object' || target === null) return target
  
  const reg = new RegExp(/^(Function|RegExp|Date|Map|Set)$/i)
  const constructor = target.constructor
  if (reg.test(constructor.name)) return new constructor(target)

  if (map.has(target)) return map.get(target)

  const cloneTarget: any = Array.isArray(target) ? [] : {}
  for (const prop in target) {
    cloneTarget[prop] = cloneDeep(target[prop], map)
  }

  return cloneTarget
}

const obj1 = {
  a: 1,
  test() {
    console.log(this.a)
  }
}

const obj2 = cloneDeep(obj1)
obj2.a = 2
obj2.test = function() {
  console.log(999999)
}

obj1.test()
obj2.test()

console.log(obj1, obj2)