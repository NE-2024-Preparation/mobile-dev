import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { router } from "expo-router";
import { Formik } from "formik";
import { Text, View, TouchableOpacity } from "react-native";
import * as Yup from "yup";

import { Button } from "@/components/elements/button";
import { TextInput } from "@/components/elements/input";
import { AuthRegisterRequestPayload } from "@/types/auth";

const SignupScreen = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required")
  });

  const initialValues: AuthRegisterRequestPayload = {
    fullName: "Patrick",
    email: "",
    phoneNumber: ""
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
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              error={touched.email ? errors.email : ""}
              placeholder='Email'
              icon={<FontAwesome5 name='envelope' size={24} color='black' />}
            />

            <TextInput
              onChangeText={handleChange("fullName")}
              onBlur={handleBlur("fullName")}
              value={values.fullName}
              error={touched.fullName ? errors.fullName : ""}
              placeholder='Full Name'
              icon={<FontAwesome name='user-o' size={24} color='black' />}
            />

            <TextInput
              onChangeText={handleChange("phoneNumber")}
              onBlur={handleBlur("phoneNumber")}
              value={values.phoneNumber}
              error={touched.phoneNumber ? errors.phoneNumber : ""}
              placeholder='Phone Number'
              icon={<FontAwesome5 name='phone-alt' size={24} color='black' />}
            />

            <Button
              disabled={!isValid}
              title='Submit'
              onPress={() => handleSubmit()}
            />
          </>
        )}
      </Formik>

      <Text className='text-third py-1 font-bold'>
        Already have an account?
      </Text>
      <View className='flex w-full items-center py-4'>
        <Button onPress={() => router.push("/login")} title='Log In' />
      </View>
    </View>
  );
};

export default SignupScreen;
