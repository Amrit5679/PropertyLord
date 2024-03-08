import { GoogleLogin } from '@react-oauth/google';

function Appu()
{
    return(
        <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
        />

    );
}

export default Appu;