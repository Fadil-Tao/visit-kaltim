import { HashLink as Link } from "react-router-hash-link";
//  section destination , gambal daftar destinasi yang ada 7 itu , menerima daftar sebagai parameter
export default function DestinationSection({ id, title, desc, items }) {
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
      {/* iterasi dari parameter daftar */}
      {items.map((item, index) => {
        return (
          <Link
            key={index}
            to={`/destination/${item.title}#banner`}
            className={`rounded-2xl ${(index + 1) % 3 === 0 ? "col-span-2" : "col-span-1"} relative overflow-hidden`}
          >
            <img
              src={item.banner_url}
              alt=""
              className="h-72 w-full transform rounded-2xl object-cover transition-transform hover:scale-125"
            />
            <p className="absolute bottom-4 left-4 rounded-md bg-black bg-opacity-50 px-2 py-1 text-lg font-semibold transition-all group-hover:bg-opacity-80">
              {item.title
                .split("_")
                .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
                .join(" ")}
            </p>
          </Link>
        );
      })}
    </section>
  );
}
