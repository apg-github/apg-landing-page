const hideNav = () => {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector("#navvy").style.top = "0";
    } else {
      let div = document.querySelector("#navvy");
      let info = div.getBoundingClientRect();
      let actualHeight = info.height;
      document.querySelector("#navvy").style.top = `-${actualHeight}`;
    }
    prevScrollpos = currentScrollPos;
  };
};

export default hideNav;
