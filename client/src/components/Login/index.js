import { Button, Buttons, Img, Title, Wrapper } from "./styles";

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google/", "_self");
  };
  const github = () => {
    window.open("http://localhost:5000/auth/github/", "_self");
  };
  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook/", "_self");
  };
  return (
    <Wrapper>
      <Title>Log in to your account</Title>
      <Buttons>
        <Button onClick={google}>
          <Img
            src="https://res.cloudinary.com/dza2t1htw/image/upload/v1662493057/google_k5enpz.png"
            alt="google"
          />
          Google
        </Button>
        <Button onClick={facebook}>
          <Img
            src="https://res.cloudinary.com/dza2t1htw/image/upload/v1662493391/facebook_hzkk4h.png"
            alt="facebook"
          />
          Facebook
        </Button>
        <Button onClick={github}>
          <Img
            src="https://res.cloudinary.com/dza2t1htw/image/upload/v1662493439/github-sign_a6omxn.png"
            alt="github"
          />
          GitHub
        </Button>
      </Buttons>
    </Wrapper>
  );
};

export default Login;
