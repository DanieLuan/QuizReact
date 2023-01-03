import { useContext } from "react";
import { quizContext } from "../../context/quiz";




const Question = () => {
    const [quizState, dispatch] = useContext(quizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    return (
        <div id="question">
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                <p>Opção</p>
            </div>
            <button>Continuar</button>
        </div>
  )
}

export default Question