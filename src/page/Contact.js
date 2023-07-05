import { FormControl, FormLabel, FormErrorMessage, Input, Textarea, Button, useToast, Center, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import HCaptcha from '@hcaptcha/react-hcaptcha';


export const Contact = () => {

    const [isHcaptchaVerified, setIsHcaptchaVerified] = useState(false);
    const { register, handleSubmit, reset, formState: {errors} } = useForm({
      defaultValues: {
        email: "",
        subject: "",
      }
    });
    const toast = useToast({
      position: 'top',
    });

    const onSubmit = async (data) => {
      const subject = data.subject
      const email = data.email
      const message = data.message

      if (isHcaptchaVerified && isEmailError === false && isSubjectError === false) {
        
        const response = await fetch('https://portfolio.dyfault.com/contactform', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ subject, email, message })
        });
        if(response.ok) {
          setEmail("");
          setSubject("");
          reset();
          toast({
            title: "Success",
            description: "Your message was successfully sent",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Error",
            description: "Send email error. Please try again",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      } else {
          toast({
            title: "Error",
            description: "cannot send your message please verify email, subject or captcha",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
      }
    };

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [isEmailError, setIsEmailError] = useState(false);
    const [isSubjectError, setIsSubjectError] = useState(false);
  
    const handleEmailChange = (e) => {
      const enteredEmail = e.target.value;
      setEmail(enteredEmail);
      setIsEmailError(!validateEmail(enteredEmail));
    };
  
    const handleSubjectChange = (e) => {
      const enteredSubject = e.target.value;
      setSubject(enteredSubject);
      setIsSubjectError(enteredSubject.trim() === '');
    };
  
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const handleHcaptchaVerify = (token) => {
      setIsHcaptchaVerified(true);
    };
  
    return (
      <Stack>
        <FormControl as="form" isInvalid={ isEmailError || errors.email || isSubjectError} isRequired onSubmit={handleSubmit(onSubmit)}>
          <FormLabel>Email</FormLabel>
          <Input {...register("email", { required: true })} type="email" value={email} w={{base: '350px', lg: "450px"}} onChange={handleEmailChange} placeholder="Your email" />
          {isEmailError ? (
          <FormErrorMessage>Email is required and should be in the correct format</FormErrorMessage>
        ) : ""}
  
          <FormLabel>Subject</FormLabel>
          <Input {...register("subject", { required: true })} placeholder="Subject" value={subject} w={{base: '350px', lg: "450px"}} onChange={handleSubjectChange} />
          {isSubjectError && (
            <FormErrorMessage>Subject is required</FormErrorMessage>
          )}
  
          <FormLabel>Message</FormLabel>
          <Textarea {...register("message", { required: true })} h="150px" w={{base: '350px', lg: "450px"}} size="lg" placeholder="Message" resize="both" />
          <Center mt="10px">
            <HCaptcha
            sitekey={process.env.REACT_APP_SITE_KEY}
            onVerify={handleHcaptchaVerify}
            />
          </Center>

          <Center>
            <Button mt="8px" type="submit">Submit</Button>
          </Center>
        </FormControl>
      </Stack>
    );
  };