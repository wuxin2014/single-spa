import { handleAppError } from "./app-errors.js";

// App statuses
export const NOT_LOADED = "NOT_LOADED"; // 未下载
export const LOADING_SOURCE_CODE = "LOADING_SOURCE_CODE";
export const NOT_BOOTSTRAPPED = "NOT_BOOTSTRAPPED"; // 未初始化
export const BOOTSTRAPPING = "BOOTSTRAPPING"; // 初始化中
export const NOT_MOUNTED = "NOT_MOUNTED"; // 完成初始化，未挂载
export const MOUNTING = "MOUNTING"; // 挂载中
export const MOUNTED = "MOUNTED"; // 激活状态，且已挂载至DOM
export const UPDATING = "UPDATING"; // 更新中
export const UNMOUNTING = "UNMOUNTING"; // 卸载中
export const UNLOADING = "UNLOADING";
export const LOAD_ERROR = "LOAD_ERROR";
export const SKIP_BECAUSE_BROKEN = "SKIP_BECAUSE_BROKEN"; // 在初始化、挂载、卸载或更新时发生异常。其他parcel可能会被正常使用，但当前parcel会被跳过。

export function isActive(app) {
  return app.status === MOUNTED;
}

export function shouldBeActive(app) {
  try {
    return app.activeWhen(window.location);
  } catch (err) {
    handleAppError(err, app, SKIP_BECAUSE_BROKEN);
    return false;
  }
}

export function toName(app) {
  return app.name;
}

export function isParcel(appOrParcel) {
  return Boolean(appOrParcel.unmountThisParcel);
}

export function objectType(appOrParcel) {
  return isParcel(appOrParcel) ? "parcel" : "application";
}
