const presenterCards = document.querySelector('#presenter-cards');

const prestarr = [
  {
    name: 'Elon Musk',
    position: 'Founder&CEO',
    description: 'SpaceX, The Boring Company, Tesla, OpenAI.',
    image: 'Images/elon.jpg',
    imageAlt: 'Elon',
  },
  {
    name: 'Jack Dorsey',
    position: 'Co-Founder&CEO',
    description: 'Co-Founder of Twitter, Square.',
    image: 'Images/jack.jpg',
    imageAlt: 'Jack',
  },
  {
    name: 'Jeff Bezos',
    position: 'Founder&CEO',
    description: 'Co-founder of Amazon, Blue Origin.',
    image: 'Images/jeff.jpg',
    imageAlt: 'Jeff',
  },
  {
    name: 'Justin Kan',
    position: 'Co-Founder&CEO',
    description: 'Co-founder of Twitch, Atrium, Justin.tv.',
    image: 'Images/justin.jpeg',
    imageAlt: 'Justin',
  },
  {
    name: 'Linus Sebastian',
    position: 'Youtuber & Influencer',
    description: 'Owner Linus Media Group, Linus Tech Tips.',
    image: 'Images/linus.jpg',
    imageAlt: 'Linus',
  },
  {
    name: 'Mark Zuckerberg',
    position: 'Co-Founder&CEO',
    description: 'Co-Founder of Facebook, known water drinker.',
    image: 'Images/mark.jpg',
    imageAlt: 'Mark',
  },
  {
    name: 'Marques Brownlee',
    position: 'Youtuber&Influencer',
    description: 'Founder of the channel MKBHD',
    image: 'Images/markass.jpg',
    imageAlt: 'Marques',
  },
  {
    name: 'Steve Chen',
    position: 'Co-Founder&Entrepreneur',
    description: 'He is the Co-Founder of the video platform YouTube.',
    image: 'Images/steve.jpg',
    imageAlt: 'Steve',
  },

];

for (let i = 0; i < prestarr.length; i += 1) {
  const presenter = prestarr[i];

  presenterCards.innerHTML += `
  <div class="presenter">
      <div class="pres-img">
        <img src="${presenter.image}" alt="${presenter.imageAlt}" height="100">

      </div>
      <div class="pres-info">
        <h3 class="pres-name">${presenter.name}</h3>
        <h5 class="pres-pos">${presenter.position}</h5>
        <p class="pres-p">${presenter.description}</p>
      </div>
    </div>
`;
}
