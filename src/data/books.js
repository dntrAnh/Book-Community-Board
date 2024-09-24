let books = [
  { id: 1, title: 'My Brilliant Friend', author: 'Elena Ferante', rating: '⭐️⭐️⭐️⭐️⭐️', image: 'https://m.media-amazon.com/images/I/81p2bM1JNcL._AC_UF1000,1000_QL80_.jpg' },
  { id: 2, title: 'Ghost Wall', author: 'Sarah Moss', rating: '⭐️⭐️⭐️⭐️⭐️', image: 'https://m.media-amazon.com/images/I/818GXmnLmiL._AC_UF1000,1000_QL80_.jpg' },
  { id: 3, title: 'The Night Circus', author: 'Erin Morgenstern', rating: '⭐️⭐️⭐️⭐️', image: 'https://m.media-amazon.com/images/I/71+whvJjE3L._AC_UF1000,1000_QL80_.jpg' },
  { id: 4, title: 'The Vanishing Half', author: 'Brit Bennett', rating: '⭐️⭐️⭐️⭐️⭐️', image: 'https://m.media-amazon.com/images/I/71qWC2D6R7L._AC_UF1000,1000_QL80_.jpg' },
  { id: 5, title: 'Where the Crawdads Sing', author: 'Delia Owens', rating: '⭐️⭐️⭐️⭐️⭐️', image: 'https://m.media-amazon.com/images/I/81F0NTrPdCL._AC_UF1000,1000_QL80_.jpg' },
  { id: 6, title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', rating: '⭐️⭐️⭐️⭐️', image: 'https://prodimage.images-bn.com/pimages/9781501139246_p0_v9_s1200x630.jpg' },
];

let nextId = 7;

export const getBooks = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(books);
      }, 100);
  });
};

export const addBook = (book) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          books.push({ id: nextId++, ...book });
          resolve();
      }, 100);
  });
};

export const deleteBook = (id) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          books = books.filter((book) => book.id !== id);
          resolve();
      }, 100);
  });
};