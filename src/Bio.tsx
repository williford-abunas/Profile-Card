import styles from './Bio.module.css';
import profileImage from './assets/1692676662252.jpg';
import Skills from './Skills';

function Bio() {
  const skills = [
    {
      skill: 'HTML+CSS',
      level: 'advanced',
      color: '#2662EA',
    },
    {
      skill: 'JavaScript',
      level: 'advanced',
      color: '#EFD81D',
    },
    {
      skill: 'Web Design',
      level: 'advanced',
      color: '#C3DCAF',
    },
    {
      skill: 'Git and GitHub',
      level: 'intermediate',
      color: '#E84F33',
    },
    {
      skill: 'React',
      level: 'advanced',
      color: '#60DAFB',
    },
    {
      skill: 'Svelte',
      level: 'beginner',
      color: '#FF3B00',
    },
  ];

  return (
    <div className={styles['card']}>
      <img className={styles['profileImage']} src={profileImage} alt="profile" />
      <h1 className={styles['title']}>Williford Abunas</h1>
      <h3 className={styles['description']}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis suscipit repellat vero quod cumque beatae
        rerum autem, vel facere. Blanditiis, tempore! Rerum sequi laudantium consequatur quis dolores quia iste eveniet.
      </h3>
      <ul className={styles['skillsContainer']}>
        {skills && skills.map((skill, index) => <Skills key={index} skillObj={skill} />)}
      </ul>
    </div>
  );
}

export default Bio;
