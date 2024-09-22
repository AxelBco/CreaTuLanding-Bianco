import React from 'react';

const animes = [
  { id: 1, title: "Naruto", description: "Un ninja que busca reconocimiento y respeto." },
  { id: 2, title: "One Piece", description: "Sigue las aventuras de Monkey D. Luffy, un chico que sueña con ser el rey de los piratas, mientras navega por los mares en busca del tesoro legendario conocido como One Piece junto a su tripulación." },
  { id: 3, title: "Shingeki No Kyojin", description: "Trata sobre un mundo donde la humanidad lucha por sobrevivir contra gigantes devoradores de humanos, centrándose en Eren Yeager y sus amigos mientras buscan la verdad detrás de los titanes." },
  { id: 4, title: "My Hero Academia", description: "Sigue a Izuku Midoriya, un chico que sueña con ser un héroe en un mundo lleno de superpoderes, a pesar de no tener ninguno, y su camino para convertirse en el mejor."},
  { id: 5, title: "Hunter X Hunter", description: "Ws sobre un chico llamado Gon que quiere ser cazador para encontrar a su papá y vivir aventuras increíbles, enfrentándose a un montón de desafíos en el camino." },
];

const ItemListContainer = ({ message }) => {
  return (
    <div>
      <h2>{message}</h2>
      <ul>
        {animes.map(anime => (
          <li key={anime.id}>
            <h3>{anime.title}</h3>
            <p>{anime.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
