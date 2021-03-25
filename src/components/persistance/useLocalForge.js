/** @format */

import localforage from "localforage";
export default async function useLocalForge(
  method = "set",
  key = "",
  value = ""
) {
  /**
   * @async
   * @function useLocalForge
   * @param {string} [method="set"]  - type of action to call on localforage
   * @param {string} key - the primary key of the record.
   * @param {string} value - the value to be stored as the record.
   */
  let end = [];
  try {
    end.push("trying localforage");
    switch (method) {
      default:
        return;
      case "set":
        await localforage.setItem(key, value);
        end.push("setItem successful");
        return;
      case "get":
        await localforage.getItem(key);
        end.push("getItem successful");
        return;
      case "remove":
        await localforage.removeItem(key);
        end.push("removeItem successful");
        return;
    }
  } catch (err) {
    end.push("localforage error");
    if ("localStorage" in window) {
      localStorage.setItem(
        "error",
        JSON.stringify({ id: new Date(), ...err, ...method, [key]: value })
      );
      end.push("falling back to localStorage");
    } else {
      end.push("fallback failed, no localStorage access");
      alert(
        "There is an issue please take a screenshot and email the help desk."
      );
    }
  }
  return end;
}
