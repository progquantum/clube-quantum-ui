import { FormHandles, SubmitHandler } from '@unform/core';
import { useRef } from 'react';
import { Form } from '@unform/web';
import { FiMail, FiMessageSquare, FiPhone, FiUser } from 'react-icons/fi';

import { useSendMessage } from 'hooks/useSendMessage';
import { SendMessageRequest } from 'hooks/useSendMessage/types';
import { formatPhoneNumber } from 'utils/formatters/formatPhoneNumber';
import { success } from 'helpers/notify/success';
import { performSchemaValidation } from 'utils/performSchemaValidation';
import { Input } from 'components/Input';
import { AuthLayout } from 'layouts/Auth';
import { TextArea } from 'components/TextArea';
import { Button } from 'components/Button';

import { schema } from './schemas';
import * as S from './styles';

export function ContactUsPage() {
  const { mutate: sendMessage, isLoading } = useSendMessage();

  const formRef = useRef<FormHandles>(null);

  const handleSendMessage: SubmitHandler<SendMessageRequest> = data => {
    performSchemaValidation({
      formRef,
      data,
      schema,
    }).then(() => {
      const { email, message, name, phone } = data;
      const formattedPhone = `+55 ${phone}`;

      sendMessage(
        {
          email,
          message,
          name,
          phone: formattedPhone,
        },
        {
          onSuccess: () => {
            success('Mensagem enviada com sucesso');
            formRef.current.reset();
          },
        },
      );
    });
  };

  return (
    <AuthLayout
      title="Entre em contato conosco"
      backgroundImage="/images/forgot-password.png"
    >
      <S.Form
        as={Form}
        ref={formRef}
        onSubmit={handleSendMessage}
        className="form"
      >
        <Input
          type="text"
          name="name"
          placeholder="Nome completo"
          icon={FiUser}
        />
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          icon={FiMail}
          inputMode="email"
        />
        <Input
          type="text"
          name="phone"
          placeholder="Telefone"
          icon={FiPhone}
          onChange={e => {
            formRef.current.setFieldValue(
              'phone',
              formatPhoneNumber(e.target.value),
            );
          }}
          inputMode="tel"
        />
        <TextArea
          icon={FiMessageSquare}
          name="message"
          placeholder="Digite a sua mensagem"
          id="message"
        />
        <Button type="submit" disabled={isLoading} loading={isLoading}>
          Enviar
        </Button>
      </S.Form>
    </AuthLayout>
  );
}
