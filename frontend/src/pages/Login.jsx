import BookLogin from "../assets/BookLogin.jpg"
import { useEffect, useState } from "react"
import axios from "axios"

const Login = () => {
    const [login , setLogin] = useState(true);
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [emailS , setEmailS] = useState("");
    const [passwordS , setPasswordS] = useState("");
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [phone , setPhone] = useState();

    function resetLogin(){
        setEmail("");
        setPassword("");
    }

    function resetSignup(){
        setEmailS("");
        setPasswordS("");
        setFirstName("");
        setLastName("");
        setPhone("");
    }

    useEffect(() => {
        localStorage.clear();
    } , [])
  
    if(login){
        return (
            <div className='w-screen h-screen flex justify-center items-center bg-[#FBF1D9]'>
                <div className='w-3/5 h-3/5  bg-[#F3D9A0] rounded-xl flex justify-between'>
                    <img src={BookLogin} alt="BookLogin" className='h-full rounded-l-2xl'/>
                    <div className="h-full w-3/5 flex flex-col border-l-4 border-[#FBF1D9]">
                        <div className=" w-full flex justify-center">
                            <button className="border-r-2 border-b-2 border-[#FBF1D9] font-semibold text-[#70401e] text-[24px] w-[50%] pb-4 pt-6 p-3"><div className="flex flex-col items-center">
                                    <p>Login</p>
                                    <div className="h-[3px] w-[26%] bg-[#713F1d]"></div>    
                                </div>
                            </button>
                            <button className="border-b-2 border-[#FBF1D9] font-semibold text-[#70401e] text-[24px] w-[50%] pt-6 pb-[19px] p-3" onClick={() =>{
                                setLogin(false);
                            }}>Sign Up</button>
                        </div>
                        <div className="flex flex-col items-center gap-12 pt-14">
                            <input type="text" value = {email} placeholder="Email" className="w-2/3 pl-3 py-2 rounded-full bg-[#FAF1DA] border-2 border-[#EECB83] placeholder-[#70401ec1] placeholder:text-[20px] placeholder:italic" onChange={(e) => {
                                setEmail(e.target.value);
                            }}/>
                            <input type="password" value = {password} placeholder="Password" className="w-2/3 pl-3 py-2 rounded-full bg-[#FAF1DA] border-2 border-[#EECB83] placeholder-[#70401ec1] placeholder:text-[20px] placeholder:italic" onChange = {(e) => {
                                setPassword(e.target.value);
                            }}/>
                            <button className="bg-[#FAF1DA] w-[35%] rounded-full p-3 text-[20px] font-medium text-[#70401ec1]"
                            onClick={() => {
                                axios.post('http://localhost:3000/user/signin' , {
                                    email: email,
                                    password: password
                                })
                                .then((res) => {
                                    if(res.status === 200){
                                        const token = res.data.token;
                                        localStorage.setItem('token' , token);
                                        window.location.href = '/'
                                        // resetLogin();
                                        setTimeout(() => {
                                            resetLogin()
                                        } , 1000);
                                    }
                                    else{
                                        <div>Invalid Credentials</div>
                                        resetLogin();
                                        alert('Invalid Credentials');
                                    }
                                })
                                .catch((err) => {
                                    resetLogin();
                                    alert(err.response?.data?.message || "Login failed");
                                })
                            }}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
          )
    }
    else{
        return(
            <div className='w-screen h-screen flex justify-center items-center bg-[#FBF1D9]'>
                <div className='w-3/5 h-3/5  bg-[#F3D9A0] rounded-2xl flex justify-between'>
                    <img src={BookLogin} alt="BookLogin" className='h-full rounded-l-2xl'/>
                    <div className="h-full w-3/5 border-l-4 border-[#FBF1D9] flex flex-col">
                        <div className=" w-full flex justify-center">
                            <button className="border-r-2 border-b-2 border-[#FBF1D9] font-semibold text-[#70401e] text-[24px] w-[50%] pb-[19px] pt-6 p-3" onClick={() =>{
                                setLogin(true);
                            }}>Login</button>
                            <button className="border-b-2 border-[#FBF1D9] font-semibold text-[#70401e] text-[24px] w-[50%] pb-4 pt-6 p-3"><div className="flex flex-col items-center">
                                        <p>Sign Up</p>
                                        <div className="h-[3px] w-[33%] bg-[#713F1D]"></div>
                                    </div>
                                </button>
                        </div>
                        <div className="flex flex-col items-center gap-7 pt-14">
                            <input type="text" value = {emailS} placeholder="Email" className="w-2/3 pl-3 py-2 rounded-full bg-[#FAF1DA] border-2 border-[#EECB83] placeholder-[#70401ec1] placeholder:text-[20px] placeholder:italic" onChange={(e) => {
                                setEmailS(e.target.value);
                            }}/>
                            <input type="text" value = {passwordS} placeholder="Password" className="w-2/3 pl-3 py-2 rounded-full bg-[#FAF1DA] border-2 border-[#EECB83] placeholder-[#70401ec1] placeholder:text-[20px] placeholder:italic" onChange={(e) => {
                                setPasswordS(e.target.value);
                            }}/>
                            <div className="flex w-full justify-center">
                                <input type="text" value = {firstName} placeholder="First Name" className="w-1/3 pl-3 py-2 rounded-l-full bg-[#FAF1DA] border-2 border-r-[0.5px] border-[#EECB83] placeholder-[#70401ec1] placeholder:text-[20px] placeholder:italic" onChange = {(e) => {
                                    setFirstName(e.target.value);
                                }}/>
                                <input type="text" value = {lastName} placeholder="Last Name" className="w-1/3 pl-3 py-2 rounded-r-full bg-[#FAF1DA] border-2 border-l-[0.5px] border-[#EECB83] placeholder-[#70401ec1] placeholder:text-[20px] placeholder:italic" onChange={(e) => {
                                    setLastName(e.target.value);
                                }}/>
                            </div>
                            <input type="number" value = {phone} placeholder="Phone" className="w-2/3 pl-3 py-2 rounded-full bg-[#FAF1DA] border-2 border-[#EECB83] placeholder-[#70401ec1] placeholder:text-[20px] placeholder:italic" onChange = {(e) => {
                                setPhone(e.target.value);
                            }}/>
                            <button className="bg-[#FAF1DA] w-[35%] rounded-full p-3 text-[20px] font-medium text-[#70401ec1]"
                            onClick = {() => {
                                axios.post('http://localhost:3000/user/signup' , {
                                    email : emailS,
                                    password : passwordS,
                                    firstName : firstName,
                                    lastName : lastName,
                                    phone : Number(phone)
                                })
                                .then((res) => {
                                    if(res.status === 200){
                                        localStorage.setItem('token' , res.data.token);
                                        window.location.href = '/';
                                        setTimeout(()=>{
                                            resetSignup();
                                        } , 1000)
                                    }
                                    else{
                                        alert(res.data.message);
                                        resetSignup();
                                    }
                                })
                                .catch((err) => {
                                    console.error('Error details:', err.response || err);
                                    alert(err.response?.data?.message || 'Sign-up failed due to server restrictions.');
                                  });
                            }}>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login