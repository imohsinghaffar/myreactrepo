import React from "react";

const Main = () => {
  return (
    <>
    <div className="text-white flex px-12 pb-0 items-center gap-10 justify-between min-h-screen divide-white">
        {/* <img className='w-full h-full bg-no-repeat bg-center'  src="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Programming" /> */}
        <div className="flex w-1/2 gap-7 bg-yellow-300 p-10 rounded-md">
          <div className="w-1/2">   
            <img
              className="h-96 rounded-md bg-no-repeat"
              src="https://images.pexels.com/photos/27278446/pexels-photo-27278446/free-photo-of-a-sunflower-is-shown-in-this-photo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image"
            />
            <p className="text-center text-black font-bold text-xl italic">SUNFLOWER</p>
          </div>
          <div className="w-1/2 text-black">
          <h1 className="bg-black text-white p-2 rounded-md"><b>Sunflower</b> was discovered by <i><b>Francisco Pizarro</b></i> in 16th century.</h1>
            <p className="text-lg text-justify">
              The sunflower is a large annual forb of the genus Helianthus grown as a crop for its edible oil and edible fruits. This sunflower species is also used as bird food, as livestock forage (as a meal or a silage plant), and in some industrial applications. The plant was first domesticated in the Americas. Wild Helianthus species are native to North America and Central America.
            </p>
          </div>
        </div>
        <div className="flex w-1/2 flex-row-reverse gap-7 bg-sky-300 p-10 rounded-md">
          <div className="w-1/2">
            <img
              className="h-96 rounded-md bg-no-repeat"
              src="https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image"
            />
            <p className="text-center text-xl font-bold italic">IRIS</p>
          </div>
          <div className="w-1/2 text-black">
            <h1 className="bg-black text-white p-2 rounded-md"><b>IRIS</b> was discovered by <i><b>Carl Linnaeus</b></i> in 1753.</h1>
            <p className="text-lg text-justify">
              The iris is a genus of 260–300 species of flowering plants with showy flowers. It takes its name from the Greek word for a rainbow, which is also the name for the Greek goddess of the rainbow, Iris. Some authors state that the name refers to the wide variety of flower colors found among the many species. As well as being the scientific name, iris is also widely used as a common name for all Iris species.
            </p>
          </div>
        </div>
      </div>
     <div className="text-white flex flex-row-reverse px-12 items-center gap-10 justify-between min-h-screen">
        {/* <img className='w-full h-full bg-no-repeat bg-center'  src="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Programming" /> */}
        <div className="flex w-1/2 gap-7 bg-slate-300 p-10 rounded-md">
          <div className="w-1/2">   
            <img
              className="h-96 rounded-md bg-no-repeat"
              src="https://images.pexels.com/photos/2552418/pexels-photo-2552418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image"
            />
            <p className="text-center text-white font-bold text-xl italic">LISA FOTIOS</p>
          </div>
          <div className="w-1/2 text-black">
            <p className="text-lg text-justify">
            Lisa Fotios often photographs flowers in natural, artistic settings, highlighting 
            their delicate beauty. The flowers captured in her style typically radiate freshness, 
            elegance, and simplicity. Her images often feature blossoms with soft petals, 
            intricate textures, and vibrant or pastel hues, arranged in a way that emphasizes 
            natural grace.
            </p>
          </div>
        </div>
        <div className="flex w-1/2 flex-row-reverse gap-7 bg-rose-300 p-10 rounded-md">
          <div className="w-1/2">
            <img
              className="h-96 rounded-md bg-no-repeat"
              src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image"
            />
            <p className="text-center text-xl font-bold italic">PINK ROSE</p>
          </div>
          <div className="w-1/2 text-black">
            <p className="text-lg text-justify">
            A pink rose symbolizes grace, admiration, and joy. Its soft petals in varying shades of 
            pink—from pale blush to deep magenta—exude elegance and femininity. The pink rose is 
            often associated with gentle emotions, gratitude, and appreciation. It carries a 
            timeless charm, making it a popular choice for romantic gestures, heartfelt thanks,
             or expressions of admiration.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
