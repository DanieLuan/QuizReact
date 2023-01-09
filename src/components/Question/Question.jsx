import { useContext } from "react";
import { quizContext } from "../../context/quiz";

import Option from "../Option/Option";

import "./Question.css";


const Question = () => {
    const [quizState, dispatch] = useContext(quizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    const onSelectOption = (option) => {
        console.log(option)
        dispatch({
            type: "CHECK_ANSWER",
            payload : {answer: currentQuestion.answer, option}
        });
    }

    return (
        <div id="question">
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                {currentQuestion.options.map((option) => (
                    <Option 
                        option = {option} 
                        key = {option} 
                        answer = {currentQuestion.answer}
                        selectOption = {() => onSelectOption(option)}
                    />
                ))}
            </div>
            {quizState.answerSelected && (
                <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
            )}
           
        </div>
  )
}

export default Question