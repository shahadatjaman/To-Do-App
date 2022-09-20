import { Create, H2, Wraaper } from "./styles";

const Home = () => {
  return (
    <Wraaper to={"/createtask"}>
      <H2>Create a New Task</H2>
      <Create>+</Create>
    </Wraaper>
  );
};

export default Home;
