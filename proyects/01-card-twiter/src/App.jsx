import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';
import Gallery from './components/gallery';
const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true,
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false,
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true,
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false,
  },
  {
    userName: 'andresyrg16',
    name: 'Andrés',
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className='App'>
      {/* {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))} */}
      <Gallery/>
    </section>
  );
}
