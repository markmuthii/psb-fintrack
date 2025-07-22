const Register = () => {
  return (
    <section className="form flex flex-col max-w-[500px] mx-auto justify-center text-center gap-12">
      <h1 className="text-4xl font-bold">Create your Account on Fin-Track</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter your name"
          className="form-element"
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="form-element"
        />
        <input
          type="text"
          placeholder="Enter your phone"
          className="form-element"
        />
        <input
          type="text"
          placeholder="Enter your username"
          className="form-element"
        />
        <input
          type="password"
          placeholder="*********"
          className="form-element"
        />
        <input
          type="submit"
          className="form-element bg-green-500 cursor-pointer"
          defaultValue="Register"
        />
      </form>
    </section>
  );
};

export { Register };
