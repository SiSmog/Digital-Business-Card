import React from 'react'
import mail from "../Icons/mail.png"
import download1 from "../Icons/download.png"
const Main = () => {
    return (
        <div className='main'>
            <h1>Majdi REKIK</h1>
            <h4>Computer Science Engineering Student</h4>
            <div className="buttcontainer">
                <a href='mailto:majdirekik60@gmail.com'>
                    <div className='button' id='mailbutton'>
                        <div>
                            <img src={mail} className='buttonicon' />
                        </div>
                        <div>
                            <span>Email</span>
                        </div>
                    </div>
                </a>
                <a href="/Files/Cv.pdf" download>
                    <div className='button' id='downloadbutton'>
                        <div>
                            <img src={download1} className='buttonicon' />
                        </div>
                        <div>
                            <span>CV</span>
                        </div>

                    </div>
                </a>

            </div>
            <div>
                <div>
                    <h2 className='title'>About</h2>
                    <p className='description'>
                        I am a frontend developer with a particular interest in making things simple and automating daily tasks.
                        I try to keep up with security and best practices, and am always looking for new things to learn.
                    </p>
                </div>
                <div>
                    <h2 className='title'>Interests</h2>
                    <p className='description'>
                        Meme lord. Video games enthusiast. Food expert. Music scholar. Reader. Internet fanatic. Travel geek. Coffee fanatic.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main