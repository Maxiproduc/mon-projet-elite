interface ProfileCardProps {
  name: string;
  role: string;
  ville: string;
}

export default function ProfileCard({ name, role, ville, }: ProfileCardProps) {
  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{role}</p>
      <p className="text-gray-600">{ville}</p>
    </div>
  )
}