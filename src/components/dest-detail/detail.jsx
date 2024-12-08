//  bagian detail dari halaman destination detail
export default function DetailSection({text}) {
  return (
    <div className="sm:grid gap-y-8">
      <p className="text-5xl">Details</p>
      <p className="text-xl" dangerouslySetInnerHTML={{__html : text}}></p>
    </div>
  );
}
