import { Box, FormControl, FormLabel, FormErrorMessage, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import HCaptcha from '@hcaptcha/react-hcaptcha';
const { SMTPClient } = require('emailjs-smtp-client');


export const Contact = () => {

    const [isHcaptchaVerified, setIsHcaptchaVerified] = useState(false);
    const [isSuccessSubmit, setIsSuccessSubmit] = useState(false);
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
      if (isHcaptchaVerified && isEmailError === false && isSubjectError === false) {
        
        const client = new SMTPClient({
          host: 'smtp.gmail.com',
          port: 465, 
          user: process.env.REACT_APP_MAILUSER,
          password: process.env.REACT_APP_PASSWORD,
        });

        const message = {
          from: process.env.REACT_APP_MAILUSER,
          to: process.env.REACT_APP_RECEIVER,
          subject: data.subject,
          text: data.message,
        };

        client.send(message).then(() => {
          console.log('Email sent successfully');
        }).catch((err) => {
          console.error('Failed to send email:', err);
        });
        
        setIsSuccessSubmit(true);
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
      <Box>
        <FormControl as="form" w="300px" isInvalid={ isEmailError || errors.email || isSubjectError} isRequired onSubmit={handleSubmit(onSubmit)}>
          <FormLabel>Email</FormLabel>
          <Input {...register("email", { required: true })} type="email" value={email} onChange={handleEmailChange} placeholder="Your email" />
          {isEmailError ? (
          <FormErrorMessage>Email is required and should be in the correct format</FormErrorMessage>
        ) : ""}
  
          <FormLabel>Subject</FormLabel>
          <Input {...register("subject", { required: true })} placeholder="Subject" value={subject} onChange={handleSubjectChange} />
          {isSubjectError && (
            <FormErrorMessage>Subject is required</FormErrorMessage>
          )}
  
          <FormLabel>Message</FormLabel>
          <Textarea {...register("message", { required: true })} h="150px" w="450px" size="lg" placeholder="Message" resize="both" />
          <Box mt="10px">
            <HCaptcha
            sitekey={process.env.REACT_APP_SITE_KEY}
            onVerify={handleHcaptchaVerify}
            />
        </Box>

          <Button mt="8px" type="submit">Submit</Button>
        </FormControl>
      </Box>
    );
  };