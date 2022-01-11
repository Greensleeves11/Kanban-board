export default CardFactory = {
  create(body, importance) {
    return new Card(body, importance);
  },
};
