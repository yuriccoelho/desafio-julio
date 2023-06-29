import React, { useState } from "react";

const QuizForm = () => {
  const initialQuizData = [
    {
      question:
        "Os testes rigorosos são essenciais para o Desenvolvimento da IA?",
      option1: "Verdadeiro",
      option2: "Falso",
      correct: "option1",
      correctMessage: "Parabéns, você acertou!",
      incorrectMessage:
        "Na verdade, Testes rigorosos são essenciais para garantir que o desenvolvimento da IA esteja alinhado com os melhores interesses da humanidade e para manter o controle sobre a IA enquanto ela progride."
    },
    {
      question: "Há preocupações em relação a capacidade da IA generativa?",
      option1: "Verdadeiro",
      option2: "Falso",
      correct: "option1",
      correctMessage: "Acertou mais uma vez!",
      incorrectMessage:
        "Então, As preocupações em relação às capacidades da IA generativa estão relacionadas à possibilidade de alcançar inteligência semelhante à humana e aos desafios de eliminar preconceitos indesejados, melhorar os recursos de conversação e garantir a segurança e o alinhamento com os objetivos humanos."
    },
    {
      question: "A IA pode se tornar especialista em vários campos?",
      option1: "Verdadeiro",
      option2: "Falso",
      correct: "option1",
      correctMessage: "Olha só, você não para em?",
      incorrectMessage:
        "No caso, A IA generativa tem o potencial de se tornar especialista em vários campos, combinando habilidades em uma única entidade. Isso é possível devido ao processo de treinamento iterativo por meio de testes, permitindo que a IA aprenda e progrida desde que haja disponibilidade de testes."
    },
    {
      question:
        "Há apenas benefícios em potencial quando se trata de IA em Testes!",
      option1: "Verdadeiro",
      option2: "Falso",
      correct: "option2",
      correctMessage: "Mais uma e dá pra pedir música em?",
      incorrectMessage:
        "A IA oferece vantagens consideráveis em termos de custo e eficiência nos testes, mas há de se tomar cuidado com a veracidade todas as informações presentes."
    },
    {
      question: "Os testadores de Software estão condenados pela IA?",
      option1: "Verdadeiro",
      option2: "Falso",
      correct: "option2",
      correctMessage: "É isso, você é demais!",
      incorrectMessage:
        "Veja bem, Os testadores de software precisam se levantar para o desafio de testar com a escala de velocidade e inteligência da IA, ajudando a testar os sistemas de IA e desenvolvendo sistemas de teste baseados em IA para acompanhar a evolução da IA generativa."
    }
    // Add more questions as needed...
  ];

  const [quizData, setQuizData] = useState(initialQuizData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerSelection = (selectedOption: string) => {
    setAnswerSelected(true);
    if (quizData[currentQuestionIndex].correct === selectedOption) {
      setCorrectAnswers(correctAnswers + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const goToNextQuestion = () => {
    setAnswerSelected(false);
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setQuizData(initialQuizData);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setShowResults(false);
    setShowQuiz(false);
    setAnswerSelected(false);
    setIsCorrect(false);
  };

  const percentageScore = Math.round((correctAnswers / quizData.length) * 100);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {!showQuiz ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          <h1>Mentoria Julio de Lima</h1>
          <h2>Desafio 1 - Grupo 13</h2>
          <p>
            Vivemos em um mundo em que a tecnologia não para de crescer e
            recentemente o tópico que vem ganhando mais e mais destaque é a
            Inteligência Artificial (IA).<br></br> Baseado na discussão e no
            artigo de Jason Arbon -{" "}
            <a href="https://www.linkedin.com/pulse/ai-needs-testing-jason-arbon/?trackingId=azISdlSQRBe3KO3sZwyP2A%3D%3D">
              Ai Needs Testing
            </a>{" "}
            criamos esse quiz, espero que curtam!
          </p>
          <button onClick={() => setShowQuiz(true)}>Start Quiz</button>
        </div>
      ) : !showResults ? (
        !answerSelected ? (
          <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  }}
>
  <p>{quizData[currentQuestionIndex].question}</p>
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      width: "45%"
    }}
  >
    <button onClick={() => handleAnswerSelection("option1")}>
      {quizData[currentQuestionIndex].option1}
    </button>
    <button onClick={() => handleAnswerSelection("option2")}>
      {quizData[currentQuestionIndex].option2}
    </button>
  </div>
</div>
        ) : (
          <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          {isCorrect ? (
            <p style={{ maxWidth: '45%', wordWrap: 'break-word' }}>{quizData[currentQuestionIndex].correctMessage}</p>
          ) : (
            <p style={{ maxWidth: '45%', wordWrap: 'break-word' }}>{quizData[currentQuestionIndex].incorrectMessage}</p>
          )}
          <button onClick={goToNextQuestion}>Próxima pergunta</button>
        </div>
        )
      ) : (
        <div>
          <p>Sua pontuação: {percentageScore}%</p>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default QuizForm;
