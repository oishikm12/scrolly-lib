import '../styles/index.css';

import ScrollyTell from '../lib/scrollytell';

import im1 from '../img/1.jpg';
import im2 from '../img/2.jpg';
import im3 from '../img/3.jpg';
import im4 from '../img/4.jpg';
import im5 from '../img/5.jpg';
import im6 from '../img/6.jpg';

let story;

const config = {
  type: 'left-sticky',
  articles: [
    {
      head: 'Hello Darkness',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quos laudantium ratione perferendis nostrum pariatur distinctio molestias praesentium. Deserunt unde enim fugit, cupiditate, illo eligendi, vero maiores blanditiis tenetur iure quia suscipit voluptate. Consequatur exercitationem iure at dolores. Error deserunt ipsum vero exercitationem. Tenetur quisquam atque id necessitatibus sed ducimus!',
      img: im1,
    },
    {
      head: 'Hello Darkness',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quos laudantium ratione perferendis nostrum pariatur distinctio molestias praesentium. Deserunt unde enim fugit, cupiditate, illo eligendi, vero maiores blanditiis tenetur iure quia suscipit voluptate. Consequatur exercitationem iure at dolores. Error deserunt ipsum vero exercitationem. Tenetur quisquam atque id necessitatibus sed ducimus!',
      img: im2,
    },
    {
      head: 'Hello Darkness',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quos laudantium ratione perferendis nostrum pariatur distinctio molestias praesentium. Deserunt unde enim fugit, cupiditate, illo eligendi, vero maiores blanditiis tenetur iure quia suscipit voluptate. Consequatur exercitationem iure at dolores. Error deserunt ipsum vero exercitationem. Tenetur quisquam atque id necessitatibus sed ducimus!',
      img: im3,
    },
    {
      head: 'Hello Darkness',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quos laudantium ratione perferendis nostrum pariatur distinctio molestias praesentium. Deserunt unde enim fugit, cupiditate, illo eligendi, vero maiores blanditiis tenetur iure quia suscipit voluptate. Consequatur exercitationem iure at dolores. Error deserunt ipsum vero exercitationem. Tenetur quisquam atque id necessitatibus sed ducimus!',
      img: im4,
    },
    {
      head: 'Hello Darkness',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quos laudantium ratione perferendis nostrum pariatur distinctio molestias praesentium. Deserunt unde enim fugit, cupiditate, illo eligendi, vero maiores blanditiis tenetur iure quia suscipit voluptate. Consequatur exercitationem iure at dolores. Error deserunt ipsum vero exercitationem. Tenetur quisquam atque id necessitatibus sed ducimus!',
      img: im5,
    },
    {
      head: 'Hello Darkness',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quos laudantium ratione perferendis nostrum pariatur distinctio molestias praesentium. Deserunt unde enim fugit, cupiditate, illo eligendi, vero maiores blanditiis tenetur iure quia suscipit voluptate. Consequatur exercitationem iure at dolores. Error deserunt ipsum vero exercitationem. Tenetur quisquam atque id necessitatibus sed ducimus!',
      img: im6,
    },
  ],
};

const init = () => {
  const target = document.getElementById('story');

  story = new ScrollyTell(target, config);

  story.render();
};

init();
