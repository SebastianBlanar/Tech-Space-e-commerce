import { useState,useEffect } from "react"
export const TypeWriterComponent = () => {

    function chooseNextWord(array,prevValue) {
        const prevIndex = array.indexOf(prevValue)
        const nextIndex = prevIndex + 1 > array.length - 1 ? 0 : prevIndex + 1
        return array[nextIndex]
    }

    const options = ['Explora', 'Descubre', 'Compra en']
    const [text, setText] = useState('')
    const [fullText,setFullText] = useState(options[0])
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting && text.length < fullText.length) {
                let nextChar = fullText[text.length]
                setText(text + nextChar)
            } 
            else if (isDeleting && text.length > 0) {
                setText(text.slice(0,-1))
            } 
            else if (text.length === fullText.length) {
                setIsDeleting(true)
                setFullText(chooseNextWord(options,fullText))
            } 
            else if (text.length === 0) {
                setIsDeleting(false)
            }
        }, isDeleting ? 80 : 150) 

        return () => clearTimeout(timeout)
    }, [ text, isDeleting,fullText])

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl sm:text-6xl font-bold mb-4 text-white">
                {text}
                <span className="animate-blink">|</span>
            </h2>
            <p className="text-4xl sm:text-6xl font-bold text-white h-[1.5em]">Tech Space</p>
        </div>
    )
}