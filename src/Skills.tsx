import styles from './Skills.module.css';

interface skillProps {
  key: number;
  skillObj: {
    skill: string;
    level: string;
    color: string;
  };
}

function Skills({ key, skillObj }: skillProps) {
  return (
    <li className={styles['skillsContainer']} style={{ backgroundColor: skillObj.color }} key={key}>
      <p className={styles['skillName']}>
        {skillObj.skill}{' '}
        <span>
          {skillObj.level === 'beginner' && '💩'}
          {skillObj.level === 'intermediate' && '❤️'}
          {skillObj.level === 'advanced' && '👌'}
        </span>
      </p>
    </li>
  );
}

export default Skills;
