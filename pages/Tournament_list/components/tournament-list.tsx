"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TournamentCard from "./tournament-card"
import Pagination from "./pagination"

export interface Tournament {
  id: string
  name: string
  startDate: string
  endDate: string
  year: number
  capacity: number
  registered: number
  language: string
  type: string
  status: "upcoming" | "past"
}

const tournaments: Tournament[] = [
  {
    id: "1",
    name: "National Debate Championship",
    startDate: "June 10",
    endDate: "12",
    year: 2025,
    capacity: 32,
    registered: 18,
    language: "English",
    type: "BP",
    status: "upcoming",
  },
  {
    id: "2",
    name: "Hanoi Debate Tournament",
    startDate: "July 15",
    endDate: "17",
    year: 2025,
    capacity: 24,
    registered: 10,
    language: "Bilingual (English/Vietnamese)",
    type: "WSDC",
    status: "upcoming",
  },
  {
    id: "3",
    name: "HCM Debate Open",
    startDate: "August 5",
    endDate: "7",
    year: 2025,
    capacity: 16,
    registered: 9,
    language: "Vietnamese",
    type: "AP",
    status: "upcoming",
  },
  {
    id: "4",
    name: "WUDT",
    startDate: "September 20",
    endDate: "22",
    year: 2025,
    capacity: 40,
    registered: 12,
    language: "English",
    type: "BP",
    status: "upcoming",
  },
  {
    id: "5",
    name: "VBC",
    startDate: "October 15",
    endDate: "18",
    year: 2025,
    capacity: 20,
    registered: 15,
    language: "English",
    type: "WSDC",
    status: "upcoming",
  },
  {
    id: "6",
    name: "Da Nang Debate Open",
    startDate: "November 5",
    endDate: "7",
    year: 2025,
    capacity: 30,
    registered: 5,
    language: "Bilingual (English/Vietnamese)",
    type: "Mixed",
    status: "upcoming",
  },
]

export default function TournamentList() {
  const [activeTab, setActiveTab] = useState<string>("upcoming")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(2)

  const filteredTournaments = tournaments.filter(
    (tournament) =>
      tournament.status === activeTab && tournament.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <h1 className="text-5xl font-bold text-indigo-600">Tournament List</h1>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search tournaments..."
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="whitespace-nowrap">
          All Rules
        </Button>
      </div>

      <div className="flex justify-end">
        <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-white border">
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="past" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
              Past
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={8} onPageChange={setCurrentPage} />
    </div>
  )
}