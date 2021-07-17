import scrollama from 'scrollama';

const defCon = {
  type: 'left-sticky',
  articles: [],
};

function fadeOut(el) {
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.display = 'none';
      el.classList.add('is-hidden');
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

function fadeIn(el, display) {
  if (el.classList.contains('is-hidden')) {
    el.classList.remove('is-hidden');
  }

  el.style.opacity = 0;
  el.style.display = display || 'block';

  (function fade() {
    let val = parseFloat(el.style.opacity);

    if (!((val += 0.1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

class ScrollyTell {
  constructor(target, config = defCon) {
    this.target = target;
    this.config = config;
    this.scroller = scrollama();
  }

  render() {
    const figure = document.createElement('figure');
    const img = document.createElement('img');

    img.src = this.config.articles[0].img;
    img.alt = 'Image';

    figure.appendChild(img);

    const article = document.createElement('article');

    this.config.articles.forEach((data, idx) => {
      const div = document.createElement('div');

      div.setAttribute('class', 'step');
      div.setAttribute('data-step', idx + 1);

      const story = `<h2>${data.head}</h2><p>${data.content}</p>`;

      div.innerHTML = story;

      article.appendChild(div);
    });

    this.target.appendChild(article);
    this.target.appendChild(figure);

    this.#injectCSS();
    this.#scrollAnim();
  }

  #injectCSS() {
    this.target.style.position = 'relative';
    this.target.style.display = 'flex';
    this.target.style.backgroundColor = 'white';
    this.target.style.padding = '1rem';
  }

  #scrollAnim() {
    const figure = document.getElementsByTagName('figure')[0];

    const steps = [...document.getElementsByClassName('step')];

    this.#handleResize();
    window.addEventListener('resize', this.#handleResize());

    this.scroller
      .setup({
        step: `#${this.target.getAttribute('id')} article .step`,
        offset: 0.33,
      })
      .onStepEnter((res) => {
        console.log(res);

        steps.forEach((step, idx) => {
          if (idx === res.index) step.classList.add('is-active');
          else step.classList.remove('is-active');
        });

        const img = figure.querySelector('img');

        fadeOut(img);

        setTimeout(() => {
          img.src = this.config.articles[res.index].img;
          fadeIn(img);
        }, 150);
      });
  }

  #handleResize() {
    const figure = document.getElementsByTagName('figure')[0];
    const steps = [...document.getElementsByClassName('step')];

    const stepH = Math.floor(window.innerHeight * 0.75);

    steps.forEach((step) => (step.style.height = `${stepH}px`));

    const figureHeight = window.innerHeight / 2;
    const figureMarginTop = (window.innerHeight - figureHeight) / 2;

    figure.style.height = `${figureHeight}px`;
    figure.style.top = `${figureMarginTop}px`;

    this.scroller.resize();
  }
}

export default ScrollyTell;
