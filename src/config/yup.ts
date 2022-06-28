import * as Yup from 'yup'

const locale = {
  mixed: {
    required: 'Este campo é obrigatório'
  }
}

Yup.setLocale(locale)

export default Yup
