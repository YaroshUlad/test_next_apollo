import * as yup from 'yup';

export const minPasswordLength = 7;

export const signUpSchema = yup.object().shape({
  name: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().min(minPasswordLength, 'Too Short!').required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Required'),
});

export const logInSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().min(minPasswordLength, 'Too Short!').required('Required'),
});

