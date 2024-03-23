import styles from './Skills.module.css';

interface skillProps {
  skillName: string;
  skillEmoji: string;
  bgColor: string;
}

function Skills({ skillName, skillEmoji, bgColor }: skillProps) {
  return (
    <div className={styles['skillsContainer']} style={{ backgroundColor: bgColor }}>
      <p className={styles['skillName']}>
        {skillName} <span>{skillEmoji}</span>
      </p>
    </div>
  );
}

export default Skills;
