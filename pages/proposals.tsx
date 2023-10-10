import ProposalItem from '@/components/Proposal';
import HomePageBar from '@/components/HomePageBar';
export default function Proposals() {
  const list = [
    {
      logo: '/Logo.png',
      title:'LOREM IPSUM DOLOR SIT AMETC.....',
      description: 'Brief info about the proposal',
      endsIn: '16 hours',
      quorumReached: 34.21
    },
    {
        logo: '/Logo.png',
        title:'LOREM IPSUM DOLOR SIT AMETC.....',
        description: 'Brief info about the proposal',
        endsIn: '16 hours',
        quorumReached: 87.56
    },
    {
        logo: '/Logo.png',
        title:'LOREM IPSUM DOLOR SIT AMETC.....',
        description: 'Brief info about the proposal',
        endsIn: 'Ended',
        quorumReached: undefined
    }
  ];
  return (
    <main
      className={`min-h-screen items-center justify-center py-12`}
    >
      <HomePageBar />
      <div className='flex z-10 gap-8 flex-wrap justify-center items-center'>
        {
          list.map((listItem) => (
            <ProposalItem proposal={listItem}/>
          ))
        }
      </div>
    </main>
  )
}
