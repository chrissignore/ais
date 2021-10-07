import { useForm } from "react-hook-form";

// The following component is an example of your existing Input Component
const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input placeholder="What's your email? 👋🏼" {...register(label, { required })} />
  </>
);

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'__form'}>
      <Input label="email" placeholder='email' register={register} required />
      <input type="Submit" className={'submit-btn'} />
    </form>
  );
};

  export default Form;