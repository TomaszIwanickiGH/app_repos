import images from './images';

const navLinks = [
  {
    id: '#features',
    link: 'Features',
  },
  {
    id: '#pricing',
    link: 'Pricing',
  },
  {
    id: '#resources',
    link: 'Resources',
  },
];

const statistics = [
  {
    id: 0,
    icon: images.iconBrandRecognition,
    title: 'Brand Recognition',
    description: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
  },
  {
    id: 1,
    icon: images.iconDetailedRecords,
    title: 'Detailed Records',
    description: ' Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    id: 2,
    icon: images.iconFullyCustomizable,
    title: 'Fully Customizable',
    description: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
];

const footerLinks = [
  {
    name: 'Features',
    links: [{ link: 'Link Shortening' }, { link: 'Branded Links' }, { link: 'Analytics' }],
  },
  {
    name: 'Resources',
    links: [{ link: 'Blog' }, { link: 'Developers' }, { link: 'Support' }],
  },
  {
    name: 'Company',
    links: [{ link: 'About' }, { link: 'Our Team' }, { link: 'Careers' }, { link: 'Contact' }],
  },
];

export default { navLinks, statistics, footerLinks };
