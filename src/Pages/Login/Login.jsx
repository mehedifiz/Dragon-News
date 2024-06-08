import { Link } from "react-router-dom";
import Nav from "../Shared/Nav";
import { useContext } from "react";
import { AuthContex } from "../../firebase/Authprovider";


const Login = () => {

const {login} = useContext(AuthContex)

    const handlelogin =e =>{
        e.preventDefault()

   

        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = (form.get('email'))
        const password = (form.get('password'))
        console.log(email , password)

        login(email  ,password)

        .then(result =>{
          console.log(result.user)
        })
        

     
    }
    return (
        <div>
            <Nav></Nav>
            
   
      <div >
        <h2 className="text-3xl my-10 text-center ">Login Here</h2>
          <form onSubmit={handlelogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" name="password" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center  mt-4 ">Don't Have an account ? <Link className="text-blue-500 " to='/register'>Resgister Now</Link></p>
      </div>
    </div>
 

    );
};

export default Login;