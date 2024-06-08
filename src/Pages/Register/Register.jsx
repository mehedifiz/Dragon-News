import { Link } from "react-router-dom";
import Nav from "../Shared/Nav";

const Register = () => {

    const handleRegister =e =>{
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)


        console.log(form.get('email') )
    }
    return (
        <div>
            <Nav></Nav>
            
   
      <div >
        <h2 className="text-3xl my-10 text-center ">Login Here</h2>
          <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="texr" name="photo" placeholder="Photo URL" className="input input-bordered" required />
            </div>
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center  mt-4 ">Alredy Have an account ? <Link className="text-blue-500 " to='/login'>Register Now</Link></p>
      </div>
    </div>
    );
};

export default Register;