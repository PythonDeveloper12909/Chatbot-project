import { useState } from 'react';
import robo from './assets/robo.jpeg'
import person from './assets/person.jpeg'
function Chatbot() {
    const [messages, setMessages] = useState([])
    const [questions, setQuestions] = useState([])
    const [empt, setEmpt] = useState(null)
    const updatemessage = () => {
        let val = document.getElementById('inp').value
        setMessages(prevMessages => [...prevMessages, val])
        document.getElementById('inp').value = ''
        setEmpt(null)
        if (val.trim().toLowerCase()
            === 'roll a dice' || val.trim().toLowerCase()
            === 'roll a dice bro' || val.trim().toLowerCase()
            === 'roll a dice please') {
            setQuestions(prevQuestions => [...prevQuestions, `OK sure.You got ${Math.floor(Math.random() * 6) + 1} on dice`])
        }
        else if (val.trim().toLowerCase() === 'what can you do?' || val.trim().toLowerCase() === 'how can i chat with you?') {
            setQuestions(prevQuestions => [...prevQuestions, `I can do three things:
                1.Roll a dice         
                2.Generate a random number between 1-100
                3.Say hello to you`])
        }
        else if (val.trim().toLowerCase() === 'generate a random number between 1 and 100' || val.trim().toLowerCase() === 'generate a random number between 1-100') {
            setQuestions(prevQuestions => [...prevQuestions, `OK sure.You got ${Math.floor(Math.random() * 100) + 1}`])
        }
        else if (val.trim().toLowerCase() === 'say hello' || val.trim().toLowerCase() === 'say hello to me') {
            setQuestions(prevQuestions => [...prevQuestions, 'Hello,How are you...I hope you are doing great!..Have a nice day ahead!'])
        }
        else {
            setQuestions(prevQuestions => [...prevQuestions, 'Ohh sorry,I could not get that'])
        }
    }
    return (
        <>
            <div className='big_box'>
                {messages.map((m, index) => (
                    <>
                        <div className='container' key={`user-${index}`}>
                            <p className='text' >{m}</p>
                            <img src={person} alt="img1" className='person' />
                        </div>
                        {questions[index] && (
                            <div className='container_robo' key={`robot-${index}`}>
                                <img src={robo} alt="img2" className='robo' />
                                <p className='text' >{questions[index]}</p>
                            </div>
                        )}
                    </>
                ))}

                < div className='empty'></div>
            </div >
            <div className='chat-container'>
                <input type="text" placeholder='Chat with the bot...' className='message' id='inp' onChange={(e) => {
                    setEmpt(e.target.value)

                }} />
                {empt === null ? <button className='butt' disabled>Send</button> : <button className='butt' onClick={updatemessage}>Send</button>}
            </div>
        </>
    )
}
export default Chatbot