'use client';

import React from 'react'
import styles from './TeacherCard.module.css'
import Image from "next/image";

interface TeacherCardProps {
    name: string;
    subject: string;
    imgSrc: string;
}


const TeacherCard: React.FC<TeacherCardProps> = ({ name, subject, imgSrc }) => {
    return (
        
        <div className={styles.card}>
            <h3>Teacher: {name}</h3>
            <p>Subject: {subject}</p>
            <Image src={imgSrc} alt={''} width={100} height={100} />
            <button className={styles.button}>Book a Class</button>
        </div>
        
    );
};

export default TeacherCard
