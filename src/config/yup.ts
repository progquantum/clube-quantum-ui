import * as Yup from 'yup'

const locale = {
  mixed: {
    required: 'Este campo é obrigatório',
    email: 'E-mail inválido'
  }
}

Yup.setLocale(locale)

export default Yup
