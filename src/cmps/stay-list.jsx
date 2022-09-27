import { StayPreview } from './stay-preview'
export function StayList({ stays, filterBy }) {

    if (!stays) return
    return (
    
            <div className={filterBy ? 'explorer card-container' : 'card-container'}>
                {stays.map(stay => {
                    return <StayPreview key={stay._id} stay={stay} />
                })}
            </div>
        
     
    )
}



