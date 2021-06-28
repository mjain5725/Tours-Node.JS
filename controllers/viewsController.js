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

exports.getTour = catchAsync(async (req, res) => {
  // 1) Get the data and include reviews and guide for the requested tour
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  // 2) Build the template
  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour,
  });
});
