import './App.css'
import TeamMemberCard from './components/TeamMemberCard'

function App() {

  const teamMembers = [

    { name: 'ABC', 
      role: 'CEO' 
    },
    { name: 'XYZ', 
      role: 'CTO' 
    },
    {
      name:"PQR",
      role:"CFO"
    }
  ]

  return (
    <>
      <h1>Team Members</h1>
      <div className="team-members">
        {teamMembers.map((item) => (
          <TeamMemberCard key={item.name} members={item} />
        ))}
      </div>  
    </>
  )
}

export default App
