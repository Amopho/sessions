// Normal Promise
const userStatus = new Promise((resolve, reject) => {
  let hasKids = false;
  let hasDog = true;
  if (hasDog) {
    resolve({
      status: "User is cool",
      facie: "😎",
    });
  } else if (hasKids) {
    resolve({
      status: "User is going crazy",
      facie: "😅",
    });
  } else {
    reject({
      status: "User is alone",
      facie: "🥺",
    });
  }
});
