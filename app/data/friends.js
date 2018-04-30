var friends = [
  {
    name: 'Lola',
    photo: 'http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Golden-Retriever-2.jpg',
    scores: ['1', '3', '4', '2', '1', '2', '5', '4', '3', '2'],
  },
  {
    name: 'Max',
    photo: 'https://s3.amazonaws.com/imagesroot.rescuegroups.org/webpages/s135nzd9yxg8imd.jpg',
    scores: ['3', '1', '5', '3', '2', '1', '4', '3', '1', '5'],
  },
  {
    name: 'Vito',
    photo: 'https://www.wikihow.com/images/5/5f/User-Completed-Image-Train-a-Pitbull-Puppy-2017.05.22-03.00.06.0.jpg',
    scores: ['2', '3', '5', '3', '2', '1', '3', '5', '2', '1'],
  },
 
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
