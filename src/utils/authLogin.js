import axios from "axios";

export const authLogin = async(url, email, password, authCtx, history, setLoading, setFieldError) =>{
 try {
    const {data} = await axios.post(url,
        {
            email,
            password,
            returnSecureToken: true,
        });
        const expirationTime = new Date(new Date().getTime() + +data.expiresIn * 1000);
        authCtx.login(data.idToken, expirationTime.toISOString(), data.email);
        history.replace('/Dashboard');
        setLoading(false);

 } catch (error) {
    setFieldError('Authentication failed!');
    setLoading(false);
 }
}