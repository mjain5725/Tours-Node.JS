const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) gettour data from the Collection
  const tours = await Tour.find();
  // 2) build template
  // 3) render template  using tour data in step 1

  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
  });
});

exports.getTour = (req, res) => {
  res.status(200).render('tour', {
    title: 'The Forest Hiker Tour',
  });
};
