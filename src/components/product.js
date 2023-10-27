

export default function Product({name, description, price, picture}){
    return(

<div className="w-64">
<div className=''>
  <div className='p-5 bg-blue-100 rounded-xl'>
    
<img src={picture} alt="airpod" />
</div>
</div>
<div className='mt-2'>
<h3 className='text-lg font-bold'>{name}</h3>
</div>
  <p className='mt-1 text-sm leading-4'>
    {description}
  </p>
  <div className='flex mt-1'>
    <div className='text-2xl font-bold grow'>${price}</div>
    <button className='px-3 py-1 text-white bg-emerald-400'>+</button>
  </div>
</div>
        
    )

    
}


