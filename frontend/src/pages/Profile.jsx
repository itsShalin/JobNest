import './Profile.css';
import { useEffect, useState } from 'react';
import api from '../services/api';

function Profile() {
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [location, setLocation] = useState('');
    const [workStatus, setWorkStatus] = useState('');

    const [bio, setBio] = useState('');
    const [goals, setGoals] = useState('');

    const [skills, setSkills] = useState([]);
    const [skillInput, setSkillInput] = useState('');

    const [achievements, setAchievements] = useState([]);
    const [achievementInput, setAchievementInput] = useState('');

    const [projects, setProjects] = useState([]);

    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectGithub, setProjectGithub] = useState('');

    const [education, setEducation] = useState({
        degree: '',
        university: '',
        year: '',
    });

    const [github, setGithub] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [workStatusOpen, setWorkStatusOpen] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await api.get('/users/profile');

                const data = response.data.user;

                setUser(data);

                setName(data.name || '');
                setEmail(data.email || '');

                setLocation(data.location || '');

                setWorkStatus(data.workStatus || 'Not Looking');

                setBio(data.bio || '');

                setGoals(data.goals || '');

                setSkills(data.skills || []);

                setAchievements(data.achievements || []);

                setProjects(data.projects || []);

                setEducation(
                    data.education || {
                        degree: '',
                        university: '',
                        year: '',
                    }
                );

                setGithub(data.github || '');

                setLinkedin(data.linkedin || '');

                setPortfolio(data.portfolio || '');
            } catch (error) {
                console.log(error);
            }
        };

        fetchProfile();
    }, []);

    const addSkill = () => {
        if (skillInput.trim()) {
            setSkills([...skills, skillInput.trim()]);

            setSkillInput('');
        }
    };

    const removeSkill = (skill) => {
        setSkills(skills.filter((item) => item !== skill));
    };

    const addAchievement = () => {
        if (achievementInput.trim()) {
            setAchievements([...achievements, achievementInput.trim()]);

            setAchievementInput('');
        }
    };

    const addProject = () => {
        if (projectTitle.trim()) {
            setProjects([
                ...projects,

                {
                    title: projectTitle,

                    description: projectDescription,

                    github: projectGithub,
                },
            ]);

            setProjectTitle('');

            setProjectDescription('');

            setProjectGithub('');
        }
    };

    const removeProject = (index) => {
        setProjects(projects.filter((_, i) => i !== index));
    };

    const handleUpdate = async () => {
        try {
            const response = await api.put('/users/profile', {
                name,
                email,

                location,

                workStatus,

                bio,

                goals,

                skills,

                achievements,

                projects,

                education,

                github,

                linkedin,

                portfolio,
            });

            setUser(response.data.user);

            alert('Profile updated successfully!');

            setIsEditing(false);
        } catch (error) {
            console.log(error);
        }
    };

    if (!user) {
        return (
            <div className="profile-page">
                <section className="profile-hero profile-loading">
                    <div className="profile-avatar skeleton-circle"></div>

                    <div className="skeleton-title"></div>

                    <div className="skeleton-subtitle"></div>

                    <div className="profile-info">
                        <div className="skeleton-pill"></div>

                        <div className="skeleton-pill"></div>

                        <div className="skeleton-pill"></div>
                    </div>

                    <div className="skeleton-button"></div>
                </section>

                <div className="profile-grid">
                    <div className="profile-card skeleton-card"></div>

                    <div className="profile-card skeleton-card"></div>

                    <div className="profile-card skeleton-card"></div>

                    <div className="profile-card skeleton-card"></div>
                </div>

                <section className="wide-card skeleton-wide"></section>
            </div>
        );
    }

    return (
        <div className="profile-page">
            <section className="profile-hero">
                <div className="profile-avatar">
                    {name
                        .split(' ')
                        .map((word) => word[0])
                        .join('')
                        .toUpperCase()}
                </div>

                <h1>{name}</h1>

                <h3 className="placeholder">✨ Add Professional Headline</h3>

                <div className="profile-info">
                    {isEditing ? (
                        <input
                            className="profile-input"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    ) : (
                        <span>📍 {location || 'Add location'}</span>
                    )}

                    <span>📧 {email}</span>

                    {isEditing ? (
                        <div className="work-dropdown">
                            <button
                                className="work-btn"
                                onClick={() =>
                                    setWorkStatusOpen(!workStatusOpen)
                                }
                            >
                                💼 {workStatus}
                                <span>⌄</span>
                            </button>

                            {workStatusOpen && (
                                <div className="work-menu">
                                    <button
                                        onClick={() => {
                                            setWorkStatus('Open to Work');
                                            setWorkStatusOpen(false);
                                        }}
                                    >
                                        Open to Work
                                    </button>

                                    <button
                                        onClick={() => {
                                            setWorkStatus(
                                                'Available for Opportunities'
                                            );
                                            setWorkStatusOpen(false);
                                        }}
                                    >
                                        Available for Opportunities
                                    </button>

                                    <button
                                        onClick={() => {
                                            setWorkStatus('Currently Working');
                                            setWorkStatusOpen(false);
                                        }}
                                    >
                                        Currently Working
                                    </button>

                                    <button
                                        onClick={() => {
                                            setWorkStatus('Not Looking');
                                            setWorkStatusOpen(false);
                                        }}
                                    >
                                        Not Looking
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <span>💼 {workStatus}</span>
                    )}
                </div>

                <button
                    className="update-btn"
                    onClick={() => {
                        if (isEditing) {
                            handleUpdate();
                        } else {
                            setIsEditing(true);
                        }
                    }}
                >
                    {isEditing ? '💾 Save Profile' : '✏ Edit Profile'}
                </button>
            </section>

            <div className="profile-grid">
                <div className="profile-card">
                    <h2>📝 About Me</h2>

                    {isEditing ? (
                        <textarea
                            className="profile-input"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    ) : (
                        <p>{bio || 'Tell employers about yourself'}</p>
                    )}
                </div>

                <div className="profile-card">
                    <h2>🎯 Career Goals</h2>

                    {isEditing ? (
                        <textarea
                            className="profile-input"
                            value={goals}
                            onChange={(e) => setGoals(e.target.value)}
                        />
                    ) : (
                        <p>{goals || 'Add your career goals'}</p>
                    )}
                </div>

                <div className="profile-card">
                    <h2>💻 Skills</h2>

                    {isEditing && (
                        <>
                            <input
                                className="profile-input"
                                placeholder="Add skill"
                                value={skillInput}
                                onChange={(e) => setSkillInput(e.target.value)}
                            />

                            <button
                                className="small-action-btn"
                                onClick={addSkill}
                            >
                                + Add Skill
                            </button>
                        </>
                    )}

                    <div className="skills">
                        {skills.length > 0 ? (
                            skills.map((skill, index) => (
                                <span className="skill-tag" key={index}>
                                    {skill}

                                    {isEditing && (
                                        <button
                                            onClick={() => removeSkill(skill)}
                                        >
                                            ❌
                                        </button>
                                    )}
                                </span>
                            ))
                        ) : (
                            <span className="placeholder">Add your skills</span>
                        )}
                    </div>
                </div>

                <div className="profile-card">
                    <h2>🏆 Achievements</h2>

                    {isEditing && (
                        <>
                            <input
                                className="profile-input"
                                placeholder="Add achievement"
                                value={achievementInput}
                                onChange={(e) =>
                                    setAchievementInput(e.target.value)
                                }
                            />

                            <button
                                className="small-action-btn"
                                onClick={addAchievement}
                            >
                                + Add Achievement
                            </button>
                        </>
                    )}

                    {achievements.map((item, index) => (
                        <p key={index}>🏆 {item}</p>
                    ))}
                </div>
            </div>

            <section className="wide-card">
                <h2>📂 Projects</h2>

                {isEditing && (
                    <>
                        <input
                            className="profile-input"
                            placeholder="Project Title"
                            value={projectTitle}
                            onChange={(e) => setProjectTitle(e.target.value)}
                        />

                        <textarea
                            className="profile-input"
                            placeholder="Project Description"
                            value={projectDescription}
                            onChange={(e) =>
                                setProjectDescription(e.target.value)
                            }
                        />

                        <input
                            className="profile-input"
                            placeholder="Github Link"
                            value={projectGithub}
                            onChange={(e) => setProjectGithub(e.target.value)}
                        />

                        <button
                            className="small-action-btn"
                            onClick={addProject}
                        >
                            + Add Project
                        </button>
                    </>
                )}

                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <h3>📂 {project.title}</h3>

                        <p>{project.description}</p>

                        {project.github && (
                            <a href={project.github}>Github Project</a>
                        )}

                        {isEditing && (
                            <button onClick={() => removeProject(index)}>
                                ❌ Remove
                            </button>
                        )}
                    </div>
                ))}
            </section>

            <div className="profile-grid">
                <div className="profile-card">
                    <h2>🎓 Education</h2>

                    {isEditing ? (
                        <>
                            <input
                                className="profile-input"
                                placeholder="Degree"
                                value={education.degree}
                                onChange={(e) =>
                                    setEducation({
                                        ...education,
                                        degree: e.target.value,
                                    })
                                }
                            />

                            <input
                                className="profile-input"
                                placeholder="University"
                                value={education.university}
                                onChange={(e) =>
                                    setEducation({
                                        ...education,
                                        university: e.target.value,
                                    })
                                }
                            />

                            <input
                                className="profile-input"
                                placeholder="Year"
                                value={education.year}
                                onChange={(e) =>
                                    setEducation({
                                        ...education,
                                        year: e.target.value,
                                    })
                                }
                            />
                        </>
                    ) : (
                        <p>
                            {education.degree}

                            <br />

                            {education.university}

                            <br />

                            {education.year}
                        </p>
                    )}
                </div>

                <div className="profile-card">
                    <div className="profile-card">
                        <h2>🌐 Social Links</h2>

                        {isEditing ? (
                            <>
                                <input
                                    className="profile-input"
                                    placeholder="GitHub"
                                    value={github}
                                    onChange={(e) => setGithub(e.target.value)}
                                />

                                <input
                                    className="profile-input"
                                    placeholder="LinkedIn"
                                    value={linkedin}
                                    onChange={(e) =>
                                        setLinkedin(e.target.value)
                                    }
                                />

                                <input
                                    className="profile-input"
                                    placeholder="Portfolio"
                                    value={portfolio}
                                    onChange={(e) =>
                                        setPortfolio(e.target.value)
                                    }
                                />
                            </>
                        ) : (
                            <div className="social-links">
                                {github && <a href={github}>🐙 GitHub</a>}
                                {linkedin && <a href={linkedin}>💼 LinkedIn</a>}
                                {portfolio && (
                                    <a href={portfolio}>🌐 Portfolio</a>
                                )}

                                {!github && !linkedin && !portfolio && (
                                    <p>Add your social links.</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
