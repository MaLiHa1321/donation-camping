

const Banner = () => {
    return (
        <div>
 <div className="hero h-[70vh]" style={{backgroundImage: 'url(https://i.ibb.co/3z6JMjc/Clothing.png)'}}>
  <div className="hero-overlay bg-opacity-80 bg-slate-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
   
      <h1 className="mb-5 text-2xl md:text-5xl text-black font-bold">I Grow By Helping People In Need</h1>
      <input type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs" />
      <button className="btn btn-error text-white">Search</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;