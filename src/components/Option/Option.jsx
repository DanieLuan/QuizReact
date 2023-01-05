import { useContext } from "react"
import { quizContext } from "../../context/quiz"

import "./Option.css";

export const Option = ({option , selectOption, answer}) => {
    const [quizState, dispatch] = useContext(quizContext);

    return (
        <div className="option" onClick={() => selectOption()}>
            <p>{option}</p>
        </div>
    )
}   

export default Option