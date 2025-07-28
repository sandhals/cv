"use client"

import React, { useState, useMemo } from "react"
import Header from "@/components/Header.tsx"
import "../styles.css"

interface Project {
  date: string
  client: string
  category: string
  project: string
  sortDate: Date
}

const projectData: Project[] = [
  { date: "24.03.27", client: "Huvitz", category: "N", project: "Dental Product Slogan", sortDate: new Date(2024, 2, 27) },
  { date: "24.04.05", client: "LG", category: "V", project: "LG Ground 220 Cannes Lions Video", sortDate: new Date(2024, 3, 5) },
  { date: "24.04.17", client: "PLEDIS", category: "N", project: "(Cannot Disclose Details)", sortDate: new Date(2024, 3, 17) },
  { date: "24.04.18", client: "Samsung", category: "V", project: "Samsung E&A Rebranding Video", sortDate: new Date(2024, 3, 18) },
  { date: "24.04.23", client: "Honeynaps", category: "V", project: "Honeynaps Sleep Tech Product Video", sortDate: new Date(2024, 3, 23) },
  { date: "24.04.23", client: "KB Bank", category: "E", project: "KB Bank \"With People\" Print Ad", sortDate: new Date(2024, 3, 23) },
  { date: "24.04.25", client: "LG", category: "E", project: "LG Newsletter BITE April 2024", sortDate: new Date(2024, 3, 25) },
  { date: "24.04.26", client: "LG", category: "N", project: "AI Agent Naming", sortDate: new Date(2024, 3, 26) },
  { date: "24.05.03", client: "KRAFTON", category: "B", project: "Brand Book", sortDate: new Date(2024, 4, 3) },
  { date: "24.05.08", client: "LG", category: "P", project: "VX Dryer Message Matrix", sortDate: new Date(2024, 4, 8) },
  { date: "24.05.09", client: "Genesis", category: "S", project: "GV70 New Model Launch SNS Copy", sortDate: new Date(2024, 4, 9) },
  { date: "24.05.10", client: "Genesis", category: "S", project: "GV70 Sports Package SNS Copy", sortDate: new Date(2024, 4, 10) },
  { date: "24.05.14", client: "LG", category: "B", project: "Brand Book and Heritage Book", sortDate: new Date(2024, 4, 14) },
  { date: "24.05.16", client: "LG", category: "V", project: "Life's Good Brand Campaign Script", sortDate: new Date(2024, 4, 16) },
  { date: "24.05.16", client: "Genesis", category: "S", project: "Genesis Space SNS Content", sortDate: new Date(2024, 4, 16) },
  { date: "24.05.20", client: "LG", category: "V", project: "LG Puricare Water Purifier Video", sortDate: new Date(2024, 4, 20) },
  { date: "24.05.20", client: "Genesis", category: "S", project: "Genesis GV80 Regional SNS Copy", sortDate: new Date(2024, 4, 20) },
  { date: "24.05.23", client: "LG", category: "E", project: "LG Newsletter BITE May 2024", sortDate: new Date(2024, 4, 23) },
  { date: "24.05.24", client: "LG", category: "P", project: "Subscription Service Message Matrix", sortDate: new Date(2024, 4, 24) },
  { date: "24.05.27", client: "Genesis", category: "S", project: "Genesis Space Experience SNS Copy", sortDate: new Date(2024, 4, 27) },
  { date: "24.05.28", client: "Aestura", category: "V", project: "Aestura AtoBarrier Hydro Soothing Cream Video", sortDate: new Date(2024, 4, 28) },
  { date: "24.05.28", client: "Genesis", category: "S", project: "Genesis Environment Day SNS Copy", sortDate: new Date(2024, 4, 28) },
  { date: "24.06.04", client: "Genesis", category: "S", project: "Genesis GV70 Seasonal Content SNS Copy", sortDate: new Date(2024, 5, 4) },
  { date: "24.06.05", client: "Genesis", category: "S", project: "#MyGenesis Campaign Copy", sortDate: new Date(2024, 5, 5) },
  { date: "24.06.10", client: "Genesis", category: "S", project: "Genesis Seasonal SNS Copy (Week 2)", sortDate: new Date(2024, 5, 10) },
  { date: "24.06.10", client: "Genesis", category: "V", project: "Jacky Ickx Campaign Video", sortDate: new Date(2024, 5, 10) },
  { date: "24.06.11", client: "Genesis", category: "S", project: "Genesis Space LinkedIn", sortDate: new Date(2024, 5, 11) },
  { date: "24.06.12", client: "FC Online", category: "V", project: "FC Online Ad Video Transcreation", sortDate: new Date(2024, 5, 12) },
  { date: "24.06.14", client: "Samsung", category: "V", project: "Olympic Athlete Phone Video Copy", sortDate: new Date(2024, 5, 14) },
  { date: "24.06.17", client: "Genesis", category: "S", project: "Genesis Seasonal SNS Copy (Week 3)", sortDate: new Date(2024, 5, 17) },
  { date: "24.06.18", client: "Genesis", category: "S", project: "Genesis Space Suji SNS Copy", sortDate: new Date(2024, 5, 18) },
  { date: "24.06.19", client: "Genesis", category: "S", project: "Genesis GV70 Seasonal FB Week 2+3 Copy", sortDate: new Date(2024, 5, 19) },
  { date: "24.06.20", client: "AL", category: "N", project: "Brand Slogan Review", sortDate: new Date(2024, 5, 20) },
  { date: "24.06.20", client: "LG B2B", category: "P", project: "B2B Washer Dryer ZEUS Message Matrix", sortDate: new Date(2024, 5, 20) },
  { date: "24.06.21", client: "Genesis", category: "S", project: "Genesis Space Gangnam & Shilla SNS Copy", sortDate: new Date(2024, 5, 21) },
  { date: "24.06.24", client: "LG", category: "E", project: "LG Newsletter BITE June 2024", sortDate: new Date(2024, 5, 24) },
  { date: "24.06.24", client: "LG", category: "M", project: "LG Pra.L Message Matrix", sortDate: new Date(2024, 5, 24) },
  { date: "24.06.24", client: "LG", category: "B", project: "LG Communication Guideline", sortDate: new Date(2024, 5, 24) },
  { date: "24.06.24", client: "Genesis", category: "S", project: "Genesis TGL Partnership LI Post", sortDate: new Date(2024, 5, 24) },
  { date: "24.07.05", client: "Genesis", category: "S", project: "#MyGenesis IG Caption", sortDate: new Date(2024, 6, 5) },
  { date: "24.07.08", client: "Hankook Tire", category: "P", project: "Ventus evo Sales Guide Proofcreation", sortDate: new Date(2024, 6, 8) },
  { date: "24.07.09", client: "LG", category: "B", project: "LG Group Brand Statement", sortDate: new Date(2024, 6, 9) },
  { date: "24.07.12", client: "Hankook Tire", category: "P", project: "Weatherflex GT Sales Guide Proofcreation and Copy", sortDate: new Date(2024, 6, 12) },
  { date: "24.07.12", client: "LG", category: "N", project: "AI Agent Naming 1st rev", sortDate: new Date(2024, 6, 12) },
  { date: "24.07.18", client: "", category: "P", project: "IT Sales Guide", sortDate: new Date(2024, 6, 18) },
  { date: "24.07.19", client: "Samsung", category: "B", project: "OLED Tour Bus Copy", sortDate: new Date(2024, 6, 19) },
  { date: "24.07.26", client: "LG", category: "E", project: "LG Newsletter BITE July 2024", sortDate: new Date(2024, 6, 26) },
  { date: "24.07.26", client: "Genesis", category: "V", project: "Genesis Podcast Ep. 1 Transcreation", sortDate: new Date(2024, 6, 26) },
  { date: "24.08.05", client: "Hankook Tire", category: "P", project: "Dynapro evo Sales Guide Proofcreation", sortDate: new Date(2024, 7, 5) },
  { date: "24.08.05", client: "Hankook Tire", category: "P", project: "Dynapro HT2 Sales Guide Proofcreation", sortDate: new Date(2024, 7, 5) },
  { date: "24.08.05", client: "LG", category: "P", project: "LG AI Air AC Message Matrix", sortDate: new Date(2024, 7, 5) },
  { date: "24.08.07", client: "Aestura", category: "V", project: "Aestura Regederm365 Capsule Serum Video Copy", sortDate: new Date(2024, 7, 7) },
  { date: "24.08.14", client: "LG", category: "B", project: "LG Brand Book Translation", sortDate: new Date(2024, 7, 14) },
  { date: "24.08.21", client: "Asiana", category: "V", project: "Asiana Airlines Global Ad Video Proofcreation", sortDate: new Date(2024, 7, 21) },
  { date: "24.08.26", client: "LG", category: "E", project: "LG Newsletter BITE August 2024", sortDate: new Date(2024, 7, 26) },
  { date: "24.08.26", client: "LG", category: "V", project: "Corporate Brand Film Air Solution", sortDate: new Date(2024, 7, 26) },
  { date: "24.09.02", client: "LG", category: "V", project: "LG AI Appliance Video Copy", sortDate: new Date(2024, 8, 2) },
  { date: "24.09.05", client: "Shinhan", category: "N", project: "Shinhan SOL Global Check Card Slogan", sortDate: new Date(2024, 8, 5) },
  { date: "24.09.09", client: "Samsung", category: "N", project: "QD OLED Tech Brand Naming", sortDate: new Date(2024, 8, 9) },
  { date: "24.09.12", client: "Hankook Tire", category: "P", project: "Why All-Weather Tire Sales Guide", sortDate: new Date(2024, 8, 12) },
  { date: "24.09.23", client: "Aestura", category: "P", project: "Aestura Regederm 365 Key Copy", sortDate: new Date(2024, 8, 23) },
  { date: "24.09.24", client: "LG", category: "E", project: "LG Newsletter BITE September 2024", sortDate: new Date(2024, 8, 24) },
  { date: "24.09.24", client: "LG", category: "B", project: "Campaign Title Review", sortDate: new Date(2024, 8, 24) },
  { date: "24.09.24", client: "Genesis", category: "S", project: "GV80 Coupe Black Launch Copy", sortDate: new Date(2024, 8, 24) },
  { date: "24.09.25", client: "Genesis", category: "S", project: "Electrified GV70 FL Launch Copy", sortDate: new Date(2024, 8, 25) },
  { date: "24.09.26", client: "Olive Young", category: "B", project: "OliveYoung Global Communication Guide", sortDate: new Date(2024, 8, 26) },
  { date: "24.10.08", client: "KIA", category: "V", project: "KIA Gwangmyeong EVO Video Transcreation", sortDate: new Date(2024, 9, 8) },
  { date: "24.10.10", client: "Samsung", category: "N", project: "Samsung 8.6G Oxide TFT OLED Naming", sortDate: new Date(2024, 9, 10) },
  { date: "24.10.11", client: "LG", category: "E", project: "CES Preface Transcreation", sortDate: new Date(2024, 9, 11) },
  { date: "24.10.11", client: "Samsung", category: "V", project: "Samsung Semiconductor Video Copy", sortDate: new Date(2024, 9, 11) },
  { date: "24.10.14", client: "Genesis", category: "S", project: "GV80 Coupe Black Additional SNS Copy", sortDate: new Date(2024, 9, 14) },
  { date: "24.10.23", client: "LG", category: "P", project: "LG Shield Head Message", sortDate: new Date(2024, 9, 23) },
  { date: "24.10.24", client: "LG", category: "E", project: "LG Newsletter BITE October 2024", sortDate: new Date(2024, 9, 24) },
  { date: "24.10.28", client: "Genesis", category: "S", project: "Genesis GV80 Coupe Black Exhibition SNS Copy", sortDate: new Date(2024, 9, 28) },
  { date: "24.10.29", client: "Hankook Tire", category: "P", project: "Dynapro HP3 Sales Guide", sortDate: new Date(2024, 9, 29) },
  { date: "24.11.05", client: "Genesis", category: "S", project: "GV80 Black Launching Film SNS Copy", sortDate: new Date(2024, 10, 5) },
  { date: "24.11.07", client: "Lotte", category: "V", project: "Lotte EnC Campaign Video Entry", sortDate: new Date(2024, 10, 7) },
  { date: "24.11.07", client: "LG", category: "E", project: "Heritage Audio Leaflet Transcreation", sortDate: new Date(2024, 10, 7) },
  { date: "24.11.09", client: "", category: "E", project: "CES 2025 Zone Titles", sortDate: new Date(2024, 10, 9) },
  { date: "24.11.12", client: "LG", category: "P", project: "gram AI Message Matrix Review", sortDate: new Date(2024, 10, 12) },
  { date: "24.11.18", client: "Olive Young", category: "V", project: "Olive Young 25th Anniversary TVC Copy", sortDate: new Date(2024, 10, 18) },
  { date: "24.11.19", client: "LG", category: "E", project: "LG CES Zone Titles", sortDate: new Date(2024, 10, 19) },
  { date: "24.11.22", client: "LG", category: "E", project: "LG Newsletter BITE November 2024", sortDate: new Date(2024, 10, 22) },
  { date: "24.11.27", client: "Samsung", category: "V", project: "Samsung Semiconductors Video Key Message", sortDate: new Date(2024, 10, 27) },
  { date: "24.11.28", client: "LG", category: "E", project: "CES AI Speaker Script", sortDate: new Date(2024, 10, 28) },
  { date: "24.12.02", client: "LG", category: "E", project: "CES Wall Graphic Proofcreation", sortDate: new Date(2024, 11, 2) },
  { date: "24.12.09", client: "Sasebo", category: "N", project: "School Slogan", sortDate: new Date(2024, 11, 9) },
  { date: "24.12.11", client: "LG", category: "E", project: "LG Newsletter BITE December 2024", sortDate: new Date(2024, 11, 11) },
  { date: "24.12.12", client: "Huvitz", category: "N", project: "Huvitz - Lilivis Scanner Slogan", sortDate: new Date(2024, 11, 12) },
  { date: "24.12.12", client: "LG", category: "E", project: "CES Video Titles", sortDate: new Date(2024, 11, 12) },
  { date: "24.12.18", client: "", category: "P", project: "New Product Copy", sortDate: new Date(2024, 11, 18) },
  { date: "24.12.19", client: "Hankook Tire", category: "P", project: "DynaPro PUP Tire Copy", sortDate: new Date(2024, 11, 19) },
  { date: "24.12.20", client: "LG", category: "E", project: "CES Exhibition Graphic Proofcreation", sortDate: new Date(2024, 11, 20) },
  { date: "24.12.23", client: "Aestura", category: "P", project: "Aestura Atobarier365 Derma Solution", sortDate: new Date(2024, 11, 23) },
  { date: "25.01.06", client: "Hankook Tire", category: "N", project: "Warranty Program Naming", sortDate: new Date(2025, 0, 6) },
  { date: "25.01.07", client: "Olive Young", category: "B", project: "Olive Young Global Media Brand Book", sortDate: new Date(2025, 0, 7) },
  { date: "25.01.09", client: "Hankook Tire", category: "P", project: "iON HT Sales Guide Copy", sortDate: new Date(2025, 0, 9) },
  { date: "25.01.16", client: "Huvitz", category: "N", project: "HPE-990 Lens Edger Slogan", sortDate: new Date(2025, 0, 16) },
  { date: "25.01.21", client: "Krafton", category: "B", project: "Corporate Brand Definition", sortDate: new Date(2025, 0, 21) },
  { date: "25.01.21", client: "Huvitz", category: "N", project: "OCT Slogan", sortDate: new Date(2025, 0, 21) },
  { date: "25.01.23", client: "LG", category: "E", project: "LG Newsletter BITE January 2025", sortDate: new Date(2025, 0, 23) },
  { date: "25.02.02", client: "Huvitz", category: "P", project: "iON Nordic Sales Guide", sortDate: new Date(2025, 1, 2) },
  { date: "25.02.13", client: "LG", category: "B", project: "LG Internal Education Playbook Transcreation", sortDate: new Date(2025, 1, 13) },
  { date: "25.02.14", client: "Samsung", category: "N", project: "Technology Naming Review", sortDate: new Date(2025, 1, 14) },
  { date: "25.02.17", client: "Hyundai", category: "V", project: "Hyundai PLEOS Vision Film", sortDate: new Date(2025, 1, 17) },
  { date: "25.02.17", client: "FC Online", category: "V", project: "FC Online Ad Campaign Video Copy", sortDate: new Date(2025, 1, 17) },
  { date: "25.02.17", client: "LG", category: "B", project: "B2B Voice Guideline", sortDate: new Date(2025, 1, 17) },
  { date: "25.02.24", client: "Hankook Tire", category: "N", project: "Dynapro AT2 On-Road, Off-Road Tire Naming", sortDate: new Date(2025, 1, 24) },
  { date: "25.02.25", client: "LG", category: "E", project: "LG Newsletter BITE February 2025", sortDate: new Date(2025, 1, 25) },
  { date: "25.02.26", client: "Samsung", category: "N", project: "QD OLED, OLED Tech Naming", sortDate: new Date(2025, 1, 26) },
  { date: "25.03.05", client: "LG", category: "B", project: "AI MarCom House", sortDate: new Date(2025, 2, 5) },
  { date: "25.03.07", client: "Tangle", category: "V", project: "Samyang Tangler Pasta Ad", sortDate: new Date(2025, 2, 7) },
  { date: "25.03.11", client: "Hankook Tire", category: "N", project: "Off-Road Tire Naming Project", sortDate: new Date(2025, 2, 11) },
  { date: "25.03.17", client: "LG", category: "P", project: "LG MAGNIT PPT Deck Proofcreation", sortDate: new Date(2025, 2, 17) },
  { date: "25.03.25", client: "LG", category: "B", project: "LG Newsletter BITE March 2025", sortDate: new Date(2025, 2, 25) },
  { date: "25.04.01", client: "LG", category: "P", project: "AI Refrigerator Msg Mtx Washing", sortDate: new Date(2025, 3, 1) },
  { date: "25.04.02", client: "LG", category: "B", project: "Brand Playbook Washing", sortDate: new Date(2025, 3, 2) },
  { date: "25.04.08", client: "LG", category: "B", project: "B2B Voice Guideline Proofcreation", sortDate: new Date(2025, 3, 8) },
  { date: "25.04.15", client: "LG", category: "B", project: "LGE Playbook", sortDate: new Date(2025, 3, 15) },
  { date: "25.04.18", client: "Zespri", category: "B", project: "Zespri Activation Plan Translation", sortDate: new Date(2025, 3, 18) },
  { date: "25.04.23", client: "Posco", category: "B", project: "COC Transcreation", sortDate: new Date(2025, 3, 23) },
  { date: "25.04.23", client: "SK", category: "B", project: "SK Innovation Brand Message Transcreation", sortDate: new Date(2025, 3, 23) },
  { date: "25.04.25", client: "LG", category: "E", project: "LG Newsletter BITE April 2025", sortDate: new Date(2025, 3, 25) },
  { date: "25.05.09", client: "Amorepacific", category: "B", project: "Corporate Vision Message House", sortDate: new Date(2025, 4, 9) },
  { date: "25.05.14", client: "Hyundai", category: "V", project: "Hyundai Volleyball Championship Video Transcreation", sortDate: new Date(2025, 4, 14) },
  { date: "25.05.14", client: "LG", category: "N", project: "B2B Slogans (Hero Messages)", sortDate: new Date(2025, 4, 14) },
  { date: "25.05.16", client: "TheBorn", category: "P", project: "Korean Sauce Name Review", sortDate: new Date(2025, 4, 16) },
  { date: "25.05.21", client: "LG", category: "B", project: "B2B Brand Message House", sortDate: new Date(2025, 4, 21) },
  { date: "25.05.21", client: "Zespri", category: "E", project: "Zespri Activation Plan Presentation Translation", sortDate: new Date(2025, 4, 21) },
  { date: "25.05.28", client: "Kia", category: "E", project: "Kia Exhibition Booth Red Dot Entry", sortDate: new Date(2025, 4, 28) },
  { date: "25.06.04", client: "LG", category: "B", project: "Radio Optimism Campaign Statement", sortDate: new Date(2025, 5, 4) },
  { date: "25.06.05", client: "LG", category: "N", project: "Marine Glass Naming", sortDate: new Date(2025, 5, 5) },
  { date: "25.06.09", client: "LG", category: "E", project: "CES Key Phrase Review", sortDate: new Date(2025, 5, 9) },
  { date: "25.06.10", client: "Amorepacific", category: "V", project: "Brand Film", sortDate: new Date(2025, 5, 10) },
  { date: "25.07.02", client: "Huvitz", category: "N", project: "DualCraft Slogan", sortDate: new Date(2025, 6, 2) }
]

