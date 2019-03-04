const projects = [{
    title: 'Quantum Gate Learning',
    description: 'Using evolutionary algorithms to learn quantum logic gates.',
    image: './images/bloch_sphere.png',
    link: 'https://github.com/Usefulmaths/MSci-Project-Quantum-Gate-Learning-Differential-Evolution'
}, {
    title: 'Protein Function Prediction',
    description: 'Predicting the function of proteins using deep learning.',
    image: './images/protein.png',
    link: 'https://github.com/Usefulmaths/MSc-Project-Protein-Function-Prediction'

}, {
    title: 'Neural Translator',
    description: 'English to Norwegian translator using LSTM with attention',
    image: './images/seq2seq_attention_mechanism_new.png',
    link: 'https://github.com/Usefulmaths/Neural-Translation-with-Attention'
}, {
    title: 'Neural Processes',
    description: 'Implementation of neural processes.',
    image: './images/gpfunc.png',
    link: 'https://github.com/Usefulmaths/Neural-Processes'
}, {
    title: 'Solar System',
    description: 'A simulation of the solar system using Newtonian physics.',
    image: './images/solarsystem.jpg',
    link: 'https://github.com/Usefulmaths/Solar-System-Environment'
}, {
    title: 'TicTacToe',
    description: 'Implementation of TicTacToe + AI opponent',
    image: './images/ttt.png',
    link: 'https://github.com/Usefulmaths/TicTacToe'
},];

const supervised = [{
    title: 'Linear Regression',
    description: 'Implementation of Linear Regression (Python)',
    image: './images/lr.png',
    link: 'https://github.com/Usefulmaths/Linear-Regression'
}, {
    title: 'Logistic Regression',
    description: 'Implementation of Logistic Regression (Python)',
    image: './images/logisticregression.png',
    link: 'https://github.com/Usefulmaths/Logistic-Regression'
}, {
    title: 'Decision Tree',
    description: 'Implementation of Decision Tree (Python)',
    image: './images/dt.png',
    link: 'https://github.com/Usefulmaths/Decision-Tree'
},
{
    title: 'Naïve Bayes',
    description: 'Implementation of Gaussian Naïve Bayes (Python)',
    image: './images/nb.png',
    link: 'https://github.com/Usefulmaths/Naive-Bayes'
},
{
    title: 'K-Nearest Neighbours',
    description: 'Implentation of K-Nearest Neighbours (Python)',
    image: './images/knn.png',
    link: 'https://github.com/Usefulmaths/K-Nearest-Neighbours',

}, {
    title: 'Actor-Critic',
    description: 'Implementation of TicTacToe + AI opponent',
    image: './images/actorcritic.png',
    link: '',
    opacity: 0
},]

const unsupervised = [{
    title: 'K-Means',
    description: 'Implementation of K-means (Python)',
    image: './images/kmeans.png',
    link: 'https://github.com/Usefulmaths/K-means'
}, {
    title: 'Gaussian Mixture Model',
    description: 'Implementation of Gaussian Mixture Model using EM (Python)',
    image: './images/gmm.png',
    link: 'https://github.com/Usefulmaths/Gaussian-Mixture-Model'
}, {
    title: 'Principal Component Analysis',
    description: 'Implementation of Principal Component Analysis (Python)',
    image: './images/pca.png',
    link: 'https://github.com/Usefulmaths/Principal-Component-Analysis'
},
{
    title: 'Autoencoder',
    description: 'Implementation of an Autoencoder (PyTorch)',
    image: './images/ae.png',
    link: 'https://github.com/Usefulmaths/Autoencoder'
},
{
    title: 'Variational Autoencoder',
    description: 'Implementation of a Variational Autoencoder (PyTorch)',
    image: './images/vae.png',
    link: 'https://github.com/Usefulmaths/Variational-Autoencoder'
},
{
    title: 'Generative Adversarial Network',
    description: 'Implementation of a Generative Adversarial Network (PyTorch)',
    image: './images/gan.png',
    link: 'https://github.com/Usefulmaths/Generative-Adversarial-Network'
}]

const reinforcement = [{
    title: 'Monte Carlo REINFORCE',
    description: 'Implementation of neural processes.',
    image: './images/pg.png',
    link: 'https://github.com/Usefulmaths/Monte-Carlo-Reinforce'
}, {
    title: 'Q-Learning',
    description: 'A simulation of the solar system using Newtonian physics.',
    image: './images/qlearning.png',
    link: 'https://github.com/Usefulmaths/Q-Learning'
}, {
    title: 'Actor-Critic',
    description: 'Implementation of TicTacToe + AI opponent',
    image: './images/actorcritic.png',
    link: 'https://github.com/Usefulmaths/Actor-Critic'
},
{
    title: 'Actor-Critic',
    description: 'Implementation of TicTacToe + AI opponent',
    image: './images/actorcritic.png',
    link: 'https://github.com/Usefulmaths/Actor-Critic',
    opacity: 0
},]

const publications = [{
    name: 'Quantum arithmetics via computation with minimized external control: The half-adder.',
    authors: 'Liam Eloie, Leonardo Banchi, and Sougato Bose',
    journal: 'Physical Review A'
},
]


export {
    projects,
    supervised,
    unsupervised,
    reinforcement,
    publications
}
