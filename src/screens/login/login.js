import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Button from '../../components/atoms/button/button';
import {useDispatch} from 'react-redux';
import Input from '../../components/atoms/input/Input';
import {Formik} from 'formik';
import * as yup from 'yup';
import styles from './login.style';
import style from '../../components/atoms/loading/loading.style';
import {useAppSelector} from '../../redux/slices/store';
import Loading from '../../components/atoms/loading/loading';
import {colorActivityIndicator} from '../../assets/colors/globalcolor.style';
import {loginuser} from '../../redux/slices/loginSlice';
import {email} from '../../assets/validation/validation';


const validationSchema = yup.object().shape({
  email: yup.string().required(email),
  password: yup.string().required().label('Password'),
});

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const dispatch = useDispatch();
  const {error, loading} = useAppSelector(state => state.login);

  const loginHandler = async (data) => {
    dispatch(loginuser(data));
  };
  if (loading) {
    return (
      <View style={style.loadingLogin}>
        <Loading size="large" color={colorActivityIndicator} />
      </View>
    );
  }
  return (
    <View style={styles.container}>

      <Formik
        validateOnMount
        initialValues={initialValues}
        onSubmit={loginHandler}
        validationSchema={validationSchema}>
        {({
          handleChange,
          values,
          handleSubmit,
          errors,
          setFieldTouched,
          touched,
          isValid,
        }) => (
          <>
            
            <View style={styles.input}>
              <Input
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                placeholder="Enter your email"
                autoCapitalize="words"
                keyboardAppearance="dark"
                returnKeyType="next"
                returnKeyLabel="next"
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors?.email}</Text>
              )}
            </View>
            <View style={styles.input}>
              <Input
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                placeholder="Enter your password"
                autoCapitalize="none"
                keyboardAppearance="dark"
                returnKeyType="go"
                returnKeyLabel="go"
              />
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors?.password}</Text>
              )}
            </View>
            {error !== '' && (
              <Text style={styles.error}>{'InvalidPass/Email'}</Text>
            )}
            <Button
              label={('Login')}
              onPress={handleSubmit}
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
    </View>
  );
};
export default Login;
