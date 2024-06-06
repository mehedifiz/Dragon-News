import logo from'../.././assets/logo.png'
import moment from 'moment';
const Head = () => {
    return (
        <div className='text-center'>

                <img className='mx-auto' src={logo} alt="" />

                <p>Journalism Without Fear or Favour</p>
                <p className='text-xl'>{moment().format("dddd, MMMM Do")} </p>


            
        </div>
    );
};

export default Head;