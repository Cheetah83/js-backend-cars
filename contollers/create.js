module.exports = {
  get(req, res) {
    res.render('create', { title: 'Create Listing' });
  },
  async post(req, res) {
    const car = {
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      diffculty: Number(req.body.diffculty),
    };
    await req.storage.createCube(car);

    res.redirect('/');
  }
}