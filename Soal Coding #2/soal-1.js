/**
 * Show menu sesuai dengan "user role", ketentuan:
 * 
 * administrator:
 * - menu 1, menu 2, menu 3, menu 4, menu 5
 * 
 * admin:
 * - menu 1, menu 2, menu 3
 * 
 * member:
 * - menu 1, menu 2, menu 5
 */

const prompt = require('prompt-sync')();

const role = prompt('Role user ? '); // user role
const menus = ["menu 1", "menu 2", "menu 3", "menu 4", "menu 5"]; // available menu
const access = {
  administrator: ["menu 1", "menu 2", "menu 3", "menu 4", "menu 5"],
  admin: ["menu 1", "menu 2", "menu 3"],
  member: ["menu 1", "menu 2", "menu 5"]
};

for (let i = 0; i < menus.length; i++) {
  const menu = menus[i];
  if (access[role.toLowerCase()].includes(menu)) {
    console.log(menu);
  } 
}