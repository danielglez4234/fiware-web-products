import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  Box, 
  Paper
} from '@mui/material';


function RulesMain() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastname: "",
    email: ""
  })

  const onSubmit = (data) => {
    console.log(data)
  };
  console.log(errors);
  
  const onChange = (event) => {
    setInputValue({
      [event.target.name]: event.target.value
    })
  }

  return (
    <Box className="rules-container">
      <Paper elevation={3} className="fiware-content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input 
            type="text" 
            placeholder="First name" 
            {...register("First name", {
                required: true, 
                maxLength: 80
              })
            } 
          />
          <input 
            type="text" 
            placeholder="Last name" 
            {...register("Last name", {
                required: true, 
                maxLength: 100
              })
            } 
          />
          <input 
            type="text" 
            placeholder="Email" 
            {...register("Email", {
                required: true, 
                pattern: /^\S+@\S+$/i
              })
            } 
          />
          <input 
            type="tel" 
            placeholder="Mobile number" 
            {...register("Mobile number", {
                required: true, 
                minLength: 6, 
                maxLength: 12
              })
            } 
          />
          <select {...register("Title", { 
            required: true 
            })
          }>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </select>

          <input 
            type="radio" 
            value="Yes" 
            {...register("Developer", { 
                required: true 
              })
            } 
          />
          <input 
            type="radio" 
            value="No" 
            {...register("Developer", { 
                required: true 
              })
            } 
          />

          <input type="submit" />
        </form>
      </Paper>
      <Paper elevation={3} className="fiware-content">
        
      </Paper>
    </Box>
  );
}

export default RulesMain;