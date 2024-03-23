import styles from './Bio.module.css';
import profileImage from './assets/1692676662252.jpg';
import Skills from './Skills';

function Bio() {
  return (
    <div className={styles['card']}>
      <img className={styles['profileImage']} src={profileImage} alt="profile" />
      <h1 className={styles['title']}>Williford Abunas</h1>
      <h3 className={styles['description']}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis suscipit repellat vero quod cumque beatae
        rerum autem, vel facere. Blanditiis, tempore! Rerum sequi laudantium consequatur quis dolores quia iste eveniet.
      </h3>
      <div className={styles['skillsContainer']}>
        <Skills skillName="Javascript" skillEmoji="😁" bgColor="red" />
        <Skills skillName="React" skillEmoji="👌" bgColor="blue" />
      </div>
    </div>
  );
}

export default Bio;
