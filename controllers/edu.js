const edu = (req, res) => {
  let eduResults = [
    {name: 'Математика', type: 'Экзамен', result: 'Удовлетворительно'},
    {name: 'Физика', type: 'Экзамен', result: 'Хорошо'},
    {name: 'Русский Язык', type: 'Экзамен', result: 'Отлично'},
    {name: 'Право', type: 'Зачет', result: 'Зачтено'}
  ]
  return eduResults;
}

module.exports = edu;
