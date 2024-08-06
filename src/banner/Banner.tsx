import { useState, useEffect } from "react";
import './Banner.css'

export default function Banner() {
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [index, setIndex] = useState(0)
    const [pace, setPace] = useState(200)
    const waitingPeriod = 2000
    const typingPeriod = 200
    const deletingPeriod = 70
    const texts = [
        "React developer",
        "Python developer",
        "Ruby on Rails developer",
        "computer vision developer",
        "funny stuff developer"
    ]

    useEffect(() => {
        const writer = setInterval(() => {
          write();
        }, pace);
    
        return () => { clearInterval(writer) };
    }, [text])

    const write = () => {
        const fullText = texts[index];
        const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setPace(waitingPeriod)
        }
        else if (isDeleting && updatedText.length === (fullText.length - 1)) {
            setPace(deletingPeriod)
        }
        else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setIndex((index+1) % texts.length);
          setPace(typingPeriod)
        }
      }

    
    return (
        <div className="banner">
            <h1 className="greeting">Hi, I'm Lucas Castello</h1>
            <h2 className="presentation">I'm a {text}</h2>
        </div>
    )
}