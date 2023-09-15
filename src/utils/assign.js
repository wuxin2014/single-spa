// Object.assign() is not available in IE11. And the babel compiled output for object spread
// syntax checks a bunch of Symbol stuff and is almost a kb. So this function is the smaller replacement.
export function assign() {
  // 对象浅拷贝处理
  for (let i = arguments.length - 1; i > 0; i--) {
    for (let key in arguments[i]) {
      if (key === "__proto__") {
        continue;
      }
      arguments[i - 1][key] = arguments[i][key];
    }
  }

  return arguments[0];
}

/**
 assign(
  {
    loadErrorTime: null,
    status: NOT_LOADED,
    parcels: {},
    devtools: {
      overlays: {
        options: {},
        selectors: [],
      },
    }
  }, 
  {
    name: 'app1',
    loadApp: 返回promise的函数,
    activeWhen: 返回boolean值的函数,
    customProps: {},
  })
 */
