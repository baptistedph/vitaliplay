import * as yup from 'yup'

const TranquilitySchema = yup.object().shape({
  tranquilityScale: yup
    .string()
    .required('Veuillez renseigner un niveau de tranquilitÃ©.'),
})

export default TranquilitySchema
