import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Globe } from "lucide-react"
import type { Tournament } from "./tournament-list"

interface TournamentCardProps {
  tournament: Tournament
}

export default function TournamentCard({ tournament }: TournamentCardProps) {
  const { name, startDate, endDate, year, capacity, registered, language, type } = tournament

  // Determine badge color based on tournament type
  const getBadgeColor = () => {
    switch (type) {
      case "BP":
        return "bg-green-100 text-green-800"
      case "WSDC":
        return "bg-blue-100 text-blue-800"
      case "AP":
        return "bg-yellow-100 text-yellow-800"
      case "Mixed":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="overflow-hidden shadow-md">
      <div className="p-5 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">
              {startDate}-{endDate}, {year}
            </p>
          </div>
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${getBadgeColor()}`}>{type}</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2 text-indigo-500" />
            <span>
              {capacity} teams capacity ({registered} registered)
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Globe className="h-4 w-4 mr-2 text-indigo-500" />
            <span>{language}</span>
          </div>
        </div>

        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Join</Button>
      </div>
    </Card>
  )
}
