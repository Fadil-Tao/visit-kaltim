import { HashLink as Link } from "react-router-hash-link";
import PopupCarousel from "./popup-carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function GallerySectionCol({ id, title, desc, items }) {
  return (
    <section
      id={id}
      className="[grid-template-columns: repeat(3, minmax(100px, 1fr));] [grid-auto-flow: dense;] grid h-auto w-full grid-cols-2 gap-4 sm:grid-cols-3"
    >
      <div
        id="1"
        className="col-span-2 flex flex-none flex-col text-left sm:col-span-1"
      >
        <p className="text-5xl font-semibold">{title}</p>
        <p className="">{desc}</p>
      </div>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className={`rounded-2xl ${(index + 1) % 3 === 0 ? "col-span-2" : "col-span-1"} relative overflow-hidden`}
          >
            <Dialog className="w-[600px] bg-black">
              <DialogTrigger key={index} className={`w-full`}>
                <img
                  src={item.img_url}
                  alt=""
                  className="h-72 w-full transform rounded-2xl object-cover transition-transform hover:scale-125"
                />
                <p className="absolute bottom-4 left-4 rounded-md bg-black bg-opacity-50 px-2 py-1 text-lg font-semibold transition-all group-hover:bg-opacity-80">
                  {item.text}
                </p>
              </DialogTrigger>
              <DialogContent className="h-screen bg-zinc-800 sm:min-w-full">
                <PopupCarousel array={items} index={index } />
              </DialogContent>
            </Dialog>
          </div>
        );
      })}
    </section>
  );
}


// unused
function PopupSection({ key, src, text, array }) {
  return (
    <Dialog className="w-[600px] bg-black">
      <DialogTrigger key={key} className={`w-full`}>
        <img
          src={src}
          alt=""
          className="h-72 w-full transform rounded-2xl object-cover transition-transform hover:scale-125"
        />
        <p className="absolute bottom-4 left-4 rounded-md bg-black bg-opacity-50 px-2 py-1 text-lg font-semibold transition-all group-hover:bg-opacity-80">
          {text}
        </p>
      </DialogTrigger>
      <DialogContent className="h-screen bg-zinc-800 sm:min-w-full">
        <PopupCarousel array={array} />
      </DialogContent>
    </Dialog>
  );
}
