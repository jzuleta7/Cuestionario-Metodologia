const quizData = [
    { question: "¿Qué es la metodología de la investigación?", answer: "Es el conjunto de procedimientos y técnicas que se aplican de manera ordenada y sistemática en la realización de un estudio." },
    { question: "¿Cuáles son los principales enfoques de la investigación?", answer: "Cuantitativo, cualitativo y mixto." },
    { question: "¿Qué caracteriza al enfoque cuantitativo?", answer: "El uso de la recolección de datos para probar hipótesis con base en la medición numérica y el análisis estadístico." },
    { question: "¿Qué caracteriza al enfoque cualitativo?", answer: "El uso de la recolección de datos sin medición numérica para descubrir o afinar preguntas de investigación en el proceso de interpretación." },
    { question: "¿Qué es el enfoque mixto?", answer: "La combinación de los enfoques cuantitativo y cualitativo en un mismo estudio." },
    { question: "¿Qué es una idea de investigación?", answer: "El punto de partida de toda investigación, que surge de diversas fuentes y debe ser estructurada." },
    { question: "¿Cuáles son las fuentes de ideas para una investigación?", answer: "Experiencias individuales, materiales escritos, teorías, conversaciones personales, observación de hechos, entre otros." },
    { question: "¿Qué es el planteamiento del problema de investigación?", answer: "La afinación y estructuración formal de la idea de investigación." },
    { question: "¿Cuáles son los elementos del planteamiento del problema en el enfoque cuantitativo?", answer: "Objetivos de investigación, preguntas de investigación, justificación de la investigación y viabilidad del estudio." },
    { question: "¿Qué son los objetivos de investigación?", answer: "Las guías del estudio, que deben ser claras y expresar lo que se pretende lograr." },
    { question: "¿Qué son las preguntas de investigación?", answer: "Preguntas que orientan hacia las respuestas que se buscan con la investigación." },
    { question: "¿Qué es la justificación de la investigación?", answer: "La exposición de las razones por las que se realiza el estudio y su importancia." },
    { question: "¿Qué es la viabilidad de la investigación?", answer: "La evaluación de la disponibilidad de recursos (financieros, humanos, materiales) para llevar a cabo el estudio." },
    { question: "¿Qué es el marco teórico?", answer: "La sustentación teórica del estudio, que implica la revisión de la literatura correspondiente." },
    { question: "¿Cuáles son las funciones del marco teórico?", answer: "Ayuda a prevenir errores, orienta sobre cómo realizar el estudio, amplía el horizonte del estudio, y provee un marco de referencia para interpretar los resultados." },
    { question: "¿Qué es una hipótesis de investigación?", answer: "Una proposición tentativa sobre las relaciones entre dos o más variables." },
    { question: "¿Qué son las variables en una hipótesis?", answer: "Propiedades que tienen una variación que puede ser medida u observada." },
    { question: "¿Qué tipos de hipótesis existen?", answer: "De investigación, nulas, alternativas y estadísticas." },
    { question: "¿Qué es el diseño de investigación?", answer: "El plan o estrategia concebida para obtener la información que se desea." },
    { question: "¿Qué tipos de diseños de investigación existen en el enfoque cuantitativo?", answer: "Experimentales y no experimentales." },
    { question: "¿Qué son los diseños experimentales?", answer: "Aquellos en los que se manipulan intencionalmente una o más variables independientes para analizar las consecuencias sobre una o más variables dependientes." },
    { question: "¿Qué son los diseños no experimentales?", answer: "Aquellos en los que se observa el fenómeno tal como se da en su contexto natural para después analizarlo." },
    { question: "¿Qué es la muestra en una investigación?", answer: "Un subgrupo de la población del cual se recolectan los datos y que debe ser representativo de dicha población." },
    { question: "¿Qué tipos de muestra existen?", answer: "Probabilísticas y no probabilísticas." },
    { question: "¿Qué es una muestra probabilística?", answer: "Un subgrupo de la población en el que todos los elementos de esta tienen la misma posibilidad de ser elegidos." },
    { question: "¿Qué es una muestra no probabilística?", answer: "Un subgrupo de la población en la que la elección de los elementos no depende de la probabilidad, sino de las características de la investigación." },
    { question: "¿Qué es la recoleión de datos?", answer: "El proceso de vincular conceptos abstractos con indicadores empíricos." },
    { question: "¿Qué instrumentos de medición se utilizan en la recolección de datos cuantitativos?", answer: "Cuestionarios, escalas de actitudes, observación, análisis de contenido, entre otros." },
    { question: "¿Qué es un cuestionario?", answer: "Un conjunto de preguntas respecto de una o más variables a medir." },
    { question: "¿Qué tipos de preguntas puede contener un cuestionario?", answer: "Preguntas cerradas y preguntas abiertas." },
    { question: "¿Qué es la validez de un instrumento de medición?", answer: "El grado en que un instrumento realmente mide la variable que pretende medir." },
    { question: "¿Qué es la confiabilidad de un instrumento de medición?", answer: "El grado en que un instrumento produce resultados consistentes y coherentes." },
    { question: "¿Qué es el análisis de datos cuantitativos?", answer: "El proceso mediante el cual se ordenan, clasifican y presentan los resultados de la aplicación de un instrumento de medición." },
    { question: "¿Qué es la estadística descriptiva?", answer: "El conjunto de métodos para organizar, resumir y presentar los datos de manera informativa." },
    { question: "¿Qué es la estadística inferencial?", answer: "El conjunto de métodos utilizados para saber algo acerca de una población, basándose en una muestra." },
    { question: "¿Qué es una distribución de frecuencias?", answer: "Un conjunto de puntuaciones ordenadas en sus respectivas categorías." },
    { question: "¿Cuáles son las medidas de tendencia central?", answer: "Moda, mediana y media." },
    { question: "¿Cuáles son las medidas de la variabilidad?", answer: "Rango, desviación estándar y varianza." },
    { question: "¿Qué es el reporte de resultados?", answer: "El documento en el que se presentan los resultados del estudio." },
    { question: "¿Cuáles son los apartados de un reporte de investigación en un contexto académico?", answer: "Portada, índices, resumen, cuerpo del documento (introducción, marco teórico, método, resultados, discusión), referencias y apéndices." },
    { question: "¿Qué es el planteamiento del problema en la investigación cualitativa?", answer: "Una primera aproximación al problema que se irá afinando conforme avance el estudio." },
    { question: "¿Cómo es la muestra en la investigación cualitativa?", answer: "No es probabilística y se selecciona según las necesidades de la investigación." },
    { question: "¿Cómo se recolectan los datos en la investigación cualitativa?", answer: "A través de entrevistas, observación, análisis de documentos, grupos de enfoque, etc." },
    { question: "¿Cómo es el análisis de los datos en la investigación cualitativa?", answer: "Se basa en la interpretación y la búsqueda de significados." },
    { question: "¿Cómo es el reporte de resultados en la investigación cualitativa?", answer: "Es más flexible y puede incluir narraciones, fragmentos de textos, videos, etc." }
];

