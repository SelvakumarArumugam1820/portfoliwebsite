import React from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { profileData } from '../../data/profileData';
import styles from './SocialLinks.module.css';

const SocialLinks = ({ vertical = false }) => {
    return (
        <div className={`${styles.socialLinks} ${vertical ? styles.vertical : ''}`}>
            <a href={`mailto:${profileData.email}`} className={styles.socialItem} title="Email">
                <HiMail /> <span>{profileData.email}</span>
            </a>
            <a href={`tel:${profileData.phone}`} className={styles.socialItem} title="Phone">
                <HiPhone /> <span>{profileData.phone}</span>
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialItem} title="LinkedIn">
                <FaLinkedin /> <span>LinkedIn</span>
            </a>
            <div className={styles.socialItem}>
                <HiLocationMarker /> <span>{profileData.location}</span>
            </div>
        </div>
    );
};

export default SocialLinks;
