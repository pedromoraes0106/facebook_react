import React from 'react';
import './StoryReel.css'

// component
import Story from './Story/Story';

// images (profile)
import pessoa1 from '../../../img/story/1.jpg';
import pessoa2 from '../../../img/story/2.jpg';
import pessoa3 from '../../../img/story/3.jpg';
import pessoa4 from '../../../img/story/4.jfif';
import pessoa5 from '../../../img/story/5.jfif';

// images (story)
import story1 from '../../../img/story/storyImage/1.jpg'
import story2 from '../../../img/story/storyImage/2.jpg'
import story3 from '../../../img/story/storyImage/3.jpg'
import story4 from '../../../img/story/storyImage/4.jpg'
import story5 from '../../../img/story/storyImage/5.jpg'


const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story 
                image={story1}
                profileSrc={pessoa1}
                title="Juliana paes"
            />
            <Story 
                image={story2}
                profileSrc={pessoa2}
                title="Letícia Sabatella"
            />
            <Story 
                image={story3}
                profileSrc={pessoa3}
                title="Tony Ramos"
            />
            <Story 
                image={story4}
                profileSrc={pessoa4}
                title="Lilia Cabral"
            />
            <Story 
                image={story5}
                profileSrc={pessoa5}
                title="Larissa Manoela"
            />
        </div>
    )
}

export default StoryReel;
