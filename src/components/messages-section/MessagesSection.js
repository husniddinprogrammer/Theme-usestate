import React, { Component } from 'react';
import './MessagesSection.css';


const messages = [
    {
        id: 1,
        name: 'Abhishek Bro',
        avatar: 'https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png',
        time: '3:20 pm',
        message: 'Ma dami 👌 caption ma post garchu'
    },
    {
        id: 2,
        name: 'Abhishek Bro',
        avatar: 'https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png',
        time: '3:20 pm',
        message: 'Ma dami 👌 caption ma post garchu'
    },
    {
        id: 3,
        name: 'Abhishek Bro',
        avatar: 'https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png',
        time: '3:20 pm',
        message: 'Ma dami 👌 caption ma post garchu'
    },
    {
        id: 4,
        name: 'Abhishek Bro',
        avatar: 'https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png',
        time: '3:20 pm',
        message: 'Ma dami 👌 caption ma post garchu'
    },
    {
        id: 5,
        name: 'Abhishek Bro',
        avatar: 'https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png',
        time: '3:20 pm',
        message: 'Ma dami 👌 caption ma post garchu'
    },
    {
        id: 6,
        name: 'Abhishek Bro',
        avatar: 'https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png',
        time: '3:20 pm',
        message: 'Ma dami 👌 caption ma post garchu'
    }
];

function MessagesSection ({darkTheme}) {
        return (
            <div>
                {
                    messages.map(msg => {
                        return (<div key={msg.id} className={`${darkTheme === "light" ? "bg-white" : "bg-dark"} d-flex align-items-center p-2 border-bottom`}>
                            <img
                                src={msg.avatar}    
                                alt="avatar"
                                className="rounded-circle me-3"
                                width="45"
                                height="45" 
                            />              

                            <div className="flex-grow-1">
                                <div className="d-flex justify-content-between">
                                    <h6 className={`${darkTheme === "light" ? "text-muted" : "text-light"} mb-0 fw-semibold`}>{msg.name}</h6>
                                    <small className={`${darkTheme === "light" ? "text-muted" : "text-light"}`}>{msg.time}</small>
                                </div>
                                <div className="d-flex align-items-center">
                                    <small className="text-success me-1">
                                        <i className='fas fa-check-double'></i>
                                    </small>
                                    <small className={`${darkTheme === "light" ? "text-muted" : "text-light"} text-truncate`}>
                                        {msg.message}
                                    </small>
                                </div>
                            </div>
                        </div>
                    )
                    })
                }
            </div>

        )
}
export default MessagesSection;