import React, { Component } from 'react';
import './Stories.css';


const stories = [
    {
        id: 1,
        name: 'Husniddin',
        avatar: 'https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png'
    },
    {
        id: 2,
        name: 'Husniddin',
        avatar: 'https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png'
    },
    {
        id: 3,
        name: 'Husniddin',
        avatar: 'https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png'
    },
    {
        id: 4,
        name: 'Husniddin',
        avatar: 'https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png'
    }
];
function Stories({ darkTheme }) {
    return (
        <div className={`${darkTheme === "light" ? "bg-success" : "bg-dark"} m-0 d-flex flex-row overflow-auto p-2`}>
            {
                    stories.map(story => {
                        return (
                            <div key={story.id} className={`${darkTheme === "light" ? "bg-success" : "bg-dark"} text-center w-25 m-1`}>
                                <img
                                    src={story.avatar}
                                    alt="Profil"
                                    className="rounded-circle img-fluid shadow border border-4 border-success-subtle p-1"
                                    width="60"
                                    height="60"
                                ></img>
                                <span className="mt-1 small text-light">{story.name}</span>
                            </div>
                        )
                    }
                    )
                }
            </div>
        )
    
}
export default Stories;