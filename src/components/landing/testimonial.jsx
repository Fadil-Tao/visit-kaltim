//  section testimonial dari halaman landing page
export default function TestimonialSection() {
  // daftar testimoni 
  const testimonials = [
    {
      img: "https://www.elnuevoherald.com/ultimas-noticias/2mvzws/picture282062843/alternates/LANDSCAPE_1140/USATSI_9012743.jpg",
      name: "Pak Diddy",
      message: "Loved to attend party here in kaltim very lovely",
      rating: 4.0,
    },
    {
      img: "https://uploads.dailydot.com/2024/06/patrick-bateman-sigma-face.jpg?q=65&auto=format&w=1600&ar=2:1&fit=crop",
      name: "Patrick Bateman",
      message: "This place is where sigma meditate, im so sigma",
      rating: 4.5,
    },
    {
      img: "https://monsterjournal.com/wp-content/uploads/2023/10/Thugposting-1.png",
      name: "Rahmat Ngawi",
      message:
        "Pak saya pesan batagor topping keju surakarta ya. hah testi ? maksudnya apa ya",
      rating: 3.0,
    },
  ];
  return (
    <div id="testimonial" className="py-16">
      <div className="text-center">
        <p className=" font-semibold mb-8 text-5xl">Our Visitor</p>
        <p>Some Famous People That has been here</p>
      </div>
    <div className="flex justify-evenly sm:flex-row flex-wrap">
      {/* menampilkan testimonial dari daftar testi diatas satu per satu*/}
        {testimonials.map((item) => {
            return (
                <div className="py-5 px-5 w-[298px] text-center flex flex-col justify-center items-center gap-y-2 ">
                    <div className="rounded-full w-44 h-44">
                        <img src={item.img} alt="" className="rounded-full w-full h-full object-cover" />
                    </div>
                    <p>{item.name}</p>  
                    <p>{item.message}</p>  
                </div>
            ) 
        })}
    </div>
    </div>
  );
}
