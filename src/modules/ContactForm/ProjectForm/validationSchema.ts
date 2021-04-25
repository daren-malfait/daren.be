import * as yup from 'yup';

export default yup.object().shape({
  email: yup
    .string()
    .email('Je hebt geen geldig emailadres ingevuld.')
    .required('Ik heb je emailadres nodig om je te kunnen contacteren.'),
  name: yup.string().required('Hoe spreek ik je aan?'),
  message: yup.string().required('Over wat wil je praten?'),
});
