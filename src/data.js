const projects = [
  {
    title: 'Neurolytics',
    description: 'Python data-orientated objects to hold neurophysiological data',
    image: './images/bloch_sphere.png',
    link:
      'https://github.com/warnerwarner/neurolytics',
  },
  {
    title: 'PyPulse',
    description: 'Tools for generating complex pulse trains for driving high speed valves',
    image: './images/protein.png',
    link:
      'https://github.com/warnerwarner/pypulse',
  },
  {
    title: 'Binary pulses',
    description: 'Data extraction and modelling of neurophysiological data',
    image: './images/seq2seq_attention_mechanism_new.png',
    link: 'https://github.com/warnerwarner/binary_pulses',
  },
  {
    title: 'CHIMPY',
    description: 'Analysis and manipulation of electrophysiological data recorded using CHIME probes',
    image: './images/gpfunc.png',
    link: 'https://github.com/Usefulmaths/Neural-Processes',
  },
  {
    title: 'Daskify',
    description: 'High level interface for dask objects. Useful for distributed computing',
    image: './images/starry_london.png',
    link: 'https://github.com/warnerwarner/daskify',
  },
  {
    title: 'PulseBoy',
    description:
      'GUI for the generation and presentation of pulse trains.',
    image: './images/transformer_diagram2.png',
    link:
      'https://github.com/warnerwarner/pulseboy',
  },
  {
    title: 'Portfolio',
    description: 'A website portfolio of myself implemented using React.js.',
    image: './images/liam-head-shot-square.png',
    link: 'https://github.com/warnerwarner/portfolio-website',
  },
];

const supervised = [
  {
    title: 'Linear Regression',
    description: 'Implementation of Linear Regression (Python)',
    image: './images/lr.png',
    link: 'https://github.com/Usefulmaths/Linear-Regression',
  },
  {
    title: 'Logistic Regression',
    description: 'Implementation of Logistic Regression (Python)',
    image: './images/logisticregression.png',
    link: 'https://github.com/Usefulmaths/Logistic-Regression',
  },
  {
    title: 'Decision Tree',
    description: 'Implementation of Decision Tree (Python)',
    image: './images/dt.png',
    link: 'https://github.com/Usefulmaths/Decision-Tree',
  },
  {
    title: 'Naïve Bayes',
    description: 'Implementation of Gaussian Naïve Bayes (Python)',
    image: './images/nb.png',
    link: 'https://github.com/Usefulmaths/Naive-Bayes',
  },
  {
    title: 'K-Nearest Neighbours',
    description: 'Implentation of K-Nearest Neighbours (Python)',
    image: './images/knn.png',
    link: 'https://github.com/Usefulmaths/K-Nearest-Neighbours',
  },
  {
    title: 'Neural Network',
    description:
      'Implementation of a fully-connected feedforward neural network using NumPy (Python).',
    image: './images/nn.png',
    link: 'https://github.com/Usefulmaths/Neural-Network',
  },
];

const unsupervised = [
  {
    title: 'K-Means',
    description: 'Implementation of K-means (Python)',
    image: './images/kmeans.png',
    link: 'https://github.com/Usefulmaths/K-means',
  },
  {
    title: 'Gaussian Mixture Model',
    description: 'Implementation of Gaussian Mixture Model using EM (Python)',
    image: './images/gmm.png',
    link: 'https://github.com/Usefulmaths/Gaussian-Mixture-Model',
  },
  {
    title: 'Principal Component Analysis',
    description: 'Implementation of Principal Component Analysis (Python)',
    image: './images/pca.png',
    link: 'https://github.com/Usefulmaths/Principal-Component-Analysis',
  },
  {
    title: 'Autoencoder',
    description: 'Implementation of an Autoencoder (PyTorch)',
    image: './images/ae.png',
    link: 'https://github.com/Usefulmaths/Autoencoder',
  },
  {
    title: 'Variational Autoencoder',
    description: 'Implementation of a Variational Autoencoder (PyTorch)',
    image: './images/vae.png',
    link: 'https://github.com/Usefulmaths/Variational-Autoencoder',
  },
  {
    title: 'Generative Adversarial Network',
    description: 'Implementation of a Generative Adversarial Network (PyTorch)',
    image: './images/gan.png',
    link: 'https://github.com/Usefulmaths/Generative-Adversarial-Network',
  },
];

