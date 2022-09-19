import { StayPreview } from './stay-preview'

export function StayList({ stays }) {
    var x=0
    if(!stays)return
    return (
        <div className='card-container'>
            {stays.map(stay => {
            x++
            if(x>100)return
            return<StayPreview key={stay._id} stay={stay} />})}
        </div>
    )
}



