
import TeacherCard from "./components/TeacherCard";
import styles from './components/TeacherCard.module.css'

export default function Home() {
  
  const teachers = [
    { id: 1, name: 'Sara Mahmud', subject: 'OOP- Object Oriented Programming', imgSrc: '/images/teacher1.jpg' },
    { id: 2, name: 'Robert Drowney', subject: 'Data Structure and Database', imgSrc: '/images/teacher2.jpg' },
    { id: 3, name: 'Iron Man', subject: 'SuperHeroes and Power', imgSrc: '/images/teacher3.jpg' },
    { id: 4, name: 'Tom Cruise', subject: 'Animation Movie', imgSrc: '/images/teacher4.jpg' },
];
  
return (
  <div className={styles.container}>
      <h1>A Web Application </h1>
      <h2> Students book classes with teacher</h2>
      <div className={styles.cardContainer}>
          {teachers.map((teacher) => (
              <TeacherCard
                  key={teacher.id}
                  name={teacher.name}
                  subject={teacher.subject}
                  imgSrc={teacher.imgSrc}
              />
          ))}
      </div>
  </div>
);
}

