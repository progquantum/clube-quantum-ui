import Head from 'next/head';
import { useState } from 'react';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { BsHeadphones } from 'react-icons/bs';

import { ToolTipContact } from 'components/ToolTipContact';

import { Footer } from 'components/Footer';
import { HeaderAuth } from 'components/Header/HeaderAuth';

import { data } from '../questions';
import * as S from '../styles';

export function FrequentQuestionsAuthPage() {
  const [questions, setQuestions] = useState(data);

  const setIsShow = (id: number) => {
    const newQuestions = questions.map(obj => {
      if (obj.id === id) {
        return { ...obj, show: !obj.show };
      }
      return obj;
    });
    setQuestions(newQuestions);
  };

  return (
    <>
      <Head>
        <title>Perguntas Frequentes</title>
      </Head>
      <HeaderAuth />
      <S.Container>
        <ToolTipContact />
        <h1>Perguntas Frequentes</h1>
        <p>Está com dúvidas? Aqui é o lugar!</p>
        <S.QuestionContainer>
          {questions?.map(question => (
            <>
              <S.Question key={question.id}>
                <h3>{question.question}</h3>
                {question.show ? (
                  <MdKeyboardArrowUp
                    size={20}
                    onClick={() => setIsShow(question.id)}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    size={20}
                    onClick={() => setIsShow(question.id)}
                  />
                )}
              </S.Question>
              <S.Answer isShow={question.show}>{question.answer}</S.Answer>
            </>
          ))}
        </S.QuestionContainer>
        <S.Suport>
          <S.SuportTitle>
            <S.Chat>
              <BsHeadphones size={30} />
            </S.Chat>

            <div>
              <h2>Conseguimos te ajudar?</h2>
              <p>
                Não conseguiu achar a pergunta que estava procurando? Por favor
                entre em contato com o nosso time! :)
              </p>
            </div>
          </S.SuportTitle>
          <S.SuportButton>Suporte</S.SuportButton>
        </S.Suport>
      </S.Container>
      <Footer />
    </>
  );
}
