const dashboard = async (req, res) => {
  res.send(req.user);
};
export { dashboard };