const categoryConfig = {
  N: { name: "Naming & Slogans", color: "#ff6b6b" },
  E: { name: "Editorial & Events", color: "#7a6bf3" },
  P: { name: "Products & Sales", color: "#45b7d1" },
  S: { name: "Social Media", color: "#96ceb4" },
  V: { name: "Video & CMs", color: "#feca57" },
  B: { name: "Brand & Strategy", color: "#ff9ff3" },
}

function formatJapaneseDate(dateString: string): string {
  const [year, month, day] = dateString.split('.')
  const yearNum = parseInt(year, 10)
  const monthNum = parseInt(month, 10)
  const dayNum = parseInt(day, 10)
  
  // Convert 24 to 2024, 25 to 2025, etc.
  const fullYear = yearNum < 50 ? 2000 + yearNum : 1900 + yearNum
  
  // Pad single digits with leading zeros
  const paddedMonth = monthNum.toString().padStart(2, '0')
  const paddedDay = dayNum.toString().padStart(2, '0')
  
  return `${fullYear}年${paddedMonth}月${paddedDay}日`
}

export default function ProjectsPage() {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set(Object.keys(categoryConfig)))
  const [sortBy, setSortBy] = useState<'date' | 'client'>('date')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  const toggleFilter = (category: string) => {
    const newFilters = new Set(activeFilters)
    if (newFilters.has(category)) {
      newFilters.delete(category)
    } else {
      newFilters.add(category)
    }
    setActiveFilters(newFilters)
  }

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projectData.filter(project => activeFilters.has(project.category))
    
    filtered.sort((a, b) => {
      if (sortBy === 'date') {
        return sortOrder === 'desc' 
          ? b.sortDate.getTime() - a.sortDate.getTime()
          : a.sortDate.getTime() - b.sortDate.getTime()
      } else {
        const aClient = a.client.toLowerCase()
        const bClient = b.client.toLowerCase()
        return sortOrder === 'desc' 
          ? bClient.localeCompare(aClient)
          : aClient.localeCompare(bClient)
      }
    })
    
    return filtered
  }, [activeFilters, sortBy, sortOrder])

  const handleSort = (column: 'date' | 'client') => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(column)
      setSortOrder('desc')
    }
  }

  return (
    <main className="container">
      <Header currentPage="projects" />
      
      <style jsx>{`
        .filters {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 24px;
          padding: 20px;
          border: 1px solid #000;
        }

        .filter-item {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: opacity 0.3s ease;
          user-select: none;
        }

        .filter-item:hover {
          opacity: 0.7;
        }

        .category-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 1px solid #000;
          transition: opacity 0.3s ease;
        }

        .category-dot.inactive {
          opacity: 0.3;
        }

        .filter-label {
          font-size: 1rem;
          font-weight: 300;
          transition: opacity 0.3s ease;
        }

        .filter-item.inactive .filter-label {
          opacity: 0.3;
        }

        .table-container {
          overflow-x: auto;
          border: 1px solid #000;
        }

        .projects-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 1rem;
          background: none;
        }

        .projects-table th,
        .projects-table td {
          padding: 8px 12px;
          text-align: left;
          border-bottom: 1px solid #e0e0e0;
        }

        .projects-table th {
          background: none;
          font-weight: 400;
          cursor: pointer;
          transition: background 0.3s ease;
          position: relative;
          border-right: 1px solid #e0e0e0;
        }

        .projects-table th:first-child {
          cursor: default;
          width: 60px;
        }

        .projects-table th:last-child {
          border-right: none;
        }

        .projects-table th:hover:not(:first-child) {
          background: #f9f9f9;
        }

        .date-cell,
        .client-cell {
          font-family: 'Geist Mono', monospace;
          font-size: 0.9rem;
        }

        .projects-table tbody tr {
          transition: all 0.3s ease;
          animation: fadeInStagger 0.4s ease-in-out;
        }

        .projects-table tbody tr:hover {
          background:rgb(240, 239, 239);
        }

        .table-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid #000;
          margin: 0 auto;
        }

        .project-count {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 16px;
        }

        .sort-indicator {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.8rem;
        }

        @keyframes fadeInStagger {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .projects-table tbody tr:nth-child(1) { animation-delay: 0.1s; }
        .projects-table tbody tr:nth-child(2) { animation-delay: 0.15s; }
        .projects-table tbody tr:nth-child(3) { animation-delay: 0.2s; }
        .projects-table tbody tr:nth-child(4) { animation-delay: 0.25s; }
        .projects-table tbody tr:nth-child(5) { animation-delay: 0.3s; }
        .projects-table tbody tr:nth-child(6) { animation-delay: 0.35s; }
        .projects-table tbody tr:nth-child(7) { animation-delay: 0.4s; }
        .projects-table tbody tr:nth-child(8) { animation-delay: 0.45s; }
        .projects-table tbody tr:nth-child(9) { animation-delay: 0.5s; }
        .projects-table tbody tr:nth-child(10) { animation-delay: 0.55s; }

        @media (max-width: 768px) {
          .filters {
            flex-direction: column;
            gap: 12px;
          }
          
          .projects-table th,
          .projects-table td {
            padding: 6px 8px;
            font-size: 0.85rem;
          }
        }
      `}</style>

            <div className="project-count">
        {filteredAndSortedProjects.length} project{filteredAndSortedProjects.length !== 1 ? 's' : ''}
      </div>

      <div className="filters">
        {Object.entries(categoryConfig).map(([key, config]) => (
          <div 
            key={key} 
            className={`filter-item ${!activeFilters.has(key) ? 'inactive' : ''}`}
            onClick={() => toggleFilter(key)}
          >
            <div 
              className={`category-dot ${!activeFilters.has(key) ? 'inactive' : ''}`}
              style={{ backgroundColor: config.color }}
            />
            <span className="filter-label">{config.name}</span>
          </div>
        ))}
      </div>

      <div className="table-container">
        <table className="projects-table">
          <thead>
            <tr>
              <th></th>
              <th onClick={() => handleSort('date')}>
                Date
                {sortBy === 'date' && (
                  <span className="sort-indicator">
                    {sortOrder === 'desc' ? '↓' : '↑'}
                  </span>
                )}
              </th>
              <th onClick={() => handleSort('client')}>
                Client
                {sortBy === 'client' && (
                  <span className="sort-indicator">
                    {sortOrder === 'desc' ? '↓' : '↑'}
                  </span>
                )}
              </th>
              <th>Project</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedProjects.map((project, index) => (
              <tr key={`${project.date}-${project.client}-${project.project}-${Array.from(activeFilters).join('')}`}>
                <td>
                  <div 
                    className="table-dot"
                    style={{ backgroundColor: categoryConfig[project.category as keyof typeof categoryConfig]?.color }}
                  />
                </td>
                <td className="date-cell">{formatJapaneseDate(project.date)}</td>
                <td className="client-cell">{project.client || '—'}</td>
                <td>{project.project}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}