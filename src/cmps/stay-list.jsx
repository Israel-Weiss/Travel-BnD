import { StayPreview } from './stay-preview'

export function StayList({ stays }) {
   
    if (!stays) return
    return (
        <div className='card-container'>
            {stays.map(stay => {
                return <StayPreview key={stay._id} stay={stay} />
            })}
        </div>
    )
}



