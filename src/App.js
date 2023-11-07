import './App.css';
import axios from 'axios';
import {useState} from 'react';
function App() {
  const [waifuData,setData]= useState({});
  const [show,setshow]= useState(false);
  const [Images,setImages]= useState([]);
  const [facts,setfacts]=useState("");
  const handlegenerate=async()=>{
    try {
      const response = await axios.get("https://waifu.it/api/waifu",
      {headers:{Authorization:"NTAzNTg5NDg1ODg4NjY3NjQ5.MTY5OTE4OTUzMw--.d8e84aaae54"}});
      if(response.data!=undefined)
      {
        setData(response);
        console.log(response.data);
        setshow(true);
        setImages(waifuData.data.images);
      }
    } catch (error) {
      alert(error);
    }
    
  }
  function calling_function() {
    if(Images.length !==0) {
        return <>
            {Images.map((data)=>{
                return (
                  <div className='w-full h-full hover:shadow-red-500 shadow-lg hover:scale-105 duration-300'>
                      <img src={data} alt='/'
                      width='215'
                      height='217'
                      layout='responsive'
                      objectFit='cover'
                      />
                  </div>
                );
            })}
        </>
    }
    else{
      return <>
      <h1> No Images To Show </h1>
      </>
    }

}

const handlefacts=async()=>{
  try {
    const response=await axios.get("https://waifu.it/api/fact",
    {headers:{Authorization:"NTAzNTg5NDg1ODg4NjY3NjQ5.MTY5OTE4OTUzMw--.d8e84aaae54"}});
    console.log(response.data);
    setfacts(response.data.fact);
  } catch (error) {
    alert(error);
  }
  
};
  return (
    <div>
      <div className='flex items-center justify-center mb-12 h-screen bg-fixed bg-center bg-cover custom-img'>
                <div className='absolute top-0 bottom-0 right-0 left-0 '/>
                <div className=' p-5 text-white z-[2]  mt-[-10rem]'>
                    <h2 className='text-5xl font-bold text-black hover:scale-105 duration-300'>
                      Waifu Image Generator </h2> 
                    <p className='py-5 text-2xl  hover:scale-105 duration-300'>
                      Click Here to Generate Waifu Images </p>
                    
                    <button onClick={handlegenerate}
                     className="p-4 text-xl font-semibold text-black px-16 border-4 border-black rounded-md ml-8 shadow-lg hover:scale-105 duration-300 hover:shadow-black  ">
                       Generate
                    </button>
                   
                </div>
                
          
      </div>
      <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover c-img'>
        <div className=' p-5 text-white z-[2]  mt-[-10rem]'>
                <h1 className='text-2xl p-4 text-black font-bold'> Meanwhile Generate Anime Facts </h1>
                <p className='text-xl font-sans p-8 text-black border-4 border-black rounded-lg bg-slate-100/60'>{facts}</p>
                <button onClick={handlefacts}
                className="p-4 mt-8 text-xl font-semibold bg-slate-100/50 text-black px-6 border-4 border-black rounded-md ml-8 shadow-lg hover:scale-105 duration-300 hover:shadow-black "
                > 
                  Click For Facts 
                </button>

        </div>
      </div>
      {/* https://docs.waifu.it/list-of-endpoints */}
      {
        show &&
        <>
        <div className='flex items-center justify-center border-4 border-red-500 rounded-lg bg-gradient-to-r from-orange-400 to-yellow-300'>
          <h1 className='text-3xl font-semibold text-pink-600 p-4' ><span className='text-black'>Name : </span>{waifuData.data.names.en}</h1>
          <h1 className='text-3xl font-semibold text-pink-600 p-2 '>{waifuData.data.names.jp} 💗</h1>
        </div>
        <div className='flex justify-center items-center' >
          <h1 className='text-3xl font-semibold text-orange-500 p-4 '><span className='text-black'>From : </span> {waifuData.data.from.name}</h1>
          <h1 className='text-3xl font-semibold text-orange-600 p-2 '>{waifuData.data.from.type}</h1>
        </div>
        <div className='flex items-center justify-center w-full'>
          <div className=' grid grid-cols-3 gap-4 '>
          {calling_function()}
          </div>
        </div>
        
       
        </>
        
      }
      
    </div>
  );
}

export default App;