const quizContainer = document.getElementById('quiz-container');
const quizHeader = document.getElementById('quiz-header');
const quizBody = document.getElementById('quiz-body');
const quizFooter = document.getElementById('quiz-footer');
const resultsScreen = document.getElementById('results-screen');

const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const questionText = document.getElementById('question-text');
const answerButtonsContainer = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const scoreText = document.getElementById('score-text');
const resultsDetails = document.getElementById('results-details');

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let shuffledQuiz = [];
let attemptsThisQuestion = 0;
const MAX_ATTEMPTS_PER_QUESTION = 2;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    shuffledQuiz = shuffleArray([...quizData]);
    
    displayQuestion();

    resultsScreen.classList.add('hidden');
    quizHeader.classList.remove('hidden');
    quizBody.classList.remove('hidden');
    quizFooter.classList.remove('hidden');
    
    const existingMessage = document.getElementById('restart-message');
    if (existingMessage) {
        existingMessage.remove();
    }
}

function displayQuestion() {
    answerButtonsContainer.innerHTML = '';
    attemptsThisQuestion = 0; 
    
    const currentQuestion = shuffledQuiz[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    const progressPercentage = ((currentQuestionIndex) / shuffledQuiz.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${shuffledQuiz.length}`;

    const answerOptions = generateAnswerOptions(currentQuestion.answer);
    answerOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.classList.add('answer-btn', 'w-full', 'p-4', 'border-2', 'border-slate-300', 'rounded-lg', 'text-left', 'hover:bg-blue-100', 'hover:border-blue-400', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-400');
        button.disabled = false;
        button.addEventListener('click', () => selectAnswer(button, option.isCorrect, option.text));
        answerButtonsContainer.appendChild(button);
    });

    nextBtn.disabled = true;
}

function generateAnswerOptions(correctAnswer) {
    const allAnswers = quizData.map(q => q.answer);
    let distractors = [];
    while (distractors.length < 3) {
        const randomIndex = Math.floor(Math.random() * allAnswers.length);
        const randomAnswer = allAnswers[randomIndex];
        if (randomAnswer !== correctAnswer && !distractors.includes(randomAnswer)) {
            distractors.push(randomAnswer);
        }
    }
    const options = [
        { text: correctAnswer, isCorrect: true },
        ...distractors.map(d => ({ text: d, isCorrect: false }))
    ];
    return shuffleArray(options);
}

function selectAnswer(selectedButton, isCorrect, selectedText) {
    if (!nextBtn.disabled) return;

    if (isCorrect) {
        selectedButton.classList.add('correct');
        Array.from(answerButtonsContainer.children).forEach(btn => {
            btn.disabled = true;
            btn.classList.remove('hover:bg-blue-100', 'hover:border-blue-400');
            if (!btn.classList.contains('correct')) {
                 btn.classList.add('disabled-incorrect');
            }
        });

        userAnswers[currentQuestionIndex] = {
            question: shuffledQuiz[currentQuestionIndex].question,
            selected: selectedText,
            correctAnswer: shuffledQuiz[currentQuestionIndex].answer,
            isCorrect: true
        };
        nextBtn.disabled = false;
    } else { 
        attemptsThisQuestion++;
        selectedButton.classList.add('incorrect');
        selectedButton.disabled = true;
        selectedButton.classList.add('opacity-50', 'cursor-not-allowed');
        selectedButton.classList.remove('hover:bg-blue-100');

        if (attemptsThisQuestion >= MAX_ATTEMPTS_PER_QUESTION) {
            userAnswers[currentQuestionIndex] = { 
                question: shuffledQuiz[currentQuestionIndex].question,
                selected: selectedText,
                correctAnswer: shuffledQuiz[currentQuestionIndex].answer,
                isCorrect: false
            };
            Array.from(answerButtonsContainer.children).forEach(btn => {
                btn.disabled = true;
                btn.classList.remove('hover:bg-blue-100', 'hover:border-blue-400');
                 if (!btn.classList.contains('incorrect')) {
                    btn.classList.add('disabled-incorrect');
                }
            });
            showRestartMessageAndRestart();
        } else {
            nextBtn.disabled = true;
        }
    }
}

function showRestartMessageAndRestart() {
    const existingMsg = document.getElementById('restart-message');
    if (existingMsg) existingMsg.remove();

    const messageDiv = document.createElement('div');
    messageDiv.id = 'restart-message';
    messageDiv.textContent = 'Has fallado dos veces en esta pregunta. El cuestionario se reiniciará.';
    messageDiv.classList.add(
        'fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2',
        'bg-red-100', 'border', 'border-red-400', 'text-red-700', 'px-6', 'py-4',
        'rounded-xl', 'shadow-2xl', 'z-[100]', 'text-center', 'text-lg', 'font-medium'
    );
    document.body.appendChild(messageDiv);

    setTimeout(() => {
        if (document.getElementById('restart-message')) {
             document.getElementById('restart-message').remove();
        }
        startQuiz();
    }, 3000);
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuiz.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    score = 0;
    userAnswers.forEach(answer => {
        if (answer && answer.isCorrect) {
            score++;
        }
    });

    quizHeader.classList.add('hidden');
    quizBody.classList.add('hidden');
    quizFooter.classList.add('hidden');
    resultsScreen.classList.remove('hidden');

    scoreText.textContent = `${score}/${shuffledQuiz.length}`;
    resultsDetails.innerHTML = '';

    shuffledQuiz.forEach((questionData, index) => {
        const answer = userAnswers[index]; 
        const resultItem = document.createElement('div');
        resultItem.classList.add('p-4', 'rounded-lg', 'border');
        
        let questionHtml = `<p class="font-bold text-slate-800">${index + 1}. ${questionData.question}</p>`;

        if (answer) { 
            if (answer.isCorrect) {
                resultItem.style.backgroundColor = '#f0fdf4';
                resultItem.style.borderColor = '#22c55e';
                questionHtml += `
                    <p class="mt-2 text-sm text-green-700">
                        <span class="font-semibold">Tu respuesta:</span> ${answer.selected} (Correcto)
                    </p>`;
            } else {
                resultItem.style.backgroundColor = '#fef2f2';
                resultItem.style.borderColor = '#ef4444';
                questionHtml += `
                    <p class="mt-2 text-sm text-red-700">
                        <span class="font-semibold">Tu respuesta:</span> ${answer.selected} (Incorrecto)
                    </p>
                    <p class="mt-1 text-sm text-slate-600"><span class="font-semibold">Respuesta correcta:</span> ${questionData.answer}</p>`;
            }
        } else { 
            resultItem.style.backgroundColor = '#f8fafc';
            resultItem.style.borderColor = '#e2e8f0';
            questionHtml += `<p class="mt-2 text-sm text-slate-500">No se registró respuesta para esta pregunta.</p>`;
        }
        resultItem.innerHTML = questionHtml;
        resultsDetails.appendChild(resultItem);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

nextBtn.addEventListener('click', showNextQuestion);
restartBtn.addEventListener('click', startQuiz);

startQuiz();
