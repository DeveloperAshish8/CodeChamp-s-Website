let nav = Array.from(document.querySelectorAll('.nav-link'))
  .reduce(function (acc, navElem) {
    if ((attr = navElem.getAttribute('href')).match(/^#.*/g)) {
      acc.push(
        [attr == '#'
          ? document.getElementById('first')
          : document.getElementById(attr.substr(1)),
          navElem
        ]
      )
    }
    return acc;
  }, []);

window.onscroll = () => {
  for (const [elem, navElem] of nav) {
    if (elem.getAttribute('id') === 'first' 
      && this.scrollY <= elem.offsetHeight + elem.offsetTop) {
      navElem.classList.add('nav-link-jshover'); continue;
    }
    if (this.scrollY > elem.offsetTop - 70 // navbar height
      && this.scrollY < elem.offsetTop + elem.offsetHeight
    ) {
      navElem.classList.add('nav-link-jshover');
    } else {
      navElem.classList.remove('nav-link-jshover');
    }
  }
}