import { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';
('use client');
import { Modal, Button } from 'flowbite-react';

const instructions = [
  'Entre no menu lateral.',
  'Identifique-se e selecione o nível de dificuldade.',
  'Selecione, ainda, a velocidade do jogo. De 1 (menos veloz), para 3 (mais).',
  'Clique no botão começar.',
  'O jogo começará automaticamente, inclusive, a contagem de tempo. Fique atento!',
  'Serão mostradas sucessivas perguntas dentro de um painel.',
  'Todas elas possuem relação com algum dos oito planetas do Sistema Solar ou com o planeta-anão Plutão, sendo quaisquer deles a resposta.',
  'As perguntas são respondidas mediante seleção do planeta (clicar sobre o “card” correspondente em que constam nome e figura do planeta objeto da resposta) e depois clicar sobre o botão responder.',
  'Na mesma tela, aparece se você acertou ou errou.',
  'As perguntas possuem 03 graus de dificuldade.',
  'A pontuação corresponde ao somatório de cada acerto multiplicado pelo grau de dificuldade da questão, que pode variar entre 1 e 3.',
  'O jogo termina após a barra de progresso preencher totalmente.',
  'Aparecerá um pequeno relatório com os resultados.',
  'Divirta-se!',
];

function HowPlay() {
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShow(true);
  };
  return (
    <>
      {!show && (
        <a
          href="#"
          className="inline-flex items-center justify-center p-5 text-base font-medium self-end text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white fancy-pointer"
          onClick={handleClick}
        >
          <FaQuestion size={30} />
          <span className="w-full ml-6">Saiba como jogar</span>
          <svg
            aria-hidden="true"
            className="w-6 h-6 ml-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      )}
      {show && (
        <>
          <Modal show={show} onClose={() => setShow(false)}>
            <Modal.Header>Como jogar</Modal.Header>
            <Modal.Body className="bg-black">
              <div className="space-y-6 bg-black">
                {instructions.map((instruction, index) => (
                  <p
                    key={index}
                    className="text-base leading-relaxed text-gray-400 dark:text-gray-400 "
                  >
                    {instruction}
                  </p>
                ))}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                color="gray"
                onClick={() => setShow(false)}
                className="fancy-pointer"
              >
                Fechar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
}

export default HowPlay;
