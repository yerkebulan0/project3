import '../buttons/button.css'
import img from '../buttons/Plus.png'
export default function Button(){
    return(
        <div className='button'>
        <button className='b1'>To Do</button>
        <button className='b2'>Done</button>
        <button className='b3'>Trash</button>
        <button className='black'>
         <img style={{height:24,width:24}} src={img} alt='Plus' className='plus'/>
         </button>
        </div>
    );
}