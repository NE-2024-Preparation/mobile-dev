import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { Formik } from "formik";
import { Text, View, TouchableOpacity } from "react-native";
import * as Yup from "yup";

import { Button } from "@/components/elements/button";
import { TextInput } from "@/components/elements/input";
import { AuthRegisterRequestPayload } from "@/types/auth";

const SignupScreen = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
  });

  const initialValues: AuthRegisterRequestPayload = {
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    password: ""
  };

  const handleSubmit = (data: AuthRegisterRequestPayload) => {
    console.log(data);
  };

  return (
    <View className='h-full mt-[160px] bg-white w-full rounded-t-[25px] flex items-center px-5 py-6'>
      <TouchableOpacity
        onPress={() => {
          router.push("/");
        }}
      >
        <Text className='text-4xl font-bold'>
          Supa
          <Text className='text-primary'>Menu</Text>
        </Text>
      </TouchableOpacity>

      <View className='flex flex-col items-center gap-2 py-5'>
        <Text className='font-bold text-secondary text-lg'>Create Account</Text>
      </View>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid
        }) => (
          <>
            <TextInput
              onChangeText={handleChange("firstName")}
              onBlur={handleBlur("firstName")}
              value={values.firstName}
              error={touched.firstName ? errors.firstName : ""}
              placeholder='First Name'
              icon={<FontAwesome name='user-o' size={18} color='#b1b6c8' />}
            />

            <TextInput
              onChangeText={handleChange("lastName")}
              onBlur={handleBlur("lastName")}
              value={values.lastName}
              error={touched.lastName ? errors.lastName : ""}
              placeholder='Last Name'
              icon={<FontAwesome name='user-o' size={18} color='#b1b6c8' />}
            />

            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              error={touched.email ? errors.email : ""}
              placeholder='Email'
              icon={
                <MaterialCommunityIcons
                  name='email-outline'
                  size={18}
                  color='#b1b6c8'
                />
              }
            />

            <TextInput
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              error={touched.username ? errors.username : ""}
              placeholder='Username'
              icon={<FontAwesome name='user-o' size={18} color='#b1b6c8' />}
            />

            <TextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              error={touched.password ? errors.password : ""}
              placeholder='Password'
              isSecret={true}
              icon={
                <MaterialIcons name='lock-outline' size={18} color='#b1b6c8' />
              }
            />

            <Button
              disabled={!isValid}
              title='Sign Up'
              onPress={() => handleSubmit()}
            />
          </>
        )}
      </Formik>

      <View className='flex flex-col items-center pt-5'>
        <Text className='text-third mt-2'>
          Already have an account?{" "}
          <Link href='/(auth)/login' className='text-primary font-bold'>
            Log In
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default SignupScreen;
