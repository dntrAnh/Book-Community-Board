let books = [
  { id: 1, title: 'My Brilliant Friend', author: 'Elena Ferante', rating: '⭐️⭐️⭐️⭐️⭐️', image: 'https://m.media-amazon.com/images/I/81p2bM1JNcL._AC_UF1000,1000_QL80_.jpg' },
  { id: 2, title: 'Ghost Wall', author: 'Sarah Moss', rating: '⭐️⭐️⭐️⭐️⭐️', image: 'https://m.media-amazon.com/images/I/818GXmnLmiL._AC_UF1000,1000_QL80_.jpg' },
  { id: 3, title: 'The Night Circus', author: 'Erin Morgenstern', rating: '⭐️⭐️⭐️⭐️', image: 'https://m.media-amazon.com/images/I/71+whvJjE3L._AC_UF1000,1000_QL80_.jpg' },
  { id: 4, title: 'The Vanishing Half', author: 'Brit Bennett', rating: '⭐️⭐️⭐️⭐️⭐️', image: 'https://m.media-amazon.com/images/I/71qWC2D6R7L._AC_UF1000,1000_QL80_.jpg' },
  { id: 5, title: 'Where the Crawdads Sing', author: 'Delia Owens', rating: '⭐️⭐️⭐️⭐️⭐️', image: 'https://m.media-amazon.com/images/I/81F0NTrPdCL._AC_UF1000,1000_QL80_.jpg' },
  { id: 6, title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', rating: '⭐️⭐️⭐️⭐️', image: 'https://prodimage.images-bn.com/pimages/9781501139246_p0_v9_s1200x630.jpg' },
  { id: 7, title: 'Daisy Jones & The Six', author: 'Taylor Jenkins Reid', rating: '⭐️⭐️⭐️⭐️⭐️', image: 'https://prodimage.images-bn.com/pimages/9781524798628_p0_v4_s1200x630.jpg' },
  { id: 8, title: 'The Song of Achilles', author: 'Madeline Miller', rating: '⭐️⭐️⭐️⭐️⭐️', image: 'https://m.media-amazon.com/images/I/81msb6gUBTL._AC_UF1000,1000_QL80_.jpg' },
  { id: 9, title: 'Circe', author: 'Madeline Miller', rating: '⭐️⭐️⭐️⭐️', image: 'https://m.media-amazon.com/images/I/91r0y3YEfGL._AC_UF1000,1000_QL80_.jpg' },
  { id: 10, title: 'Little Fires Everywhere', author: 'Celeste Ng', rating: '⭐️⭐️⭐️⭐️⭐️', image: 'https://m.media-amazon.com/images/I/81ccchV7FML._AC_UF1000,1000_QL80_.jpg' },
  { id: 11, title: 'Anxious People', author: 'Fredrik Backman', rating: '⭐️⭐️⭐️⭐️', image: 'https://m.media-amazon.com/images/I/810XLL7gvRL._AC_UF1000,1000_QL80_.jpg' }
];

let nextId = 12;

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