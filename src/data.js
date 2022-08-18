const projects = [
  {
    title: 'Neurolytics',
    description: 'Python data-orientated objects to hold neurophysiological data',
    image: './images/spike_example.png',
    link:
      'https://github.com/warnerwarner/neurolytics',
  },
  {
    title: 'PyPulse',
    description: 'Tools for generating complex pulse trains for driving high speed valves',
    image: './images/pypulse_examp.png',
    link:
      'https://github.com/warnerwarner/pypulse',
  },
  {
    title: 'Binary pulses',
    description: 'Data extraction and modelling of neurophysiological data',
    image: './images/binary_pulses.png',
    link: 'https://github.com/warnerwarner/binary_pulses',
  },
  {
    title: 'CHIMPY',
    description: 'Analysis of data from CHIME probes (https://doi.org/10.3389/fnins.2020.00834)',
    image: './images/chime.jpg',
    link: 'https://github.com/warnerwarner/chimpy',
  },
  {
    title: 'Daskify',
    description: 'High level interface for dask objects. Useful for distributed computing',
    image: './images/dask.png',
    link: 'https://github.com/warnerwarner/daskify',
  },
  {
    title: 'PulseBoy',
    description:
      'GUI for the generation and presentation of pulse trains.',
    image: './images/Pulseboy.png',
    link:
      'https://github.com/warnerwarner/pulseboy',
  },
  {
    title: 'Portfolio',
    description: 'A website portfolio of myself implemented using React.js.',
    image: './images/headshot.png',
    link: 'https://github.com/warnerwarner/warnerwarner.github.io',
  },
];

const publications = [
  {
    name:
      'Coupling of Mouse Olfactory Bulb Projection Neurons to Fluctuating Odor Pulses',
    authors: Array('D. Dasgupta, ', 'T.P.A. Warner, ', 'A. Erskine, ', 'A.T. Schaefer '),
    journal: 'Journal of Neuroscience',
    image: './images/bloch_sphere.png',
    link: 'https://www.jneurosci.org/content/42/21/4278/tab-article-info',
    year: '2022',
    me_author_index: 1
  },
  {
    name:
    'jULIEs: Nanostructured Polytrodes for Low Traumatic Extracellular Recordings and Stimulation in the Mammalian Brain',
    authors: Array('R.R. Racz, ', 'M. Kollo, ', 'G. Racz, ', 'C. Bulz, ', 'T. Ackels, ', 'T.P.A. Warner, ', 'W. Wray, ', 'N. Kiskin, ', 'C. Chen, ', 'Z. Ye, ', 'L. de Hoz, ', 'E. Rancz, ', 'A.T. Schaefer '),
    journal: 'Journal of Neural Engineering',
    image: './images/bloch_sphere.png',
    link: 'https://iopscience.iop.org/article/10.1088/1741-2552/ac514f/meta',
    year: '2022',
    me_author_index:5
  },
  {
    name:
      'Fast Odour Dynamics are Encoded in the Olfactory System and Guide Behaviour',
    authors: Array('T. Ackels, ', 'A. Erskine, ', 'D. Dasgupta, ', 'A.C. Marin, ', 'T.P.A. Warner, ', 'S. Tootoonian, ', 'I. Fukunaga, ', 'J.J. Harris, ', 'A.T. Schaefer '),
    journal: 'Nature',
    image: './images/bloch_sphere.png',
    link: 'https://www.nature.com/articles/s41586-021-03514-2',
    year: '2021',
    me_author_index:4
  },

  
];


export {
  projects,
  publications,
};
