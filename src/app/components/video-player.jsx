
"use client"
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'


const VideoPlayer = ({ videoUrl }) => {

    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    return (

        <div className='container-iframe'>
            {hasWindow && <ReactPlayer
                width="100%"
                height="100%"
                url={videoUrl}
            />}
        </div>
    );
};

export default VideoPlayer;