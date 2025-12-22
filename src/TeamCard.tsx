interface TeamCardProps {
  name: string;
  role: string;
  photo?: string;
}

function TeamCard({ name, role, photo }: TeamCardProps) {
  return (
    <div className="border-2 border-black bg-white p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col items-center text-center">
      {photo && (
        <img
          src={photo}
          alt={name}
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-2 border-black mb-4"
        />
      )}
      <h3 className="font-black text-lg md:text-xl">{name}</h3>
      <p className="font-medium text-neutral-600">{role}</p>
    </div>
  );
}

export default TeamCard;
