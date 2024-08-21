import React from 'react';
import { NavLink } from 'react-router-dom';

export default function About() {
    return (
        <div className='page-about'>
            <div className='About'>
                <h1 className='animition-left'> ABOUT ME </h1>
                <div className='about-avarta'>
                    <img
                        src='/images/Avarta.jfif'
                        alt=''
                        className='animition-top'
                    />
                    <p className='animition-right'>
                        Hello! I'm{' '}
                        <span className='text-highlight'>
                            {' '}
                            Quoc Viet Luong{' '}
                        </span>
                        , a passionate and dedicated frontend developer. I have
                        a strong foundation in{' '}
                        <span className='text-highlight'>
                            HTML, CSS, JavaScript
                        </span>{' '}
                        and <span className='text-highlight'> React</span> and I
                        specialize in building responsive and user-friendly web
                        applications.
                    </p>
                </div>
                <p className='animition-bottom'>
                    My journey into the world of web development started with a
                    genuine curiosity and has grown into a love for creating
                    beautiful and functional user interfaces. I enjoy the
                    process of turning ideas into reality and constantly strive
                    to enhance my skills in the ever-evolving field of frontend
                    development.
                </p>
                <div className='bnt-contact'>
                    <NavLink to={'/project'}>
                        <button className='project-btn animition-left'>
                            Project Me
                        </button>
                    </NavLink>
                    <NavLink to={'/contact'}>
                        <button className='contact-btn animition-right'>
                            Contact Me
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
