import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () =>{

    if(email.trim() === ""){
      setError("Please enter valid email");
      return; 
    }
    if(password.trim() === ""){
      setError("Please enter valid password");
      return;
    }
    setError("");
    

    
    console.log(email);
    console.log(password);
  };
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        {/*header start*/}
        <div>
          <h1 className="text-3xl font-bold text-center">
            CredWise AI
          </h1>

          <p className="text-center text-gray-500 mt-2">
            AI Powered Credit Risk Assessment
          </p>
        </div>
        {/*header end*/}

        {/*form start*/}
        <div className="mt-8">

          {/*email start*/}
          <div className="mb-5">
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError("");
              }}
              className={
                `w-full border rounded-lg p-3 
                ${
                  error==="Please enter valid email"
                  ? "border-red-500" : "border-gray-300"
                }`}
            />
          </div>
          {/*email end*/}

          {/*password start*/}
          <div className="mb-5">
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input 
              type="password" 
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError("");
              }}
              className={
                `w-full border rounded-lg p-3 
                ${
                  error==="Please enter valid password"
                  ? "border-red-500" : "border-gray-300"
                }`}
            />
          </div>
          {/*password end*/}

          {/*Forget Password start*/}
          <div className="flex justify-end mt-2">
            <a href='#' className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          {/*Forget Password end*/}

          {/* Error message start*/}
          {error && (
            <p className="text-red-600 text-sm mt-4">
              {error}
            </p>
          )}
          {/* Error message end */}

          {/*Login start*/}
          <div>
            <button 
              onClick={ handleLogin }
              className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition">
              Login
            </button>
          </div>
          {/*Login end*/}

          {/*Dont have and account start*/}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a href='#' className="text-blue-600 font-medium hover:underline">
                sign Up
              </a>
            </p>
          </div>
          {/*Dont have and account start*/}
        </div>
        {/*form end*/}

      </div>
    </div>
  );
}

export default Login;