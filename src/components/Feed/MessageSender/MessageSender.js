import React, { useState } from 'react';
import './MessageSender.css'
//import firebase from 'firebase'

// icons
import { Avatar } from '@material-ui/core'
import { Videocam, PhotoLibrary, InsertEmoticon} from '@material-ui/icons'

// context api
import { useStateValue } from '../../../state/Provider'

// database
//import db from '../../../firebase'

const MessageSender = () => {
   
    return (
        <div className="messageSender">
            <div className="messageSenderTop">
                <Avatar src='' />
                <form>
                    <input 
                        value='' 
                        onChange=''
                        className="messageSenderInput" 
                        placeholder={`What's on your mind,`} 
                    />
                    <input
                        value=''
                        onChange=''
                        placeholder={"Image URL (Optional)"} />
                    <button onClick='' type="submit">Hidden submit</button>
                </form>
            </div>

            <div className="messageSenderBottom">
                <div className="messageSenderOption">
                    <Videocam style={{color: 'red'}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSenderOption">
                    <PhotoLibrary style={{color: 'green'}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSenderOption">
                    <InsertEmoticon style={{color: 'orange'}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;
