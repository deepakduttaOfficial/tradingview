export const addtoItem = (item) => {
  let sideFav = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("sideFav")) {
      sideFav = JSON.parse(localStorage.getItem("sideFav"));
    }
    sideFav.push(item);
    localStorage.setItem("sideFav", JSON.stringify(sideFav));
  }
};

export const getallItems = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("sideFav")) {
      return JSON.parse(localStorage.getItem("sideFav"));
    }
  }
};