const reinforcement = [
  {
    title: 'Monte Carlo REINFORCE',
    description: 'Implementation of Monte Carlo REINFORCE using PyTorch.',
    image: './images/pg.png',
    link: 'https://github.com/Usefulmaths/Monte-Carlo-Reinforce',
  },
  {
    title: 'Q-Learning',
    description: 'Implementation of Q-Learning using PyTorch.',
    image: './images/qlearning.png',
    link: 'https://github.com/Usefulmaths/Q-Learning',
  },
  {
    title: 'Actor-Critic',
    description: 'Implementation of Actor Critic Method using PyTorch.',
    image: './images/actorcritic.png',
    link: 'https://github.com/Usefulmaths/Actor-Critic',
  },
];

const publications = [
  {
    name:
      'Coupling of Mouse Olfactory Bulb Projection Neurons to Fluctuating Odor Pulses',
    authors: Array('D. Dasgupta ', 'T.P.A. Warner ', 'A. Erskine ', 'A.T. Schaefer '),
    journal: 'Journal of Neuroscience',
    image: './images/bloch_sphere.png',
    link: 'https://www.jneurosci.org/content/42/21/4278/tab-article-info',
    year: '2022',
    me_author_index: 1
  },
  {
    name:
    'jULIEs: nanostructured polytrodes for low traumatic extracellular recordings and stimulation in the mammalian brain',
    authors: Array('R.R. Racz ', 'M. Kollo ', 'G. Racz ', 'C. Bulz ', 'T. Ackles ', 'T.P.A. Warner ', 'W. Wray ', 'N. Kiskin ', 'C. Chen ', 'Z. Ye ', 'L. de Hoz ', 'E. Rancz ', 'A.T. Schaefer '),
    journal: 'Journal of Neural Engineering',
    image: './images/bloch_sphere.png',
    link: 'https://iopscience.iop.org/article/10.1088/1741-2552/ac514f/meta',
    year: '2022',
    me_author_index:5
  },
  {
    name:
      'Fast odour dynamics are encoded in the olfactory system and guide behaviour',
    authors: Array('T. Ackles ', 'A. Erskine ', 'D. Dasgupta ', 'A.C. Marin ', 'T.P.A. Warner ', 'S. Tootoonian ', 'I. Fukunaga ', 'J.J. Harris ', 'A.T. Schaefer '),
    journal: 'Nature',
    image: './images/bloch_sphere.png',
    link: 'https://www.nature.com/articles/s41586-021-03514-2',
    year: '2021',
    me_author_index:4
  },

  
];

const attributes = [
  {
    title: 'Linear Regression',
    index: 1,
    website: 'https://www.analyticsindiamag.com',
  },
  {
    title: 'Logistic Regression, Autoencoder',
    index: 2,
    website: 'https://www.towardsdatascience.com',
  },
  {
    title: 'K-Means',
    index: 3,
    website: 'https://machinelearningcoban.com/2017/01/01/kmeans/',
  },
  {
    title: 'PCA',
    index: 4,
    website: 'http://www.visiondummy.com/2014/05/feature-extraction-using-pca/',
  },
  {
    title: 'Variational Autoencoder',
    index: 5,
    website: 'https://www.renom.jp',
  },
  {
    title: 'Generative Adversarial Network',
    index: 6,
    website: 'https://skymind.ai/wiki/generative-adversarial-network-gan',
  },
  {
    title: 'Q-Learning',
    index: 7,
    website: 'http://torch.ch/blog/2016/04/30/dueling_dqn.html',
  },
  {
    tite: 'Actor-Critic',
    index: 8,
    website: 'https://medium.freecodecamp.org/',
  },
  {
    title: 'Neural Translator Attention',
    index: 9,
    website: 'https://guillaumegenthial.github.io/sequence-to-sequence.html',
  },
  {
    title: 'Solar System',
    index: 10,
    website: 'https://pngtree.com/so/solar-system',
  },
];

export {
  projects,
  supervised,
  unsupervised,
  reinforcement,
  publications,
  attributes,
};
