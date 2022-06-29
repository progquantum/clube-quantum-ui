/* eslint-disable no-template-curly-in-string */
import * as Yup from 'yup'

const locale = {
  mixed: {
    default: 'Campo inválido.',
    required: 'Campo obrigatório.',
    notType: 'Campo inválido',
    oneOf: 'Este campo não corresponde',
    max: 'Esse campo deve ser menor que ${max}.',
    min: 'Esse campo deve ser maior que ${min}.'
  },
  string: {
    email: 'Esse campo precisa ser um email válido.',
    max: 'Esse campo deve ser maior que ${min}.',
    min: 'Esse campo deve ser maior que ${min}.'
  },
  number: {
    max: 'Esse campo deve ser menor que ${max}.',
    min: 'Esse campo deve ser maior que ${min}.'
  }
}

Yup.setLocale(locale)

export default Yup
